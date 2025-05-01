
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast.success('Thank you for subscribing to our newsletter!');
    }, 1000);
  };

  return (
    <div className="bg-blue-50 p-8 rounded-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold">Stay Updated</h3>
        <p className="text-gray-600 mt-2">
          Subscribe to our newsletter for the latest insights on technology and business solutions.
        </p>
      </div>
      <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your email address"
          className="flex-1"
          aria-label="Email address"
        />
        <Button 
          type="submit"
          className="bg-blue-700 hover:bg-blue-800"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
