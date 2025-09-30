'use client';

import React from 'react';

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
    <path d="M9 12l2 2 4-4" fill="white" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const TagIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8z"/>
    <path d="M11 6v6l4.5 2.7.8-1.3-3.8-2.3V6h-1.5z" fill="white"/>
  </svg>
);

export default function ValueProposition() {
  const values = [
    {
      icon: ShieldIcon,
      title: "Premium Quality",
      description: "ISO 9001:2015 certified manufacturing processes ensure every fastener meets international standards. Rigorous quality control at every production stage.",
      metric: "99.8% Quality Pass Rate",
      bgGradient: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      icon: TagIcon,
      title: "Cost Advantage",
      description: "Direct manufacturer pricing with no middleman markup. Competitive rates while maintaining premium quality standards for bulk orders.",
      metric: "Up to 30% Cost Savings",
      bgGradient: "from-blue-50 to-cyan-50",
      iconColor: "text-[#0F67FE]",
      borderColor: "border-blue-200"
    },
    {
      icon: ClockIcon,
      title: "On-time Service",
      description: "Reliable delivery schedules with real-time tracking. Dedicated customer support team available for technical consultation and after-sales service.",
      metric: "95% On-time Delivery Rate",
      bgGradient: "from-purple-50 to-indigo-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose AzuLong for B2B?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three core advantages that set us apart in the global industrial fasteners market
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${value.bgGradient} border-2 ${value.borderColor} hover:border-opacity-60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-current"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-current"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <value.icon className={`w-12 h-12 ${value.iconColor}`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed line-height-7">
                  {value.description}
                </p>

                {/* Metric */}
                <div className="relative">
                  <div className={`inline-block px-6 py-3 rounded-full bg-white shadow-md ${value.iconColor} font-bold text-lg border-2 ${value.borderColor} group-hover:shadow-lg transition-shadow duration-300`}>
                    {value.metric}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-[#0F67FE] to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <span className="text-lg font-semibold">Ready for Global B2B Partnership?</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}