import { Product } from '../lib/data';
import { Package } from 'lucide-react';

interface ProductCardProps {
  products: Product[];
}

export function ProductCard({ products }: ProductCardProps) {
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
      'CROP AND SOIL NUTRITION': 'bg-green-600',
      'IPM & PESTICIDE PRODUCTS': 'bg-blue-600',
      'SURFACTANTS & DEFOLIANT': 'bg-amber-600',
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
          {logoUrl && (
            <div className="ml-4 flex-shrink-0">
              <img
                src={logoUrl}
                alt={`${productName} logo`}
                className="w-24 h-24 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Size (L)</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Pack Qty</th>
                <th className="text-right py-3 px-2 font-semibold text-gray-700 bg-green-100">MOQ Price</th>
                <th className="text-right py-3 px-2 font-semibold text-gray-700 bg-green-200">Pallet Price</th>
                <th className="text-center py-3 px-2 font-semibold text-gray-700">Per Pallet</th>
                <th className="text-right py-3 px-2 font-semibold text-gray-700">Retail Price</th>
                <th className="text-right py-3 px-2 font-semibold text-gray-700">$/L</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className={`border-b border-gray-100 hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="py-3 px-2 font-medium text-gray-900">{product.piece_size_lt}</td>
                  <td className="py-3 px-2 text-gray-700">{product.pieces_per_pack}</td>
                  <td className="py-3 px-2 text-right text-gray-900 bg-green-50">{formatCurrencyWhole(product.moq_piece_price)}</td>
                  <td className="py-3 px-2 text-right text-gray-900 bg-green-100">{formatCurrencyWhole(product.per_pack_pallet_price)}</td>
                  <td className="py-3 px-2 text-center text-gray-700">{product.pack_per_pallet_qty}</td>
                  <td className="py-3 px-2 text-right text-gray-900">
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
