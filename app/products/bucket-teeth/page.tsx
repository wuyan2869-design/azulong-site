import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bucket Teeth - Excavator & Loader Wear Parts | AzuLong',
  description: 'Heat-treated alloy steel bucket teeth for excavators, loaders and dredging equipment. HRC 48-58 hardness, precision casting technology. Compatible with CAT, Volvo, John Deere.',
  keywords: 'bucket teeth, excavator parts, loader teeth, wear parts, heat treated steel, mining equipment, construction machinery',
  openGraph: {
    title: 'Bucket Teeth - Excavator & Loader Wear Parts',
    description: 'Heat-treated alloy steel bucket teeth for excavators and loaders. High-performance wear parts.',
    url: '/products/bucket-teeth',
  },
};

const bucketTeethProducts = [
  {
    sku: "BT-J200-STD",
    name: "J200 Standard Bucket Tooth",
    profile: "Standard",
    hardness: "HRC 48-52",
    standard: "Proprietary",
    material: "Alloy Steel",
    finish: "Heat Treated",
    weight: "2.5 kg",
    minOrder: 10,
    packSize: 10,
    image: "bucket-teeth-1.jpg",
    oem: "CAT J200, Komatsu PC200 Compatible"
  },
  {
    sku: "BT-J300-HD",
    name: "J300 Heavy Duty Bucket Tooth",
    profile: "Heavy Duty",
    hardness: "HRC 50-55",
    standard: "Proprietary",
    material: "Alloy Steel",
    finish: "Heat Treated",
    weight: "3.2 kg",
    minOrder: 10,
    packSize: 10,
    image: "bucket-teeth-2.jpg",
    oem: "CAT J300, Volvo EC210 Compatible"
  },
  {
    sku: "BT-J400-RC",
    name: "J400 Rock Chisel Bucket Tooth",
    profile: "Rock Chisel",
    hardness: "HRC 52-58",
    standard: "Proprietary",
    material: "Alloy Steel",
    finish: "Heat Treated",
    weight: "3.8 kg",
    minOrder: 5,
    packSize: 5,
    image: "bucket-teeth-3.jpg",
    oem: "CAT J400, John Deere 310G Compatible"
  },
  {
    sku: "BT-230-STD",
    name: "230 Standard Bucket Tooth",
    profile: "Standard",
    hardness: "HRC 48-52",
    standard: "Proprietary",
    material: "Alloy Steel",
    finish: "Heat Treated",
    weight: "5.2 kg",
    minOrder: 5,
    packSize: 5,
    image: "bucket-teeth-4.jpg",
    oem: "CAT 230, Volvo EC240 Compatible"
  }
];

export default function BucketTeethPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-10 text-white shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <Link
            href="/products"
            className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
        </div>
        <h1 className="text-3xl font-semibold sm:text-4xl">Bucket Teeth</h1>
        <p className="mt-4 max-w-3xl text-base text-blue-50 sm:text-lg">
          Wear parts for excavators, loaders and dredging equipment. Heat-treated alloy steel castings for maximum durability and performance.
        </p>
      </header>

      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Available Bucket Teeth</h2>
          <p className="text-slate-600">High-performance wear parts for heavy equipment</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {bucketTeethProducts.map((product) => (
            <div
              key={product.sku}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3 overflow-hidden rounded-lg bg-slate-50">
                <Image
                  src={`/images/products/${product.image}`}
                  alt={product.name}
                  width={165}
                  height={165}
                  className="w-full h-42 object-contain p-2"
                />
              </div>

              <div className="space-y-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
                  <p className="text-xs text-blue-600 font-medium">{product.sku}</p>
                </div>

                <div className="text-xs text-slate-600">
                  <div><span className="font-medium">Profile:</span> {product.profile}</div>
                  <div><span className="font-medium">Weight:</span> {product.weight}</div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features & Applications */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
        <h3 className="text-2xl font-semibold text-slate-900 text-center mb-8">
          Bucket Teeth Features & Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Features</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Heat-treated alloy steel construction
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                HRC 48-58 hardness range options
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Custom profile designs available
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Precision casting technology
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                OEM replacement compatibility
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Applications</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Excavator bucket replacement
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Wheel loader bucket teeth
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Mining equipment wear parts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Construction machinery maintenance
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Quarry and aggregate operations
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}