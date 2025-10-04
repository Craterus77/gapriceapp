import { Product } from '../lib/data';
import { Package, FileText } from 'lucide-react';

interface ProductCardProps {
  products: Product[];
  onQuoteClick: (product?: Product) => void;
}

export function ProductCard({ products, onQuoteClick }: ProductCardProps) {
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Package className={`${getCategoryColor(category).replace('bg-', 'text-')} w-5 h-5 flex-shrink-0`} />
              <span className={`${getCategoryColor(category)} text-white text-xs font-medium px-2 py-1 rounded`}>
                {category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{productName}</h3>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
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
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors shadow-sm font-medium text-sm"
            >
              <FileText className="w-4 h-4" />
              Quick Quote
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-light-gray">
                <th className="text-left py-3 px-2 font-semibold text-charcoal">Size (L)</th>
                <th className="text-left py-3 px-2 font-semibold text-charcoal">Pack Qty</th>
                <th className="text-right py-3 px-2 font-semibold text-charcoal bg-primary/10">MOQ Price</th>
                <th className="text-right py-3 px-2 font-semibold text-charcoal bg-primary/20">Pallet Price</th>
                <th className="text-center py-3 px-2 font-semibold text-charcoal">Per Pallet</th>
                <th className="text-right py-3 px-2 font-semibold text-charcoal">Retail Price</th>
                <th className="text-right py-3 px-2 font-semibold text-charcoal">$/L</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className={`border-b border-gray-100 hover:bg-light-gray/20 ${index % 2 === 0 ? 'bg-white' : 'bg-light-gray/10'}`}
                >
                  <td className="py-3 px-2 font-medium text-charcoal">{product.piece_size_lt}</td>
                  <td className="py-3 px-2 text-charcoal">{product.pieces_per_pack}</td>
                  <td className="py-3 px-2 text-right text-charcoal bg-primary/5">{formatCurrencyWhole(product.moq_piece_price)}</td>
                  <td className="py-3 px-2 text-right text-charcoal bg-primary/10">{formatCurrencyWhole(product.per_pack_pallet_price)}</td>
                  <td className="py-3 px-2 text-center text-charcoal">{product.pack_per_pallet_qty}</td>
                  <td className="py-3 px-2 text-right text-charcoal">
                    {formatCurrencyWhole(product.rec_retail_price)}
                  </td>
                  <td className="py-3 px-2 text-right text-gray-600">
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
