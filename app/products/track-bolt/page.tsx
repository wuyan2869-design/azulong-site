'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// 随机图片数组
const trackBoltImages = [
  'products/track-bolt-1inch.jpg',
  '26.jpg',
  '27.jpg',
  '28.jpg',
  '29.jpg',
  '30.jpg'
];

// 随机选择图片函数
function getRandomImage() {
  return trackBoltImages[Math.floor(Math.random() * trackBoltImages.length)];
}

// 客户端随机图片组件
function RandomTrackBoltImage({ productName, sku }: { productName: string; sku: string }) {
  const [imageName, setImageName] = useState('products/track-bolt-1inch.jpg');

  useEffect(() => {
    setImageName(getRandomImage());
  }, []);

  return (
    <Image
      src={`/images/${imageName}`}
      alt={`${productName} - High-Strength Excavator Track Bolt for Construction Equipment - SKU ${sku}`}
      width={110}
      height={110}
      className="w-full h-28 object-contain p-2"
    />
  );
}

// Track bolt products based on Excel file 2.xlsx data - sorted by weight (light to heavy)
const trackBoltProducts = [
  { sku: "5P8246", name: "Track Bolt 5P8246", weight: "0.015 kg", image: "track-bolt-1inch.jpg" },
  { sku: "5P8247", name: "Track Bolt 5P8247", weight: "0.02 kg", image: "track-bolt-1inch.jpg" },
  { sku: "5P8248", name: "Track Bolt 5P8248", weight: "0.025 kg", image: "track-bolt-1inch.jpg" },
  { sku: "5P8249", name: "Track Bolt 5P8249", weight: "0.03 kg", image: "track-bolt-1inch.jpg" },
  { sku: "01602-02060", name: "Track Bolt 01602-02060", weight: "0.03 kg", image: "track-bolt-1inch.jpg" },
  { sku: "110-32-11420", name: "Track Bolt 110-32-11420", weight: "0.04 kg", image: "track-bolt-1inch.jpg" },
  { sku: "1M1408", name: "Track Bolt 1M1408", weight: "0.055 kg", image: "track-bolt-1inch.jpg" },
  { sku: "0S1585", name: "Track Bolt 0S1585", weight: "0.058 kg", image: "track-bolt-1inch.jpg" },
  { sku: "01803-11824", name: "Track Bolt 01803-11824", weight: "0.08 kg", image: "track-bolt-1inch.jpg" },
  { sku: "4378884", name: "Track Bolt 4378884", weight: "0.09 kg", image: "track-bolt-1inch.jpg" },
  { sku: "203-32-21210", name: "Track Bolt 203-32-21210", weight: "0.1 kg", image: "track-bolt-1inch.jpg" },
  { sku: "4K7038", name: "Track Bolt 4K7038", weight: "0.1 kg", image: "track-bolt-1inch.jpg" },
  { sku: "154-32-71220", name: "Track Bolt 154-32-71220", weight: "0.12 kg", image: "track-bolt-1inch.jpg" },
  { sku: "616199C1", name: "Track Bolt 616199C1", weight: "0.12 kg", image: "track-bolt-1inch.jpg" },
  { sku: "205-32-51120", name: "Track Bolt 205-32-51120", weight: "0.13 kg", image: "track-bolt-1inch.jpg" },
  { sku: "20Y-27-11561", name: "Track Bolt 20Y-27-11561", weight: "0.13 kg", image: "track-bolt-1inch.jpg" },
  { sku: "178-32-11220", name: "Track Bolt 178-32-11220", weight: "0.14 kg", image: "track-bolt-1inch.jpg" },
  { sku: "1979674", name: "Track Bolt 1979674", weight: "0.14 kg", image: "track-bolt-1inch.jpg" },
  { sku: "0L1178", name: "Track Bolt 0L1178", weight: "0.18 kg", image: "track-bolt-1inch.jpg" },
  { sku: "3P2274", name: "Track Bolt 3P2274", weight: "0.19 kg", image: "track-bolt-1inch.jpg" },
  { sku: "207-27-51311", name: "Track Bolt 207-27-51311", weight: "0.2 kg", image: "track-bolt-1inch.jpg" },
  { sku: "1A8063", name: "Track Bolt 1A8063", weight: "0.21 kg", image: "track-bolt-1inch.jpg" },
  { sku: "5P8362", name: "Track Bolt 5P8362", weight: "0.23 kg", image: "track-bolt-1inch.jpg" },
  { sku: "4331851", name: "Track Bolt 4331851", weight: "0.23 kg", image: "track-bolt-1inch.jpg" },
  { sku: "207-32-51210", name: "Track Bolt 207-32-51210", weight: "0.3 kg", image: "track-bolt-1inch.jpg" },
  { sku: "3081343", name: "Track Bolt 3081343", weight: "0.31 kg", image: "track-bolt-1inch.jpg" },
  { sku: "1504741", name: "Track Bolt 1504741", weight: "0.35 kg", image: "track-bolt-1inch.jpg" },
  { sku: "6T1140", name: "Track Bolt 6T1140", weight: "0.38 kg", image: "track-bolt-1inch.jpg" },
  { sku: "344328034", name: "Track Bolt 344328034", weight: "0.4 kg", image: "track-bolt-1inch.jpg" },
  { sku: "175-32-11210", name: "Track Bolt 175-32-11210", weight: "0.43 kg", image: "track-bolt-1inch.jpg" }
];

export default function TrackBoltPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('weight');

  // Filter and sort products
  const filteredProducts = trackBoltProducts
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'weight') {
        return parseFloat(a.weight) - parseFloat(b.weight);
      } else if (sortBy === 'sku') {
        return a.sku.localeCompare(b.sku);
      }
      return 0;
    });

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
        <h1 className="text-3xl font-semibold sm:text-4xl">Track Bolt</h1>
        <p className="mt-4 max-w-3xl text-base text-blue-50 sm:text-lg">
          Heavy-duty track bolts for excavators, bulldozers, and tracked equipment.
        </p>
      </header>

      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Available Track Bolts</h2>
          <p className="text-slate-600">Heavy-duty track bolts from Excel catalog - {filteredProducts.length} of {trackBoltProducts.length} products shown</p>

          {/* Search and Filter Controls */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">Search products</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by SKU or name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="sm:w-48">
              <label htmlFor="sort" className="sr-only">Sort by</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="weight">Sort by Weight</option>
                <option value="sku">Sort by SKU</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProducts.map((product) => (
            <div
              key={product.sku}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3 overflow-hidden rounded-lg bg-slate-50">
                <RandomTrackBoltImage productName={product.name} sku={product.sku} />
              </div>

              <div className="space-y-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
                  <p className="text-xs text-blue-600 font-medium">{product.sku}</p>
                </div>

                <div className="text-xs text-slate-600">
                  <div><span className="font-medium">Weight:</span> {product.weight}</div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Statistics */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8">
        <h3 className="text-2xl font-semibold text-slate-900 text-center mb-8">
          Track Bolt Specifications Overview
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">{trackBoltProducts.length}</div>
            <div className="text-sm text-slate-600">Available Products</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
            <div className="text-sm text-slate-600">Weight Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">0.015-0.43</div>
            <div className="text-sm text-slate-600">Weight Range (kg)</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">Industrial</div>
            <div className="text-sm text-slate-600">Grade</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Product Categories</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Ultra Light: 0.015-0.025 kg track bolts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Light Duty: 0.03-0.11 kg track bolts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Medium Duty: 0.12-0.23 kg track bolts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Heavy Duty: 0.3-0.43 kg track bolts
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Applications</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Excavator track chain connections
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Bulldozer track system assembly
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Track shoe to chain connections
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Heavy equipment undercarriage maintenance
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Mining and construction equipment
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}