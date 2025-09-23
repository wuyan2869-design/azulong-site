'use client';

import React from 'react';
import AzulongLogo from './AzulongLogo';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  variant?: 'logo' | 'text' | 'combined';
}

export default function BrandLogo({
  size = 'md',
  className = '',
  variant = 'combined'
}: BrandLogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl md:text-5xl lg:text-6xl'
  };

  if (variant === 'logo') {
    return <AzulongLogo size={size} className={className} showText={false} />;
  }

  if (variant === 'text') {
    return (
      <div className={`font-bold ${sizeClasses[size]} ${className}`}>
        <span className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F67FE] via-blue-400 to-cyan-400 drop-shadow-lg">
            Azu
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-[#0F67FE] drop-shadow-lg">
            Long
          </span>
          {/* Decorative underline */}
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0F67FE] via-transparent to-cyan-400 opacity-80"></div>
          {/* Accent dot */}
          <span className="absolute -top-1 -right-2 w-2 h-2 bg-gradient-to-br from-cyan-400 to-[#0F67FE] rounded-full animate-pulse shadow-lg"></span>
        </span>
      </div>
    );
  }

  // Combined version with logo
  return <AzulongLogo size={size} className={className} showText={true} />;
}