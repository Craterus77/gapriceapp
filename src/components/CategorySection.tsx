import { Product } from '../lib/data';
import { ProductCard } from './ProductCard';

interface CategorySectionProps {
  productGroups: Record<string, Product[]>;
}

export function CategorySection({ productGroups }: CategorySectionProps) {
  const productNames = Object.keys(productGroups);

  if (productNames.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No products found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {productNames.map((productName) => (
        <ProductCard key={productName} products={productGroups[productName]} />
      ))}
    </div>
  );
}
