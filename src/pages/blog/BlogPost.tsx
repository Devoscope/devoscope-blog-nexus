
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from '@/data/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import ShareButtons from '@/components/blog/ShareButtons';
import { CalendarIcon, UserIcon, TagIcon, ChevronRight, ChevronLeft } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = BLOG_POSTS.find(post => post.slug === slug);
  
  useEffect(() => {
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center px-4">
          <div className="text-center max-w-lg">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
            <Button 
              onClick={() => navigate('/blog')}
              className="bg-blue-700 hover:bg-blue-800"
            >
              Browse All Articles
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Find related posts (same category or shared tags)
  const relatedPosts = BLOG_POSTS.filter(p => 
    p.slug !== post.slug && 
    (p.category === post.category || p.tags.some(tag => post.tags.includes(tag)))
  ).slice(0, 2);

  // Get next and previous posts for navigation
  const currentIndex = BLOG_POSTS.findIndex(p => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  // Format date for structured data
  const formattedDate = new Date(post.date).toISOString();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.title} | Devoscope Consultants</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.tags.join(', ')} />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://devoscopeconsultants.com/blog/${post.slug}`} />
        <meta property="article:published_time" content={formattedDate} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Canonical Link */}
        <link rel="canonical" href={`https://devoscopeconsultants.com/blog/${post.slug}`} />
        
        {/* Structured Data for Blog Post */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.image,
            "editor": post.author,
            "genre": post.category,
            "keywords": post.tags.join(','),
            "publisher": {
              "@type": "Organization",
              "name": "Devoscope Consultants Pvt. Ltd.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://devoscopeconsultants.com/logo.png"
              }
            },
            "url": `https://devoscopeconsultants.com/blog/${post.slug}`,
            "datePublished": formattedDate,
            "description": post.description,
            "author": {
              "@type": "Person",
              "name": post.author
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <div className="w-full h-[400px] relative">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center justify-between text-gray-600 mb-6 flex-wrap gap-4">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={post.authorImage} alt={post.author} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon size={18} className="mr-2" />
                  <span>{post.date}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center mb-6">
                <TagIcon size={18} className="mr-2 text-gray-500" />
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="mr-2 mb-2">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </header>
            
            {/* Article Content */}
            <article className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            {/* Share Section */}
            <ShareButtons title={post.title} url={`/blog/${post.slug}`} />
            
            {/* Post Navigation */}
            <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 mb-12 border-t border-b border-gray-200 py-6">
              {prevPost ? (
                <Link 
                  to={`/blog/${prevPost.slug}`} 
                  className="flex items-center text-blue-700 hover:text-blue-900"
                >
                  <ChevronLeft size={20} className="mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Previous</div>
                    <div className="font-medium">{prevPost.title}</div>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextPost && (
                <Link 
                  to={`/blog/${nextPost.slug}`} 
                  className="flex items-center text-blue-700 hover:text-blue-900 sm:text-right sm:ml-auto"
                >
                  <div>
                    <div className="text-sm text-gray-500">Next</div>
                    <div className="font-medium">{nextPost.title}</div>
                  </div>
                  <ChevronRight size={20} className="ml-2" />
                </Link>
              )}
            </div>
            
            {/* Newsletter Subscription */}
            <div className="mb-12">
              <NewsletterSignup />
            </div>
            
            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <div key={relatedPost.slug} className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <Badge variant="secondary" className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                          {relatedPost.category}
                        </Badge>
                        <h4 className="text-lg font-bold mb-2">{relatedPost.title}</h4>
                        <p className="text-gray-600 mb-3 line-clamp-2">{relatedPost.description}</p>
                        <Link 
                          to={`/blog/${relatedPost.slug}`}
                          className="inline-flex items-center text-blue-700 font-medium hover:text-blue-900"
                        >
                          Read more
                          <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
