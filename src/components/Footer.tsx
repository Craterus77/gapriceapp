import { useState } from 'react';
import { User, ChevronDown, ChevronUp } from 'lucide-react';

export function Footer() {
  const [isContactExpanded, setIsContactExpanded] = useState(false);

  return (
    <footer className="bg-charcoal text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Contact Team Section - Collapsible */}
        <div className="mb-8">
          <button
            onClick={() => setIsContactExpanded(!isContactExpanded)}
            className="w-full flex items-center justify-between py-4 hover:bg-charcoal/50 transition-colors rounded-lg px-4"
          >
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-white">Contact Our Team</h3>
            </div>
            {isContactExpanded ? (
              <ChevronUp className="w-5 h-5 text-primary" />
            ) : (
              <ChevronDown className="w-5 h-5 text-primary" />
            )}
          </button>
          {isContactExpanded && (
            <div className="px-4 pb-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Regional Sales Representative</h4>
                  <p className="text-sm text-gray-400">Sharlene Roser</p>
                  <p className="text-sm text-primary font-medium">0459 570 537</p>
                  <a href="mailto:sharlene@growthag.com.au" className="text-sm text-primary hover:text-primary-light">
                    sharlene@growthag.com.au
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Business Development Manager</h4>
                  <p className="text-sm text-gray-400">Michael Cook</p>
                  <p className="text-sm text-primary font-medium">0447 502 520</p>
                  <a href="mailto:mcook@growthag.com.au" className="text-sm text-primary hover:text-primary-light">
                    mcook@growthag.com.au
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Technical Manager</h4>
                  <p className="text-sm text-gray-400">Felipe Dantas</p>
                  <p className="text-sm text-primary font-medium">0428 211 114</p>
                  <a href="mailto:felipe@growthag.com.au" className="text-sm text-primary hover:text-primary-light">
                    felipe@growthag.com.au
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>© 2025 Growth Agriculture Pty Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
