import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900 mb-6">
            Contact Us
          </h1>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Get in touch with our experienced team for all your industrial fastener needs.
            We&apos;re here to provide professional solutions and support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                Get In Touch
              </h2>

              {/* Email */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                  <a href="mailto:wuyan2869@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                    wuyan2869@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Address</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    浙江省宁波市南部商务区泰康大厦1909room<br />
                    Room 1909, Taikang Building<br />
                    Southern Business District<br />
                    Ningbo, Zhejiang Province, China
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Business Hours</h3>
                  <p className="text-neutral-600">
                    Monday - Friday: 8:00 AM - 6:00 PM (CST)<br />
                    Saturday: 9:00 AM - 5:00 PM (CST)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Images */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Our Office
            </h2>

            <div className="space-y-4">
              {/* First Office Image */}
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/13.JPG"
                  alt="AzuLong Industrial Fasteners Headquarters Office - Ningbo China - Premium Excavator Parts Manufacturer for US Market"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Ningbo Headquarters</h3>
                  <p className="text-sm text-gray-200">Southern Business District</p>
                </div>
              </div>

              {/* Second Office Image */}
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/14.JPG"
                  alt="AzuLong Office Interior - Professional Workspace for Excavator Track Bolt Manufacturing and US Market Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Office Interior</h3>
                  <p className="text-sm text-gray-200">Professional workspace</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl py-12 px-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your industrial fastener requirements.
            Our experienced team is ready to provide you with professional solutions and competitive pricing.
          </p>
          <a
            href="mailto:wuyan2869@gmail.com"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}