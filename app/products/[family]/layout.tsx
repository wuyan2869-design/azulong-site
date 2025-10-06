import type { Metadata } from 'next';

type ProductFamilyMeta = {
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
};

const humanizeFamily = (slug: string) =>
  slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const PRODUCT_FAMILY_METADATA: Record<string, ProductFamilyMeta> = {
  'track-bolt': {
    title: 'Track Bolt',
    subtitle:
      'Engineered for crawler equipment, mining machinery, and harsh construction environments.',
    description:
      'Explore high-strength track bolts with ISO 9001:2015 certified production, rolled threads, and OEM references covering Caterpillar, Komatsu, and John Deere equipment.',
    keywords: [
      'track bolt',
      'crawler equipment fasteners',
      'undercarriage hardware',
      'OEM compatible bolts',
      'AzuLong fasteners',
    ],
  },
  'plow-bolt': {
    title: 'Plow Bolt',
    subtitle:
      'Countersunk head bolts for ground engaging tools and snow plow assemblies.',
    description:
      'Browse abrasion-resistant plow bolts with grade 8.8 / 10.9 tensile properties, matched nuts, and surface treatments for extended service life.',
    keywords: [
      'plow bolt',
      'ground engaging tools',
      'snow plow fasteners',
      'countersunk bolt',
      'AzuLong fasteners',
    ],
  },
  'bucket-teeth': {
    title: 'Bucket Teeth',
    subtitle:
      'Wear parts for excavators, loaders, and dredging equipment with reliable casting quality.',
    description:
      'Discover martensitic alloy bucket teeth with precise fitment, matched adapters and pins, and continuous inventory support for global OEM replacements.',
    keywords: [
      'bucket teeth',
      'excavator wear parts',
      'loader bucket teeth',
      'casting tooth',
      'AzuLong fasteners',
    ],
  },
};

const FALLBACK_META: ProductFamilyMeta = {
  title: 'Industrial Fasteners',
  subtitle: 'ISO-certified fastening solutions tailored for global OEM supply chains.',
  description:
    'Explore the AzuLong catalog featuring precision fasteners, wear parts, and custom-engineered hardware for industrial applications.',
  keywords: [
    'industrial fasteners',
    'OEM fasteners',
    'custom hardware',
    'AzuLong fasteners',
  ],
};

const BASE_TITLE = 'AzuLong Industrial Fasteners';
const BASE_URL = 'https://azulong.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ family: string }>;
}): Promise<Metadata> {
  const { family: familySlug } = await params;
  const meta = PRODUCT_FAMILY_METADATA[familySlug] ?? {
    ...FALLBACK_META,
    title: `${humanizeFamily(familySlug)} · Industrial Fasteners`,
  };

  const pageTitle = `${meta.title} | ${BASE_TITLE}`;
  const canonicalPath = `/products/${familySlug}`;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;

  return {
    title: pageTitle,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: pageTitle,
      description: meta.subtitle,
      url: canonicalUrl,
      siteName: BASE_TITLE,
      type: 'website',
      images: [
        {
          url: `/images/products/${familySlug}.svg`,
          width: 512,
          height: 512,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: meta.subtitle,
      images: [`/images/products/${familySlug}.svg`],
    },
  };
}

export default function ProductFamilyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}