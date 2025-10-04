import { AlertCircle, User } from 'lucide-react';

export function InfoSection() {
  const notes = [
    'All pricing is GST exclusive',
    'Minimum Order Prices quoted are Ex Goondiwindi Only and Ex Freight',
    'Pallet pricing is FIS',
    'FIS pricing may be considered on mixed pallet quantities',
    'The price of mini bulk containers (IBC\'s) is included in the product price',
    'We will consider repurchasing IBC\'s if they are returned at your expense to our Goondiwindi facility in a clean re-usable condition',
    'All eligible drumMUSTER Containers are able to participate in the drumMUSTER recycling program, eligible containers will have the DrumMuster logo on the label',
    'All prices are Recommended Retail and should be confirmed with your retail partner of choice and exclude any freight charges that may be applied by the reseller',
    'Recommended Retail Prices do not include freight or GST'
  ];

  return (
    <div className="mb-8 space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <h3 className="text-lg font-semibold text-gray-900">Important Notes</h3>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {notes.map((note, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-amber-600 mt-1">•</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">Contact Our Team</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Regional Sales Representative</h4>
            <p className="text-sm text-gray-700">Sharlene Roser</p>
            <p className="text-sm text-green-600 font-medium">0459 570 537</p>
            <a href="mailto:sharlene@growthag.com.au" className="text-sm text-green-600 hover:text-green-700">
              sharlene@growthag.com.au
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Business Development Manager</h4>
            <p className="text-sm text-gray-700">Michael Cook</p>
            <p className="text-sm text-green-600 font-medium">0447 502 520</p>
            <a href="mailto:mcook@growthag.com.au" className="text-sm text-green-600 hover:text-green-700">
              mcook@growthag.com.au
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Technical Manager</h4>
            <p className="text-sm text-gray-700">Felipe Dantas</p>
            <p className="text-sm text-green-600 font-medium">0428 211 114</p>
            <a href="mailto:felipe@growthag.com.au" className="text-sm text-green-600 hover:text-green-700">
              felipe@growthag.com.au
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
