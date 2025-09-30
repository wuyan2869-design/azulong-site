import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plow Bolts - Agricultural & Heavy Equipment Fasteners | AzuLong',
  description: 'Professional-grade plow bolts for agricultural and heavy equipment. 21 products available, Grade 5 carbon steel, flat head design. Compatible with CAT, Komatsu equipment.',
  keywords: 'plow bolts, agricultural fasteners, heavy equipment bolts, flat head bolts, Grade 5 steel, farming equipment parts',
  openGraph: {
    title: 'Plow Bolts - Agricultural & Heavy Equipment Fasteners',
    description: 'Professional-grade plow bolts for agricultural and heavy equipment. 21 products available.',
    url: '/products/plow-bolt',
  },
};

export default function PlowBoltLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}