# Growth Agriculture Price List App

A modern, responsive web application for displaying agricultural product pricing and specifications. Built with React, TypeScript, and Vite, this application provides an easy-to-navigate catalog of crop nutrition, IPM, adjuvant, and defoliant products.

## Features

- **Product Catalog**: Comprehensive listing of agricultural products organized by category
- **Real-time Search**: Instant filtering across product names, descriptions, and categories
- **Product Variants**: Multiple size options displayed in a clean table format
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **CSV-Based Data**: Easy-to-update product information through CSV files
- **Category Organization**: Products grouped by:
  - Crop Nutrition
  - IPM (Integrated Pest Management)
  - Adjuvant
  - Defoliant

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data Source**: CSV files

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Craterus77/gapriceapp.git
cd gapriceapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
project/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Application header
│   │   ├── Footer.tsx       # Application footer
│   │   ├── SearchBar.tsx    # Search functionality
│   │   ├── InfoSection.tsx  # Information section
│   │   ├── CategorySection.tsx  # Category grouping
│   │   └── ProductCard.tsx  # Product display card
│   ├── csv/                 # CSV data files
│   │   ├── Productpricelist25090.csv  # Product pricing data
│   │   └── StockProdPack.csv          # Legacy stock data
│   ├── lib/
│   │   └── data.ts          # Data loading and parsing utilities
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
└── package.json             # Project dependencies
```

## Data Management

### CSV Structure

The application loads product data from `src/csv/Productpricelist25090.csv` with the following columns:

- **category**: Product category (Crop Nutrition, IPM, Adjuvant, Defoliant)
- **product name**: Name of the product
- **stock code**: Unique product identifier
- **PIECE Size (Lt)**: Size of individual piece in liters
- **Pieces per PACK**: Number of pieces per pack
- **MOQ PIECE PRICE**: Minimum order quantity price per piece
- **Pack per Pallet QTY**: Number of packs per pallet
- **PER PACK PALLET PRICE**: Price per pack at pallet quantity
- **Floor Price Buy QTY**: Floor price quantity threshold
- **Floor PACK PRICE**: Floor price per pack
- **Rec Retail Price**: Recommended retail price
- **Rec Retail Price/L**: Recommended retail price per liter

### Updating Product Data

1. Edit the CSV file at `src/csv/Productpricelist25090.csv`
2. Ensure proper CSV formatting with quoted fields containing commas
3. Save the file
4. The application will automatically reload with the new data

## Features in Detail

### Search Functionality
- Real-time filtering as you type
- Searches across product names, descriptions, and categories
- Case-insensitive matching
- Result count display

### Product Display
- Products grouped by name showing all size variants
- Color-coded categories:
  - Crop Nutrition: Green
  - IPM: Blue
  - Adjuvant: Amber
  - Defoliant: Red
- Highlighted pricing columns for quick reference
- Responsive table layout for mobile devices

### Price Formatting
- Automatic currency formatting with thousands separators
- "N/A" display for zero or invalid prices
- "POA" (Price on Application) support
- Price per liter calculations

## Customization

### Styling
The application uses Tailwind CSS for styling. To customize:
1. Edit `tailwind.config.js` for theme customization
2. Modify component-level styles in individual `.tsx` files
3. Update global styles in `src/index.css`

### Category Colors
To modify category colors, edit the `getCategoryColor` function in `src/components/ProductCard.tsx`:

```typescript
const getCategoryColor = (cat: string) => {
  const colors: Record<string, string> = {
    'Crop Nutrition': 'bg-green-600',
    'IPM': 'bg-blue-600',
    'Adjuvant': 'bg-amber-600',
    'Defoliant': 'bg-red-600'
  };
  return colors[cat] || 'bg-gray-600';
};
```

## Building for Production

1. Build the application:
```bash
npm run build
```

2. The optimized files will be in the `dist/` directory

3. Preview the production build:
```bash
npm run preview
```

## Deployment

The application can be deployed to any static hosting service:

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Copy dist/ contents to gh-pages branch
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to Growth Agriculture.

## Contact

For questions or support, please contact Growth Agriculture.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
