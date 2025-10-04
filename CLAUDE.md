# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Growth Agriculture product pricelist web application built with React, TypeScript, and Vite. It displays agricultural products (crop nutrition, pesticides, surfactants) with pricing information in a searchable catalog format. Data is loaded from CSV files.

## Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
```

## Architecture

### Data Flow
1. **CSV Data Sources**: Product data comes from two CSV files in `src/csv/`:
   - `StockProdPack.csv`: Product catalog with stock codes, names, categories
   - `pricelist2509.csv`: Pricing information keyed by stock code
2. **Data Loading**: `src/lib/data.ts` fetches and parses both CSV files, joining them by stock code
3. **Product Filtering**: Only products marked as "Current=Yes" are loaded
4. **Product Grouping**: Products are grouped by `product_name` (same product can have multiple size variants)
5. **Search & Filter**: Client-side filtering searches across product name, description, and category
6. **Display**: Each product group is rendered as a single card showing all size variants in a table

### Key Patterns

**Product Data Structure**: Each product variant (size) is a separate row in the CSV. Products with the same name are grouped together in the UI. The `Product` interface in `src/lib/data.ts` defines the complete schema.

**CSV Parsing**:
- `loadStockData()` reads product catalog and filters by Current=Yes
- `loadPricelistData()` parses tab-separated pricing data
- Data is joined by stock code to create complete product records

**Category System**: Three categories with color coding:
- CROP AND SOIL NUTRITION (green)
- IPM & PESTICIDE PRODUCTS (blue)
- SURFACTANTS & DEFOLIANT (amber)

**Pricing Display**:
- MOQ Price and Pallet Price are highlighted (green backgrounds)
- Prices formatted with `toLocaleString` for proper thousands separators
- Zero values display as "N/A"

### Component Structure

- `App.tsx`: Main container with data loading, search state, and product grouping logic
- `CategorySection.tsx`: Maps grouped products to ProductCard components
- `ProductCard.tsx`: Displays a product group with variants in a table format
- `SearchBar.tsx`: Controlled search input component
- `Header.tsx` & `Footer.tsx`: Layout components
- `InfoSection.tsx`: Static information section
- `src/lib/data.ts`: CSV data loading and parsing utilities
- to memorize