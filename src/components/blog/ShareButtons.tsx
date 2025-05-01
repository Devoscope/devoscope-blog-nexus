
import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
  // Ensure we have the full URL
  const fullUrl = url.startsWith('http') ? url : `https://devoscopeconsultants.com${url}`;
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${fullUrl}`)}`
  };

  return (
    <div className="border-t border-gray-200 pt-6 mb-8">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Share2 size={20} className="mr-2" />
        Share this article
      </h3>
      <div className="flex space-x-3">
        <a 
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          <Facebook size={20} />
        </a>
        <a 
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
          className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
        >
          <Twitter size={20} />
        </a>
        <a 
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href={shareLinks.email}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share via Email"
          className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
};

export default ShareButtons;
