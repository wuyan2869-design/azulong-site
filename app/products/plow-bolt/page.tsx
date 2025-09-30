'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 随机图片数组
const plowBoltImages = [
  'products/plow-bolt-catalog.jpg',
  '23.jpg',
  '24.jpg',
  '25.jpg'
];

// 随机选择图片函数
function getRandomImage() {
  return plowBoltImages[Math.floor(Math.random() * plowBoltImages.length)];
}

// 客户端随机图片组件
function RandomProductImage({ productName }: { productName: string; sku: string }) {
  const [imageName, setImageName] = React.useState('products/plow-bolt-catalog.jpg');

  React.useEffect(() => {
    setImageName(getRandomImage());
  }, []);

  return (
    <Image
      src={`/images/${imageName}`}
      alt={productName}
      width={110}
      height={110}
      className="w-full h-28 object-contain p-2"
    />
  );
}

// Note: Metadata moved to layout.tsx due to client component requirements

// Static product data extracted from Excel file - sorted by diameter
const plowBoltProducts = [
  // 1/2" diameter
  {
    sku: "4F3649",
    name: "BOLT, PLOW 1/2 X 2",
    diameter: "1/2\"",
    length: "2\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "4F3651",
    name: "BOLT, PLOW 1/2 X 2.1/2",
    diameter: "1/2\"",
    length: "2.1/2\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  // 5/8" diameter
  {
    sku: "PB-522",
    name: "BOLT, PLOW 5/8\" X 5\"",
    diameter: "5/8\"",
    length: "5\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "4F3656",
    name: "BOLT, PLOW 5/8X2.1/2",
    diameter: "5/8\"",
    length: "2.1/2\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "4F3657",
    name: "BOLT, PLOW 5/8 X 2.3/4",
    diameter: "5/8\"",
    length: "2.3/4\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  // 3/4" diameter
  {
    sku: "1J6762",
    name: "BOLT, PLOW 3/4X3",
    diameter: "3/4\"",
    length: "3\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "3/4X3-1/2PB",
    name: "BOLT, PLOW 3/4 X 3.1/2",
    diameter: "3/4\"",
    length: "3.1/2\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "4F7827",
    name: "BOLT, PLOW 3/4X2.1/4",
    diameter: "3/4\"",
    length: "2.1/4\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "PB-336",
    name: "BOLT, PLOW 3/4\" X 4\"",
    diameter: "3/4\"",
    length: "4\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "5P6783",
    name: "BOLT, PLOW 3/4 X 6",
    diameter: "3/4\"",
    length: "6\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "5P6784",
    name: "BOLT, PLOW 3/4 X 7.1/4",
    diameter: "3/4\"",
    length: "7.1/4\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  // 7/8" diameter
  {
    sku: "5J2409",
    name: "BOLT, PLOW 7/8 X 3",
    diameter: "7/8\"",
    length: "3\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "PB-744",
    name: "BOLT, PLOW 7/8 X 4",
    diameter: "7/8\"",
    length: "4\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  // 1.1/4" diameter
  {
    sku: "6V6535",
    name: "BOLT, PLOW 1.1/4 X 3.3/4",
    diameter: "1.1/4\"",
    length: "3.3/4\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "1-1/4X6PB",
    name: "BOLT, PLOW 1-1/4X6",
    diameter: "1-1/4\"",
    length: "6\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "5P8361",
    name: "BOLT, PLOW 1.1/4 X 5",
    diameter: "1.1/4\"",
    length: "5\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "5P8823",
    name: "BOLT, PLOW 1.1/4X4.1/8",
    diameter: "1.1/4\"",
    length: "4.1/8\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "2099311",
    name: "BOLT, PLOW 1.1/4 X 6.5/8",
    diameter: "1.1/4\"",
    length: "6.5/8\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "6V8360",
    name: "BOLT, PLOW 1.1/4X4.1/2",
    diameter: "1.1/4\"",
    length: "4.1/2\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  // 1-3/8" diameter
  {
    sku: "198-71-21850",
    name: "BOLT, PLOW 1-3/8 X 4.1/2",
    diameter: "1-3/8\"",
    length: "4.1/2\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  },
  {
    sku: "198-71-21860",
    name: "BOLT, PLOW 1-3/8 X 5.1/2",
    diameter: "1-3/8\"",
    length: "5.1/2\"",
    material: "Carbon Steel",
    grade: "Grade 5",
    image: "plow-bolt-catalog.jpg"
  }
];

export default function PlowBoltPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-10 text-white shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <Link
            href="/products"
            className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
        </div>
        <h1 className="text-3xl font-semibold sm:text-4xl">Plow Bolt</h1>
        <p className="mt-4 max-w-3xl text-base text-blue-50 sm:text-lg">
          Replacement parts for Komatsu and CAT equipment.
        </p>
      </header>

      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Available Plow Bolts</h2>
          <p className="text-slate-600">Professional-grade fasteners for agricultural and heavy equipment</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {plowBoltProducts.map((product) => (
            <div
              key={product.sku}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3 overflow-hidden rounded-lg bg-slate-50">
                <RandomProductImage productName={product.name} sku={product.sku} />
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

      {/* Product Statistics */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8 relative overflow-hidden">
        {/* Background excavator icon */}
        <div className="absolute top-4 right-4 opacity-10">
          <Image
            src="/images/excavator-icon.svg"
            alt=""
            width={128}
            height={80}
            className="text-blue-600"
            style={{ filter: 'brightness(0) saturate(100%) invert(29%) sepia(86%) saturate(1777%) hue-rotate(213deg) brightness(95%) contrast(94%)' }}
          />
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 text-center mb-8 relative z-10">
          Plow Bolt Specifications Overview
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">21</div>
            <div className="text-sm text-slate-600">Available Products</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">Grade 5</div>
            <div className="text-sm text-slate-600">Strength Grade</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">32-36</div>
            <div className="text-sm text-slate-600">HRC Hardness</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">Zinc</div>
            <div className="text-sm text-slate-600">Coating</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Features</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Flat head design for flush mounting
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Grade 5 carbon steel construction
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Zinc plated finish for corrosion resistance
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Coarse thread for secure fastening
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Imperial sizes from 1/2″ to 1-3/8″ diameter
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Applications</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Agricultural equipment components
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Heavy machinery fastening
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Plow blade mounting systems
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Ground engaging tool attachments
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Construction equipment maintenance
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}