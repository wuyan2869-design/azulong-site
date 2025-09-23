'use client';

import Script from 'next/script';

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AzuLong Industrial Fasteners",
    "url": "https://azulongparts.com",
    "logo": "https://azulongparts.com/images/logo.png",
    "description": "Professional manufacturer of industrial fasteners with 15+ years experience. ISO 9001:2015 certified quality, serving USA, Singapore and global markets.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ningbo",
      "addressRegion": "Zhejiang",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-574-xxxx-xxxx",
      "contactType": "customer service",
      "email": "sales@azulongparts.com"
    },
    "sameAs": [
      "https://linkedin.com/company/azulongparts"
    ],
    "foundingDate": "2009",
    "numberOfEmployees": "50-100",
    "industry": "Manufacturing",
    "knowsAbout": [
      "Industrial Fasteners",
      "Construction Machinery Parts",
      "Excavator Fasteners",
      "Undercarriage Parts",
      "ISO 9001:2015 Quality Control"
    ]
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Industrial Fasteners",
    "description": "High-quality industrial fasteners for construction machinery and equipment",
    "manufacturer": {
      "@type": "Organization",
      "name": "AzuLong Industrial Fasteners"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Fastener Manufacturing",
    "description": "Custom manufacturing of industrial fasteners with ISO 9001:2015 certification",
    "provider": {
      "@type": "Organization",
      "name": "AzuLong Industrial Fasteners"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "Singapore"
      },
      {
        "@type": "Country",
        "name": "Global"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industrial Fasteners Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Excavator Fasteners"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Undercarriage Parts"
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productData),
        }}
      />
      <Script
        id="service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData),
        }}
      />
    </>
  );
}