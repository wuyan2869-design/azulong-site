'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const NavLink = ({ href, label, mobile = false }: { href: string; label: string; mobile?: boolean }) => (
    <Link
      href={href}
      className={`relative group ${mobile ? 'block py-2' : ''}`}
      onClick={() => mobile && setIsMenuOpen(false)}
    >
      <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 hover:from-[#0F67FE] hover:to-cyan-400 transition-all duration-300">
        {label}
      </span>
      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0F67FE] to-cyan-400 opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>
    </Link>
  );

  return (
    <header className="bg-white border-b border-neutral-200">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="block">
              <BrandLogo size="md" variant="combined" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#0F67FE] focus:outline-none focus:ring-2 focus:ring-[#0F67FE]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200">
              {navItems.map(item => (
                <NavLink key={item.href} href={item.href} label={item.label} mobile />
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}