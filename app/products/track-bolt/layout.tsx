import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Track Bolts - Heavy Duty Fasteners for Excavators | AzuLong',
  description: 'Professional track bolts for excavators, bulldozers and tracked equipment. 38 products available, weights from 0.015kg to 0.43kg. Compatible with CAT, Komatsu, John Deere.',
  keywords: 'track bolts, excavator fasteners, bulldozer bolts, tracked equipment, heavy machinery parts, undercarriage bolts',
  openGraph: {
    title: 'Track Bolts - Heavy Duty Fasteners for Excavators',
    description: 'Professional track bolts for excavators and tracked equipment. 38 products available.',
    url: '/products/track-bolt',
  },
};

export default function TrackBoltLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}