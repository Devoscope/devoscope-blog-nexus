
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, UserIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  return (
    <Card className={`overflow-hidden h-full flex flex-col ${featured ? 'shadow-lg' : 'shadow-sm'}`}>
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className={`w-full object-cover transition-transform duration-300 hover:scale-105 ${featured ? 'h-72' : 'h-56'}`}
        />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
            {post.category}
          </Badge>
        </div>
        <Link to={`/blog/${post.slug}`} className="block mb-2">
          <h3 className={`font-bold text-gray-900 hover:text-blue-700 ${featured ? 'text-2xl' : 'text-xl'}`}>
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{post.description}</p>
        <div className="flex items-center justify-between mt-auto text-sm text-gray-500">
          <div className="flex items-center">
            <UserIcon size={16} className="mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon size={16} className="mr-1" />
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
