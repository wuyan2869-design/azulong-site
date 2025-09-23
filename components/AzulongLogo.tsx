'use client';

import React from 'react';

interface AzulongLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export default function AzulongLogo({
  size = 'md',
  className = '',
  showText = true
}: AzulongLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Simplified Dragon Logo */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="dragonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F67FE" />
              <stop offset="50%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
            <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="100%" stopColor="#0F67FE" />
            </linearGradient>
          </defs>

          {/* Circular Background */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#dragonGradient)"
            strokeWidth="2"
            opacity="0.3"
          />

          {/* Simplified Dragon Head */}
          <path
            d="M25 35 Q35 25 45 35 Q55 30 65 40 Q70 45 65 55 Q60 65 50 60 Q40 65 30 55 Q20 45 25 35 Z"
            fill="url(#dragonGradient)"
            opacity="0.9"
          />

          {/* Dragon Eye */}
          <circle cx="45" cy="40" r="3" fill="white" />
          <circle cx="46" cy="39" r="2" fill="#1E40AF" />

          {/* Simplified Gear Element */}
          <g transform="translate(50,65)">
            <circle r="8" fill="url(#gearGradient)" opacity="0.7" />
            {/* Gear Teeth */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <rect
                key={angle}
                x="-1"
                y="-10"
                width="2"
                height="4"
                fill="url(#gearGradient)"
                transform={`rotate(${angle})`}
              />
            ))}
            <circle r="3" fill="white" opacity="0.8" />
          </g>

          {/* Dynamic Lines */}
          <path
            d="M20 50 Q30 40 40 50 Q50 45 60 50"
            fill="none"
            stroke="url(#dragonGradient)"
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <div className={`font-bold ${textSizeClasses[size]}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F67FE] via-blue-500 to-cyan-400">
              AZULONG
            </span>
          </div>
          {size !== 'sm' && (
            <div className={`text-gray-600 font-medium ${size === 'xl' ? 'text-sm' : 'text-xs'} tracking-wider`}>
              WEAR PARTS
            </div>
          )}
        </div>
      )}
    </div>
  );
}