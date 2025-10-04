import { Sprout, Phone, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-charcoal shadow-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-white p-3 rounded-lg">
              <Sprout className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Growth Agriculture</h1>
              <p className="text-sm text-gray-400">Wholesale Pricing September 2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-charcoal/80 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-gray-300">07 4671 4030</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:accounts@growthag.com.au" className="text-primary hover:text-primary-light">
                accounts@growthag.com.au
              </a>
            </div>
            <div className="text-gray-400">
              33 Old Cunningham Hwy, Goondiwindi QLD 4390
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
