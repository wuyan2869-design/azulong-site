export interface Product {
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


export interface FilterOptions {
  diameters: (number | null)[];
  lengths: (number | null)[];
}