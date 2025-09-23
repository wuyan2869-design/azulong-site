import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900 mb-6">
            Our Products
          </h1>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Professional industrial fasteners and construction machinery parts designed for global markets with over 15 years of manufacturing excellence.
          </p>
        </div>

        {/* Product Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 text-center mb-12">
            Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Track Bolt & Plow Bolt */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-12">
                <Image
                  src="/plow-bolt.jpg"
                  alt="Track Bolt and Plow Bolt"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Track Bolt & Plow Bolt
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  High-strength track bolts and plow bolts engineered for heavy-duty construction and agricultural machinery.
                  Built to withstand extreme conditions and provide reliable performance in demanding applications.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-neutral-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      High tensile strength steel construction
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Corrosion resistant coating
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Precision threading and tolerances
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Multiple size specifications available
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Applications:</strong> Excavators, bulldozers, agricultural equipment, track systems, and heavy machinery
                  </p>
                </div>
              </div>
            </div>

            {/* Bucket Teeth */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🚜</div>
                    <p className="text-gray-600">Professional bucket teeth solutions</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Bucket Teeth
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Durable bucket teeth designed for excavators and earth-moving equipment.
                  Manufactured with premium materials to ensure maximum wear resistance and operational efficiency.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-neutral-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Heat-treated alloy steel
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Superior wear resistance
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Easy installation and replacement
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Compatible with major brands
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Applications:</strong> Excavator buckets, loader attachments, mining equipment, and earthmoving machinery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-semibold text-neutral-900 text-center mb-8">
            Our Manufacturing Excellence
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">1000+</div>
              <div className="text-sm text-neutral-600">Product Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
              <div className="text-sm text-neutral-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-sm text-neutral-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">ISO</div>
              <div className="text-sm text-neutral-600">Certified</div>
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 text-center mb-12">
            Quality Assurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Material Testing
              </h3>
              <p className="text-neutral-600">
                Rigorous material testing ensures every product meets international quality standards and specifications.
              </p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Precision Manufacturing
              </h3>
              <p className="text-neutral-600">
                Advanced manufacturing processes and precision machinery ensure consistent quality and dimensional accuracy.
              </p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Customer Support
              </h3>
              <p className="text-neutral-600">
                Comprehensive after-sales support with technical assistance and quality guarantee for complete peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl py-12 px-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Source Quality Parts?
          </h2>
          <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and discover how our premium industrial fasteners can enhance your operations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get Quote Today
          </Link>
        </div>
      </div>
    </div>
  )
}