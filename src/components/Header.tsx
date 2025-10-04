import { Sprout, Phone, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 text-white p-3 rounded-lg">
              <Sprout className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Growth Agriculture</h1>
              <p className="text-sm text-gray-600">Wholesale Pricing September 2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">07 4671 4030</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-600" />
              <a href="mailto:accounts@growthag.com.au" className="text-green-600 hover:text-green-700">
                accounts@growthag.com.au
              </a>
            </div>
            <div className="text-gray-600">
              33 Old Cunningham Hwy, Goondiwindi QLD 4390
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
