import { Search, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const { theme } = useTheme();

  return (
    <div className="relative max-w-2xl mx-auto mb-8">
      <div className="relative">
        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search products by name, category, or description..."
          className={`w-full pl-12 pr-12 py-4 text-lg border-2 rounded-lg transition-all focus:outline-none focus:ring-2 ${
            theme === 'dark'
              ? 'bg-dark_green-600 border-dark_green-700 text-white placeholder-gray-400 focus:border-moss_green focus:ring-moss_green/20'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary/20'
          }`}
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
