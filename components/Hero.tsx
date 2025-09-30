'use client';

import React from 'react';
import Link from 'next/link';
import BrandLogo from './BrandLogo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Custom Industrial Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10"></div>

        {/* Custom SVG Industrial Background */}
        <div className="w-full h-full relative overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient id="steelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64748B" />
                <stop offset="50%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>
              <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EAB308" />
              </linearGradient>
            </defs>

            {/* Sky Background */}
            <rect width="1920" height="1080" fill="url(#skyGradient)" />

            {/* Excavator Undercarriage Structure */}
            <g opacity="0.2">
              {/* Track frame outline */}
              <path
                d="M 200,400 Q 300,380 500,400 L 1400,400 Q 1500,380 1600,400 L 1600,700 Q 1500,720 1400,700 L 500,700 Q 300,720 200,700 Z"
                fill="none"
                stroke="url(#steelGradient)"
                strokeWidth="4"
              />

              {/* Track drive sprocket area */}
              <circle cx="250" cy="550" r="80" fill="none" stroke="url(#steelGradient)" strokeWidth="3" opacity="0.7" />
              <circle cx="1550" cy="550" r="80" fill="none" stroke="url(#steelGradient)" strokeWidth="3" opacity="0.7" />

              {/* Idler wheels */}
              {[450, 650, 850, 1050, 1250].map((x) => (
                <circle key={`idler-${x}`} cx={x} cy="650" r="35" fill="none" stroke="url(#steelGradient)" strokeWidth="2" opacity="0.5" />
              ))}
            </g>

            {/* Industrial Gear Elements */}
            <g opacity="0.15">
              {/* Large gear - bottom right */}
              <g transform="translate(1600,800)">
                <circle r="120" fill="none" stroke="url(#gearGradient)" strokeWidth="4" />
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                  <rect
                    key={angle}
                    x="-8"
                    y="-130"
                    width="16"
                    height="20"
                    fill="url(#gearGradient)"
                    transform={`rotate(${angle})`}
                  />
                ))}
                <circle r="40" fill="url(#gearGradient)" opacity="0.3" />
              </g>

              {/* Medium gear - top left */}
              <g transform="translate(200,250)">
                <circle r="80" fill="none" stroke="url(#gearGradient)" strokeWidth="3" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <rect
                    key={angle}
                    x="-6"
                    y="-88"
                    width="12"
                    height="16"
                    fill="url(#gearGradient)"
                    transform={`rotate(${angle})`}
                  />
                ))}
              </g>

              {/* Small gear - center */}
              <g transform="translate(960,400)">
                <circle r="50" fill="none" stroke="url(#gearGradient)" strokeWidth="2" />
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                  <rect
                    key={angle}
                    x="-4"
                    y="-56"
                    width="8"
                    height="12"
                    fill="url(#gearGradient)"
                    transform={`rotate(${angle})`}
                  />
                ))}
              </g>
            </g>

            {/* Track Bolts and Bucket Teeth Details */}
            <g opacity="0.25">
              {/* Track bolt pattern - more prominent */}
              {[400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400].map((x, i) => (
                <g key={`bolt-group-${i}`}>
                  {/* Hex bolt heads */}
                  <polygon
                    points={`${x-4},${485} ${x-2},${482} ${x+2},${482} ${x+4},${485} ${x+2},${488} ${x-2},${488}`}
                    fill="url(#steelGradient)"
                  />
                  <polygon
                    points={`${x-4},${645} ${x-2},${642} ${x+2},${642} ${x+4},${645} ${x+2},${648} ${x-2},${648}`}
                    fill="url(#steelGradient)"
                  />
                </g>
              ))}

              {/* Bucket teeth along the bottom */}
              {[200, 280, 360, 440, 520, 600].map((x, i) => (
                <g key={`bucket-tooth-${i}`} transform={`translate(${x},750)`}>
                  {/* Tooth profile */}
                  <path
                    d="M -15,0 L -10,-25 L -5,-30 L 0,-32 L 5,-30 L 10,-25 L 15,0 Z"
                    fill="url(#gearGradient)"
                    opacity="0.7"
                  />
                  {/* Mounting bolt */}
                  <circle cx="0" cy="-10" r="4" fill="url(#steelGradient)" />
                  <circle cx="0" cy="-10" r="2" fill="#1E40AF" />
                </g>
              ))}

              {/* Side cutter teeth */}
              {[1400, 1480, 1560].map((x, i) => (
                <g key={`side-cutter-${i}`} transform={`translate(${x},720)`}>
                  <path
                    d="M -10,0 L -8,-20 L -4,-24 L 0,-26 L 4,-24 L 8,-20 L 10,0 Z"
                    fill="url(#gearGradient)"
                    opacity="0.8"
                  />
                  <circle cx="0" cy="-8" r="3" fill="url(#steelGradient)" />
                </g>
              ))}
            </g>

            {/* Excavator Track Chain - Detailed */}
            <g opacity="0.35">
              {/* Main track path */}
              <path
                d="M 250,470 Q 300,450 500,470 L 1400,470 Q 1500,450 1550,470
                   Q 1600,500 1580,550 Q 1570,600 1550,630
                   Q 1500,650 1400,630 L 500,630 Q 300,650 250,630
                   Q 200,600 220,550 Q 230,500 250,470 Z"
                fill="none"
                stroke="url(#steelGradient)"
                strokeWidth="8"
              />

              {/* Track pads with bolt holes */}
              {[280, 360, 440, 520, 600, 680, 760, 840, 920, 1000, 1080, 1160, 1240, 1320, 1400, 1480].map((x, i) => (
                <g key={`track-pad-${i}`}>
                  {/* Track pad */}
                  <rect x={x-30} y="460" width="60" height="20" rx="4" fill="url(#steelGradient)" opacity="0.8" />

                  {/* Bolt holes */}
                  <circle cx={x-15} cy="470" r="3" fill="#1E40AF" />
                  <circle cx={x+15} cy="470" r="3" fill="#1E40AF" />

                  {/* Track pins */}
                  <rect x={x-2} y="455" width="4" height="30" rx="2" fill="url(#gearGradient)" opacity="0.9" />
                </g>
              ))}

              {/* Lower track section */}
              {[320, 400, 480, 560, 640, 720, 800, 880, 960, 1040, 1120, 1200, 1280, 1360, 1440, 1520].map((x, i) => (
                <g key={`track-pad-lower-${i}`}>
                  <rect x={x-30} y="620" width="60" height="20" rx="4" fill="url(#steelGradient)" opacity="0.8" />
                  <circle cx={x-15} cy="630" r="3" fill="#1E40AF" />
                  <circle cx={x+15} cy="630" r="3" fill="#1E40AF" />
                  <rect x={x-2} y="615" width="4" height="30" rx="2" fill="url(#gearGradient)" opacity="0.9" />
                </g>
              ))}
            </g>

            {/* Excavator Boom and Bucket Silhouette */}
            <g opacity="0.12" transform="translate(1200,150)">
              {/* Main boom */}
              <rect x="0" y="0" width="300" height="20" rx="10" fill="url(#steelGradient)" transform="rotate(25)" />
              {/* Stick/Dipper arm */}
              <rect x="250" y="120" width="200" height="16" rx="8" fill="url(#steelGradient)" transform="rotate(-15)" />
              {/* Bucket outline */}
              <g transform="translate(380,180)">
                <path
                  d="M 0,0 Q 5,-20 15,-25 L 60,-25 L 80,-15 L 85,0 L 75,15 L 15,15 Q 5,10 0,0 Z"
                  fill="none"
                  stroke="url(#steelGradient)"
                  strokeWidth="3"
                />
                {/* Bucket teeth */}
                {[20, 30, 40, 50, 60, 70].map((x) => (
                  <path
                    key={`boom-tooth-${x}`}
                    d={`M ${x},-25 L ${x-3},-35 L ${x+3},-35 Z`}
                    fill="url(#gearGradient)"
                  />
                ))}
              </g>

              {/* Hydraulic cylinders */}
              <rect x="120" y="40" width="8" height="60" rx="4" fill="url(#steelGradient)" opacity="0.8" />
              <rect x="280" y="80" width="6" height="40" rx="3" fill="url(#steelGradient)" opacity="0.8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="space-y-8">
          {/* Brand Logo */}
          <div className="mb-8">
            <BrandLogo size="xl" variant="combined" className="text-white drop-shadow-lg" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block mb-4">Excavator Track Parts,</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Professional Fastening Solutions
            </span>
          </h1>

          <div className="space-y-6">
            <h2 className="text-xl md:text-3xl font-semibold text-blue-100">
              Track bolts · Plow bolt · Bucket Teeth
            </h2>

            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200">
              Specialized manufacturer of excavator undercarriage fasteners and wear parts with 15+ years experience.
              High-strength bolts, nuts and bucket teeth for global construction equipment markets.
            </p>
          </div>

          <div className="flex justify-center items-center pt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <span>High-Strength Materials</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
              </svg>
              <span>Excavator Specialists</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}