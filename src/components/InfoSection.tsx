import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function InfoSection() {
  const [isNotesExpanded, setIsNotesExpanded] = useState(false);

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
      <div className="bg-amber-900/20 border border-amber-800/40 rounded-lg overflow-hidden">
        <button
          onClick={() => setIsNotesExpanded(!isNotesExpanded)}
          className="w-full p-6 flex items-center justify-between hover:bg-amber-900/30 transition-colors"
        >
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-500" />
            <h3 className="text-lg font-semibold text-white">Important Notes</h3>
          </div>
          {isNotesExpanded ? (
            <ChevronUp className="w-5 h-5 text-amber-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-amber-500" />
          )}
        </button>
        {isNotesExpanded && (
          <div className="px-6 pb-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {notes.map((note, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

    </div>
  );
}
