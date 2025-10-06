'use client';

import Script from 'next/script';

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AzuLong Industrial Fasteners",
    "url": "https://azulong.com",
    "logo": "https://azulong.com/images/logo.png",
    "description": "Leading manufacturer of excavator track bolts, plow bolts, and bucket teeth for North American construction equipment market. ISO 9001:2015 certified with 15+ years manufacturing experience.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Room 1909, Taikang Building, Southern Business District",
      "addressLocality": "Ningbo",
      "addressRegion": "Zhejiang",
      "postalCode": "315000",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-574-xxxx-xxxx",
      "contactType": "customer service",
      "email": "rocky@azulong.com"
    },
    "sameAs": [
      "https://linkedin.com/company/azulongparts"
    ],
    "foundingDate": "2009",
    "numberOfEmployees": "50-100",
    "industry": "Manufacturing",
    "knowsAbout": [
      "Excavator Track Bolts",
      "Plow Bolts",
      "Bucket Teeth",
      "Construction Equipment Fasteners",
      "Undercarriage Parts",
      "Heavy Equipment Fasteners",
      "OEM Fasteners",
      "Aftermarket Excavator Parts",
      "ISO 9001:2015 Quality Control"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.8683",
      "longitude": "121.5440"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Excavator Track Bolts",
          "category": "Construction Equipment Parts"
        },
        "eligibleRegion": "US",
        "availability": "https://schema.org/InStock"
      }
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