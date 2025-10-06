import Link from 'next/link'
import ImageSlider from '@/components/ImageSlider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About AzuLong Industrial Fasteners - 15+ Years Manufacturing Excellence',
  description: 'Established in 2009, AzuLong Industrial Fasteners is ISO 9001:2015 certified manufacturer specializing in excavator track bolts, plow bolts and bucket teeth. Trusted by North American construction equipment distributors with reliable quality and excellent service.',
  keywords: 'about azulong, fastener manufacturer, excavator parts company, industrial fasteners factory, ISO 9001 certified, construction equipment parts supplier, track bolt manufacturer history',
  openGraph: {
    title: 'About AzuLong Industrial Fasteners - Manufacturing Excellence Since 2009',
    description: 'ISO 9001:2015 certified manufacturer with 15+ years experience in excavator track bolts, plow bolts and bucket teeth. Trusted by North American distributors.',
    images: [{
      url: '/images/1.JPG',
      width: 1200,
      height: 630,
      alt: 'AzuLong Manufacturing Facility'
    }],
    url: 'https://azulong.com/about'
  }
}

export default function About() {
  const companyImages = [
    {
      src: "/images/1.JPG",
      alt: "AzuLong Manufacturing Facility",
      title: "Manufacturing Excellence",
      description: "Our state-of-the-art manufacturing facility"
    },
    {
      src: "/images/2.JPG",
      alt: "Production Workshop",
      title: "Production Workshop",
      description: "Advanced production capabilities"
    },
    {
      src: "/images/3.JPG",
      alt: "Quality Control",
      title: "Quality Assurance",
      description: "Rigorous quality control processes"
    },
    {
      src: "/images/4.JPG",
      alt: "Manufacturing Equipment",
      title: "Advanced Equipment",
      description: "Modern manufacturing technology"
    },
    {
      src: "/images/5.JPG",
      alt: "Factory Floor",
      title: "Factory Operations",
      description: "Efficient factory operations"
    },
    {
      src: "/images/6.JPG",
      alt: "Assembly Line",
      title: "Assembly Process",
      description: "Precision assembly operations"
    },
    {
      src: "/images/7.JPG",
      alt: "Warehouse Storage",
      title: "Storage Facility",
      description: "Organized warehouse operations"
    },
    {
      src: "/images/8.JPG",
      alt: "Testing Laboratory",
      title: "Testing Lab",
      description: "Comprehensive testing facilities"
    },
    {
      src: "/images/9.JPG",
      alt: "Packaging Department",
      title: "Packaging",
      description: "Professional packaging operations"
    },
    {
      src: "/images/10.JPG",
      alt: "Shipping Area",
      title: "Logistics",
      description: "Efficient shipping operations"
    },
    {
      src: "/images/11.JPG",
      alt: "Team Meeting",
      title: "Our Team",
      description: "Dedicated professional team"
    },
    {
      src: "/images/12.JPG",
      alt: "Company Overview",
      title: "AzuLong Overview",
      description: "Complete manufacturing solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900 mb-6">
            About AzuLong
          </h1>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Your trusted partner in industrial fasteners with over 15 years of manufacturing excellence and global reach.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Company Overview
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Founded in 2008 and headquartered in Ningbo, Zhejiang, AzuLong has been specializing in the manufacturing of industrial fasteners for over 15 years, ensuring reliable capacity and consistent quality.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Our products are supplied worldwide to component distributors and OEM manufacturers. We value long-term, win-win cooperation, and many of our global partners have been working with us for years. We are especially focused on the North American market, where our stable supply and responsive service have built strong trust.
            </p>
          </div>

          {/* Company Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">
              Our Achievements
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">2</div>
                <div className="text-sm text-neutral-600">Production Facilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-neutral-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">1000+</div>
                <div className="text-sm text-neutral-600">Product Types</div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 text-center mb-12">
            Our Manufacturing Facilities
          </h2>
          <div className="max-w-6xl mx-auto">
            <ImageSlider images={companyImages} autoPlay={true} interval={4000} />
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 text-center mb-12">
            Our Competitive Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Competitive Pricing & High Quality
              </h3>
              <p className="text-neutral-600">
                Direct-from-factory advantage, meeting international standards while maintaining competitive pricing.
              </p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Reliable Logistics
              </h3>
              <p className="text-neutral-600">
                Long-term cooperation with shipping agents, providing direct delivery to customers worldwide.
              </p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                After-Sales Guarantee
              </h3>
              <p className="text-neutral-600">
                If any quality issue arises, we offer free replacement and full support to ensure peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl py-12 px-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
            With a strong manufacturing base, global logistics network, and dedicated service, AzuLong is committed to being your trusted long-term partner in industrial fasteners.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  )
}