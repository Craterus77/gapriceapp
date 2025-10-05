import { Sprout, Phone, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`shadow-sm border-b ${theme === 'dark' ? 'bg-dark_green border-dark_green-600' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-fern_green text-white' : 'bg-primary text-white'}`}>
              <Sprout className="w-8 h-8" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Growth Agriculture</h1>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Wholesale Pricing September 2025</p>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-dark_green-600 text-white hover:bg-dark_green-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <div className={`border-t ${theme === 'dark' ? 'bg-dark_green-600 border-dark_green-700' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className={`w-4 h-4 ${theme === 'dark' ? 'text-moss_green' : 'text-primary'}`} />
              <span className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>07 4671 4030</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className={`w-4 h-4 ${theme === 'dark' ? 'text-moss_green' : 'text-primary'}`} />
              <a href="mailto:accounts@growthag.com.au" className={`${theme === 'dark' ? 'text-moss_green hover:text-moss_green-700' : 'text-primary hover:text-primary-light'}`}>
                accounts@growthag.com.au
              </a>
            </div>
            <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              33 Old Cunningham Hwy, Goondiwindi QLD 4390
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
