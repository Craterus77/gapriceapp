import { useEffect, useState, useMemo } from 'react';
import { fetchProducts, Product } from './lib/data';
import { Header } from './components/Header';
import { CategorySection } from './components/CategorySection';
import { SearchBar } from './components/SearchBar';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';
import { QuickQuote } from './components/QuickQuote';
import { Loader2, AlertCircle } from 'lucide-react';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load products');
    } finally {
      setLoading(false);
    }
  }

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;

    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.product_name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  const groupedProducts = useMemo(() => {
    return filteredProducts.reduce((acc, product) => {
      if (!acc[product.product_name]) {
        acc[product.product_name] = [];
      }
      acc[product.product_name].push(product);
      return acc;
    }, {} as Record<string, Product[]>);
  }, [filteredProducts]);

  if (loading) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading product catalog...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Error Loading Products</h2>
          <p className="text-gray-400 mb-4">{error}</p>
          <button
            onClick={loadProducts}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const handleOpenQuote = (product?: Product) => {
    setQuoteProduct(product || null);
    setShowQuote(true);
  };

  const handleCloseQuote = () => {
    setShowQuote(false);
    setQuoteProduct(null);
  };

  return (
    <div className="min-h-screen bg-charcoal">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <InfoSection />

        {searchQuery && (
          <div className="mb-6 text-center">
            <p className="text-gray-400">
              Found <span className="font-semibold text-white">{Object.keys(groupedProducts).length}</span> products
            </p>
          </div>
        )}

        <CategorySection productGroups={groupedProducts} onQuoteClick={handleOpenQuote} />
      </main>

      <Footer />

      {showQuote && (
        <QuickQuote
          products={products}
          initialProduct={quoteProduct || undefined}
          onClose={handleCloseQuote}
        />
      )}
    </div>
  );
}

export default App;
