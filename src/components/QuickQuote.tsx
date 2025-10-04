import { useState } from 'react';
import { X, Plus, Trash2, FileText } from 'lucide-react';
import { Product } from '../lib/data';

interface QuoteItem {
  id: string;
  product: Product;
  quantity: number;
  pricingLevel: 'moq' | 'pallet' | 'floor';
}

interface QuickQuoteProps {
  products: Product[];
  initialProduct?: Product;
  onClose: () => void;
}

export function QuickQuote({ products, initialProduct, onClose }: QuickQuoteProps) {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>(
    initialProduct
      ? [{ id: crypto.randomUUID(), product: initialProduct, quantity: 1, pricingLevel: 'moq' }]
      : []
  );

  // Group products by name for the dropdown
  const productsByName = products.reduce((acc, product) => {
    if (!acc[product.product_name]) {
      acc[product.product_name] = [];
    }
    acc[product.product_name].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  const productNames = Object.keys(productsByName).sort();

  const addQuoteItem = () => {
    setQuoteItems([
      ...quoteItems,
      {
        id: crypto.randomUUID(),
        product: products[0],
        quantity: 1,
        pricingLevel: 'moq'
      }
    ]);
  };

  const removeQuoteItem = (id: string) => {
    setQuoteItems(quoteItems.filter(item => item.id !== id));
  };

  const updateQuoteItem = (id: string, updates: Partial<QuoteItem>) => {
    setQuoteItems(
      quoteItems.map(item => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const getPrice = (item: QuoteItem): number => {
    switch (item.pricingLevel) {
      case 'moq':
        return item.product.moq_piece_price;
      case 'pallet':
        return item.product.per_pack_pallet_price;
      case 'floor':
        return item.product.per_pack_pallet_price; // Using pallet price as floor for now
      default:
        return item.product.moq_piece_price;
    }
  };

  const getSubtotal = (item: QuoteItem): number => {
    return getPrice(item) * item.quantity;
  };

  const getTotalExGST = (): number => {
    return quoteItems.reduce((sum, item) => sum + getSubtotal(item), 0);
  };

  const getGST = (): number => {
    return getTotalExGST() * 0.1;
  };

  const getTotalIncGST = (): number => {
    return getTotalExGST() + getGST();
  };

  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-green-600 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Quick Quote</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-green-700 rounded-full p-1 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4">
            {quoteItems.map((item, index) => (
              <div key={item.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                  {/* Product Select */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product
                    </label>
                    <select
                      value={item.product.product_name}
                      onChange={(e) => {
                        const selectedProducts = productsByName[e.target.value];
                        if (selectedProducts && selectedProducts[0]) {
                          updateQuoteItem(item.id, { product: selectedProducts[0] });
                        }
                      }}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {productNames.map(name => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Pack Size Select */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pack Size
                    </label>
                    <select
                      value={item.product.id}
                      onChange={(e) => {
                        const selectedProduct = products.find(p => p.id === e.target.value);
                        if (selectedProduct) {
                          updateQuoteItem(item.id, { product: selectedProduct });
                        }
                      }}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {productsByName[item.product.product_name]?.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.piece_size_lt}L
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Pricing Level */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pricing Level
                    </label>
                    <select
                      value={item.pricingLevel}
                      onChange={(e) =>
                        updateQuoteItem(item.id, { pricingLevel: e.target.value as 'moq' | 'pallet' | 'floor' })
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="moq">MOQ Price</option>
                      <option value="pallet">Pallet Price</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity (packs)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuoteItem(item.id, { quantity: parseInt(e.target.value) || 1 })
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Price Info Row */}
                <div className="mt-4 flex items-center justify-between border-t border-gray-300 pt-4">
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-gray-600">Unit Price: </span>
                      <span className="font-semibold text-gray-900">{formatCurrency(getPrice(item))}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Subtotal: </span>
                      <span className="font-semibold text-green-600">{formatCurrency(getSubtotal(item))}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeQuoteItem(item.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full p-2 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Item Button */}
          <button
            onClick={addQuoteItem}
            className="mt-4 flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Another Product
          </button>
        </div>

        {/* Footer with Totals */}
        <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
          <div className="max-w-md ml-auto space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal (Ex GST):</span>
              <span className="font-semibold text-gray-900">{formatCurrency(getTotalExGST())}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">GST (10%):</span>
              <span className="font-semibold text-gray-900">{formatCurrency(getGST())}</span>
            </div>
            <div className="flex justify-between text-lg border-t border-gray-300 pt-2">
              <span className="font-bold text-gray-900">Total (Inc GST):</span>
              <span className="font-bold text-green-600">{formatCurrency(getTotalIncGST())}</span>
            </div>
          </div>
          <div className="mt-4 flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => window.print()}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Print Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
