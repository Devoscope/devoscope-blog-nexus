
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from '@/data/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/blog/BlogCard';
import CategoryFilter from '@/components/blog/CategoryFilter';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

const BlogList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const uniqueCategories = useMemo(() => {
    return Array.from(new Set(BLOG_POSTS.map(post => post.category)));
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === null || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredPost = BLOG_POSTS[0]; // Use the first post as featured

  return (
    <>
      <Helmet>
        <title>Blog - Insights & Resources | Devoscope Consultants</title>
        <meta 
          name="description" 
          content="Explore the latest insights, guides, and technology trends from Devoscope Consultants. Our blog covers topics on web development, CRM integration, DevOps, cloud solutions, and more."
        />
        <meta 
          name="keywords" 
          content="technology blog, web development, CRM integration, DevOps, cloud solutions, Vicidial, mobile app development, Devoscope Consultants"
        />
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Blog - Insights & Resources | Devoscope Consultants" />
        <meta 
          property="og:description" 
          content="Explore the latest insights, guides, and technology trends from Devoscope Consultants."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devoscopeconsultants.com/blog" />
        <meta property="og:image" content="https://devoscopeconsultants.com/og-image.jpg" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://devoscopeconsultants.com/blog" />
        
        {/* Structured Data for Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Devoscope Consultants Blog",
            "description": "Insights and resources on technology, web development, and business solutions.",
            "url": "https://devoscopeconsultants.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Devoscope Consultants Pvt. Ltd.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://devoscopeconsultants.com/logo.png"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow bg-gray-50">
          {/* Hero Section */}
          <section className="bg-blue-700 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Resources</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Expert insights, guides, and resources on technology solutions for your business
              </p>
            </div>
          </section>
          
          {/* Blog Content */}
          <section className="container mx-auto px-4 py-12">
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="relative mb-6">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <CategoryFilter
                categories={uniqueCategories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
            
            {/* Featured Article */}
            {!searchTerm && !selectedCategory && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
                <BlogCard post={featuredPost} featured />
              </div>
            )}
            
            {/* Articles Grid */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {searchTerm || selectedCategory ? 'Search Results' : 'Latest Articles'}
              </h2>
              
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-700">No articles found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
            
            {/* Newsletter Section */}
            <div className="mt-16">
              <NewsletterSignup />
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogList;
