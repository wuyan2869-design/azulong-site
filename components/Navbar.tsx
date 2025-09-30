'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <BrandLogo size="md" variant="combined" />
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>

            {/* Simple Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                onMouseEnter={() => setShowDropdown(true)}
                className="text-gray-700 hover:text-blue-600 flex items-center"
              >
                Products
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div
                  className="absolute top-full left-0 mt-1 w-40 bg-white border shadow-lg rounded z-50"
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <Link
                    href="/products/plow-bolt"
                    className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                    onClick={() => setShowDropdown(false)}
                  >
                    Plow Bolt
                  </Link>
                  <Link
                    href="/products/track-bolt"
                    className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                    onClick={() => setShowDropdown(false)}
                  >
                    Track Bolt
                  </Link>
                  <Link
                    href="/products/bucket-teeth"
                    className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                    onClick={() => setShowDropdown(false)}
                  >
                    Bucket Teeth
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}