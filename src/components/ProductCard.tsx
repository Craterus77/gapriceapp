import { Product } from '../lib/data';
import { Package, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProductCardProps {
  products: Product[];
  onQuoteClick: (product?: Product) => void;
}

export function ProductCard({ products, onQuoteClick }: ProductCardProps) {
  const { theme } = useTheme();
  const formatCurrency = (value: number) => {
    if (value === 0) return 'N/A';
    return `$${value.toFixed(2)}`;
  };

  const formatCurrencyWhole = (value: number) => {
    if (value === 0) return 'N/A';
    return `$${value.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const productName = products[0].product_name;
  const description = products[0].description;
  const category = products[0].category;
  const logoUrl = products[0].logo_url;

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      'Crop Nutrition': 'bg-primary',
      'IPM': 'bg-primary-dark',
      'Adjuvant': 'bg-charcoal',
      'Defoliant': 'bg-primary-dark',
    };
    return colors[cat] || 'bg-gray-600';
  };

  return (
    <div className={`rounded-lg shadow-md border transition-all duration-200 ${
      theme === 'dark'
        ? 'bg-dark_green border-dark_green-600 hover:shadow-lg hover:border-dark_green-500'
        : 'bg-white border-gray-200 hover:shadow-lg hover:border-gray-300'
    }`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Package className={`w-5 h-5 flex-shrink-0 ${
                theme === 'dark' ? 'text-moss_green' : getCategoryColor(category).replace('bg-', 'text-')
              }`} />
              <span className={`text-white text-xs font-medium px-2 py-1 rounded ${
                theme === 'dark' ? 'bg-moss_green' : getCategoryColor(category)
              }`}>
                {category}
              </span>
            </div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{productName}</h3>
            <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
          </div>
          <div className="ml-4 flex-shrink-0 flex items-start gap-3">
            {logoUrl && (
              <img
                src={logoUrl}
                alt={`${productName} logo`}
                className="w-24 h-24 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
            <button
              onClick={() => onQuoteClick(products[0])}
              className={`flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-colors shadow-sm font-medium text-sm ${
                theme === 'dark' ? 'bg-moss_green hover:bg-moss_green-700' : 'bg-primary hover:bg-primary-dark'
              }`}
            >
              <FileText className="w-4 h-4" />
              Quick Quote
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${theme === 'dark' ? 'border-dark_green-600' : 'border-gray-200'}`}>
                <th className={`text-left py-3 px-2 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Size (L)</th>
                <th className={`text-left py-3 px-2 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Pack Qty</th>
                <th className={`text-right py-3 px-2 font-semibold ${
                  theme === 'dark' ? 'text-gray-300 bg-moss_green/10' : 'text-gray-700 bg-primary/10'
                }`}>MOQ Price</th>
                <th className={`text-right py-3 px-2 font-semibold ${
                  theme === 'dark' ? 'text-gray-300 bg-moss_green/20' : 'text-gray-700 bg-primary/20'
                }`}>Pallet Price</th>
                <th className={`text-center py-3 px-2 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Per Pallet</th>
                <th className={`text-right py-3 px-2 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Retail Price</th>
                <th className={`text-right py-3 px-2 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>$/L</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className={`border-b ${
                    theme === 'dark'
                      ? `border-dark_green-600 hover:bg-dark_green-600/50 ${index % 2 === 0 ? 'bg-dark_green' : 'bg-dark_green/50'}`
                      : `border-gray-100 hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`
                  }`}
                >
                  <td className={`py-3 px-2 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{product.piece_size_lt}</td>
                  <td className={`py-3 px-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{product.pieces_per_pack}</td>
                  <td className={`py-3 px-2 text-right ${
                    theme === 'dark' ? 'text-white bg-moss_green/5' : 'text-gray-900 bg-primary/5'
                  }`}>{formatCurrencyWhole(product.moq_piece_price)}</td>
                  <td className={`py-3 px-2 text-right ${
                    theme === 'dark' ? 'text-white bg-moss_green/10' : 'text-gray-900 bg-primary/10'
                  }`}>{formatCurrencyWhole(product.per_pack_pallet_price)}</td>
                  <td className={`py-3 px-2 text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{product.pack_per_pallet_qty}</td>
                  <td className={`py-3 px-2 text-right ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {formatCurrencyWhole(product.rec_retail_price)}
                  </td>
                  <td className={`py-3 px-2 text-right ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {product.rec_retail_price_per_l > 0 ? formatCurrency(product.rec_retail_price_per_l) : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
