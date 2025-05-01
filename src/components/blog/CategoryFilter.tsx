
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Badge 
        variant={selectedCategory === null ? "default" : "outline"}
        className={`text-sm px-4 py-1 cursor-pointer ${
          selectedCategory === null 
            ? 'bg-blue-700 hover:bg-blue-800' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        onClick={() => onCategoryChange(null)}
      >
        All
      </Badge>
      {categories.map((category) => (
        <Badge 
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className={`text-sm px-4 py-1 cursor-pointer ${
            selectedCategory === category 
              ? 'bg-blue-700 hover:bg-blue-800' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};

export default CategoryFilter;
