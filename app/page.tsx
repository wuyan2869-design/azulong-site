import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import WorldClock from '@/components/WorldClock';
import { CompactImageSlider } from '@/components/ImageSlider';
import Footer from '@/components/Footer';

const productImages = [
  '/images/15.png',
  '/images/16.png',
  '/images/17.png',
  '/images/18.png',
  '/images/19.png',
  '/images/20.png',
  '/images/21.png',
  '/images/22.png'
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueProposition />

      {/* Compact Time and Product Gallery Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            {/* Product Image Slider */}
            <div className="flex-shrink-0">
              <div className="flex justify-center">
                <CompactImageSlider images={productImages} width={310} height={235} interval={2000} />
              </div>
            </div>
          </div>

          {/* Full World Clock */}
          <WorldClock />
        </div>
      </section>

      <Footer />
    </div>
  );
}
