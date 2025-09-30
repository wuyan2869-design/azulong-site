import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import Papa from 'papaparse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Product {
  family: string;
  sku: string;
  category: string;
  standard: string;
  oem_refs: string;
  diameter_in: number | null;
  length_in: number | null;
  thread: string | null;
  grade: string;
  material: string;
  finish: string;
  weight_kg: number;
  min_order: number;
  pack: number;
  image: string;
}

function parseNumber(val: string | number): number | null {
  if (val === 'N/A' || val === '' || val === null || val === undefined) {
    return null;
  }
  const parsed = parseFloat(val.toString());
  return isNaN(parsed) ? null : parsed;
}

function parseInteger(val: string | number): number {
  const parsed = parseInt(val.toString());
  return isNaN(parsed) ? 0 : parsed;
}

async function buildProducts() {
  try {
    console.log('Starting product data build...');

    // Read CSV file
    const csvPath = path.join(__dirname, '../content/products.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    // Parse CSV
    const parseResult = Papa.parse(csvContent, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header: string) => header.trim()
    });

    if (parseResult.errors.length > 0) {
      console.error('CSV parse error:', parseResult.errors);
      throw new Error('CSV parse failed');
    }

    // Transform data
    const products: Product[] = (parseResult.data as Record<string, string>[]).map((row) => ({
      family: row.family || '',
      sku: row.sku || '',
      category: row.category || '',
      standard: row.standard || '',
      oem_refs: row.oem_refs || '',
      diameter_in: parseNumber(row.diameter_in),
      length_in: parseNumber(row.length_in),
      thread: row.thread === 'N/A' ? null : row.thread,
      grade: row.grade || '',
      material: row.material || '',
      finish: row.finish || '',
      weight_kg: parseNumber(row.weight_kg) || 0,
      min_order: parseInteger(row.min_order),
      pack: parseInteger(row.pack),
      image: row.image || ''
    }));

    console.log(`Successfully parsed ${products.length} products`);

    // Write products.json
    const productsPath = path.join(__dirname, '../content/products.json');
    fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
    console.log(`Product data written to: ${productsPath}`);

    // Create simplified index data for search
    const searchData = {
      products: products,
      searchableText: products.map(product => ({
        sku: product.sku,
        text: [
          product.sku,
          product.category,
          product.standard,
          product.oem_refs,
          product.material,
          product.finish,
          product.grade,
          product.family
        ].filter(Boolean).join(' ').toLowerCase()
      }))
    };

    const searchIndexPath = path.join(__dirname, '../content/searchIndex.json');
    fs.writeFileSync(searchIndexPath, JSON.stringify(searchData, null, 2));
    console.log(`Search index written to: ${searchIndexPath}`);

    // Generate statistics
    const families = [...new Set(products.map(p => p.family))];
    const categories = [...new Set(products.map(p => p.category))];
    const standards = [...new Set(products.map(p => p.standard))];

    console.log('Build completion stats:');
    console.log(`- Product families: ${families.length} (${families.join(', ')})`);
    console.log(`- Categories: ${categories.length} (${categories.join(', ')})`);
    console.log(`- Standards: ${standards.length} (${standards.join(', ')})`);

  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

// Run build
buildProducts();