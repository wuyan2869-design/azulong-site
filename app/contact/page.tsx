export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-6">
            Contact Us
          </h1>
          <div className="space-y-4">
            <p className="text-neutral-600 text-lg">
              Get in touch with our team.
            </p>
            <div className="flex items-center justify-center text-neutral-600">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:sales@azulongparts.com" className="hover:text-neutral-800 transition-colors">
                sales@azulongparts.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}