import { useState } from 'react';
import { User, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Footer() {
  const { theme } = useTheme();
  const [isContactExpanded, setIsContactExpanded] = useState(false);

  return (
    <footer className={`mt-16 ${theme === 'dark' ? 'bg-dark_green text-gray-300' : 'bg-white text-gray-600 border-t border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Contact Team Section - Collapsible */}
        <div className="mb-8">
          <button
            onClick={() => setIsContactExpanded(!isContactExpanded)}
            className={`w-full flex items-center justify-between py-4 transition-colors rounded-lg px-4 ${
              theme === 'dark' ? 'hover:bg-dark_green-600/50' : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <User className={`w-5 h-5 ${theme === 'dark' ? 'text-moss_green' : 'text-primary'}`} />
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact Our Team</h3>
            </div>
            {isContactExpanded ? (
              <ChevronUp className={`w-5 h-5 ${theme === 'dark' ? 'text-moss_green' : 'text-primary'}`} />
            ) : (
              <ChevronDown className={`w-5 h-5 ${theme === 'dark' ? 'text-moss_green' : 'text-primary'}`} />
            )}
          </button>
          {isContactExpanded && (
            <div className="px-4 pb-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div>
                  <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Regional Sales Representative</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Sharlene Roser</p>
                  <p className={`text-sm font-medium ${theme === 'dark' ? 'text-moss_green' : 'text-primary'}`}>0459 570 537</p>
                  <a href="mailto:sharlene@growthag.com.au" className={`text-sm ${
                    theme === 'dark' ? 'text-moss_green hover:text-moss_green-700' : 'text-primary hover:text-primary-light'
                  }`}>
                    sharlene@growthag.com.au
                  </a>
                </div>
                <div>
                  <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Business Development Manager</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Michael Cook</p>
                  <p className={`text-sm font-medium ${theme === 'dark' ? 'text-moss_green' : 'text-primary'}`}>0447 502 520</p>
                  <a href="mailto:mcook@growthag.com.au" className={`text-sm ${
                    theme === 'dark' ? 'text-moss_green hover:text-moss_green-700' : 'text-primary hover:text-primary-light'
                  }`}>
                    mcook@growthag.com.au
                  </a>
                </div>
                <div>
                  <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Technical Manager</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Felipe Dantas</p>
                  <p className={`text-sm font-medium ${theme === 'dark' ? 'text-moss_green' : 'text-primary'}`}>0428 211 114</p>
                  <a href="mailto:felipe@growthag.com.au" className={`text-sm ${
                    theme === 'dark' ? 'text-moss_green hover:text-moss_green-700' : 'text-primary hover:text-primary-light'
                  }`}>
                    felipe@growthag.com.au
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className={`border-t pt-6 text-center text-sm ${
          theme === 'dark' ? 'border-dark_green-600 text-gray-500' : 'border-gray-200 text-gray-500'
        }`}>
          <p>© 2025 Growth Agriculture Pty Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
