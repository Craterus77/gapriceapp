export interface Product {
  id: string;
  product_name: string;
  category: string;
  description: string;
  piece_size_lt: number;
  pieces_per_pack: number;
  moq_piece_price: number;
  pack_per_pallet_qty: string;
  per_pack_pallet_price: number;
  rec_retail_price: number;
  rec_retail_price_per_l: number;
  display_order: number;
  logo_url: string;
}

// Parse price string like "$1,500.00" or "$18.00" to number
function parsePrice(priceStr: string): number {
  if (!priceStr || priceStr === 'NA' || priceStr === 'POA' || priceStr === '$0.00' || priceStr.trim() === '') return 0;
  return parseFloat(priceStr.replace(/[$,]/g, ''));
}

// Parse CSV line handling quoted fields
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);

  return result;
}

async function loadProductData(): Promise<Product[]> {
  const response = await fetch('/Productpricelist25090.csv');
  const text = await response.text();
  const lines = text.split('\n').filter(line => line.trim());

  const products: Product[] = [];
  let displayOrder = 0;

  // Skip header (line 0)
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;

    const fields = parseCSVLine(line);
    if (fields.length < 11) continue;

    const category = fields[0].trim();
    const productName = fields[1].trim();
    const stockCode = fields[2].trim();
    const pieceSizeLt = parseFloat(fields[3]) || 0;
    const piecesPerPack = parseInt(fields[4]) || 0;
    const moqPiecePrice = parsePrice(fields[5]);
    const packPerPalletQty = fields[6].trim();
    const perPackPalletPrice = parsePrice(fields[7]);
    const recRetailPrice = parsePrice(fields[10]);
    const recRetailPricePerL = parsePrice(fields[11]);

    if (!category || !productName || !stockCode) continue;

    products.push({
      id: stockCode,
      product_name: productName,
      category: category,
      description: stockCode,
      piece_size_lt: pieceSizeLt,
      pieces_per_pack: piecesPerPack,
      moq_piece_price: moqPiecePrice,
      pack_per_pallet_qty: packPerPalletQty,
      per_pack_pallet_price: perPackPalletPrice,
      rec_retail_price: recRetailPrice,
      rec_retail_price_per_l: recRetailPricePerL,
      display_order: displayOrder++,
      logo_url: ''
    });
  }

  return products;
}

export async function fetchProducts(): Promise<Product[]> {
  return await loadProductData();
}
