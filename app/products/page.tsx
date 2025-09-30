'use client';

import Link from 'next/link';
import Image from 'next/image';
import ProductsStructuredData from '@/components/ProductsStructuredData';

// Featured products sourced from supplied photography
const featuredProducts = [
  {
    sku: 'PB-3/4-4-CATALOG',
    name: 'Plow Bolt 3/4" x 4"',
    category: 'Plow Bolt',
    standard: 'ASTM A449',
    oem: 'BOSS, Western, CAT compatible',
    diameter: '3/4"',
    length: '4"',
    material: 'Alloy Steel',
    finish: 'Black Oxide',
    image: 'plow-bolt-3-4.jpg',
    description: 'Heavy-duty plow bolt built for snow plows and ground-engaging equipment.',
  },
  {
    sku: 'PB-5/8-6-CATALOG',
    name: 'Plow Bolt 5/8" x 6"',
    category: 'Plow Bolt',
    standard: 'ASTM A449',
    oem: 'BOSS, Western, Fisher compatible',
    diameter: '5/8"',
    length: '6"',
    material: 'Alloy Steel',
    finish: 'Black Oxide',
    image: 'plow-bolt-5-8.jpg',
    description: 'Standard plow bolt used across leading snow plow assemblies.',
  },
  {
    sku: 'TB-1-6-CATALOG',
    name: 'Track Bolt 1" x 6"',
    category: 'Track Bolt',
    standard: 'ASTM A490',
    oem: 'CAT, Komatsu, John Deere compatible',
    diameter: '1"',
    length: '6"',
    material: 'Alloy Steel',
    finish: 'Black Oxide',
    image: 'track-bolt-1inch.jpg',
    description: 'Track bolt engineered for excavators and tracked undercarriage systems.',
  },
];

// Core Bolt Products - Our Specialty
const boltProducts = [
  {
    href: '/products/track-bolt',
    label: 'Track Bolt',
    description: 'Undercarriage fasteners for crawler equipment & mining machinery',
    specifications: 'Dia. 1/2" - 1-3/8" | US Standards | 65+ Part Numbers',
    applications: 'CAT, Komatsu, John Deere Compatible',
    image: '/images/products/track-bolt.svg',
  },
  {
    href: '/products/plow-bolt',
    label: 'Plow Bolt',
    description: 'Countersunk bolts for ground engaging tools & snow plows',
    specifications: 'Dia. 1/2" - 1-3/8" | US Standards | 65+ Part Numbers',
    applications: 'BOSS, Western, CAT Compatible',
    image: '/images/products/plow-bolt.svg',
  },
];

// Expanded Product Line
const expandedProducts = [
  {
    href: '/products/bucket-teeth',
    label: 'Bucket Teeth',
    description: 'Wear parts for excavators, loaders & dredging equipment',
    specifications: 'Alloy Steel Castings | HRC 48-52 | Custom Profiles',
    applications: 'Global OEM Replacement Parts',
    image: '/images/products/bucket-teeth.svg',
  },
];

export default function ProductsPage() {
  return (
    <>
      <ProductsStructuredData />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-10 text-white shadow-lg">
        <p className="text-sm uppercase tracking-wide text-blue-50/80">AzuLong Products</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Product Catalog</h1>
      </header>

      {/* Featured Products from Photos */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Featured Products</h2>
          <p className="text-slate-600">Showcase built from our in-house product photography.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {featuredProducts.map((product) => (
            <div
              key={product.sku}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3 overflow-hidden rounded-lg bg-slate-50">
                <Image
                  src={`/images/products/${product.image}`}
                  alt={product.name}
                  width={110}
                  height={110}
                  className="w-full h-28 object-contain p-2"
                />
              </div>

              <div className="space-y-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
                  <p className="text-xs text-blue-600 font-medium">{product.sku}</p>
                </div>

                <div className="text-xs text-slate-600">
                  <div><span className="font-medium">Diameter:</span> {product.diameter}</div>
                  <div><span className="font-medium">Length:</span> {product.length}</div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Bolt Products - Main Business */}
      <section className="mb-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Industrial Bolt Solutions</h2>
            <p className="text-slate-600">
              Our core expertise: systematic replacement fasteners for US and Japanese OEM equipment.
            </p>
          </div>
          <div className="hidden md:block px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-sm font-medium text-blue-800">130+ Part Numbers</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {boltProducts.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group rounded-2xl border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-white p-8 shadow-lg transition hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-md group-hover:shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.label}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700">
                    {product.label}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs">
                      <span className="font-medium text-slate-700 w-20">Specs:</span>
                      <span className="text-slate-600">{product.specifications}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="font-medium text-slate-700 w-20">OEM:</span>
                      <span className="text-slate-600">{product.applications}</span>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center text-xs font-medium text-blue-600 group-hover:text-blue-700">
                    View product catalog
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Expanded Product Line */}
      <section className="mb-12">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Expanded Product Line</h3>
          <p className="text-slate-600 text-sm">
            Leveraging the Ningbo export hub to support a broader range of industrial requirements.
          </p>
        </div>

        <div className="grid gap-6">
          {expandedProducts.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 group-hover:bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.label}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-700">
                    {product.label}
                  </h4>
                  <p className="text-slate-600 text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs">
                      <span className="font-medium text-slate-700 w-20">Specs:</span>
                      <span className="text-slate-600">{product.specifications}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="font-medium text-slate-700 w-20">Markets:</span>
                      <span className="text-slate-600">{product.applications}</span>
                    </div>
                  </div>
                  <div className="mt-3 inline-flex items-center text-xs font-medium text-slate-600 group-hover:text-slate-700">
                    Explore product details
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Professional Capabilities */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mt-16">
        <h3 className="text-2xl font-semibold text-slate-900 text-center mb-8">
          Professional Fastener Manufacturing
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">130+</div>
            <div className="text-sm text-slate-600">Cataloged part numbers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">1/2&quot;-1&quot;</div>
            <div className="text-sm text-slate-600">Diameter range (imperial)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
            <div className="text-sm text-slate-600">Years of OEM experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">Small batch</div>
            <div className="text-sm text-slate-600">Flexible order quantities</div>
          </div>
        </div>

        {/* B2B Value Props */}
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-white/60 rounded-lg p-4">
            <div className="text-sm font-medium text-slate-900 mb-1">Replacement specialists</div>
            <div className="text-xs text-slate-600">Compatible with US & Japanese OEMs</div>
          </div>
          <div className="bg-white/60 rounded-lg p-4">
            <div className="text-sm font-medium text-slate-900 mb-1">Structured catalog</div>
            <div className="text-xs text-slate-600">Diameter x length = part number</div>
          </div>
          <div className="bg-white/60 rounded-lg p-4">
            <div className="text-sm font-medium text-slate-900 mb-1">Global logistics</div>
            <div className="text-xs text-slate-600">Ningbo port advantage + agile shipping</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
