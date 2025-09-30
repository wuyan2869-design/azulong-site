'use client';

export default function ProductsStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AzuLong Industrial Fasteners",
    "url": "https://azulongparts.com",
    "logo": "https://azulongparts.com/images/logo.png",
    "description": "Leading manufacturer of excavator track bolts, plow bolts and bucket teeth for North American construction equipment market",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ningbo",
      "addressRegion": "Zhejiang",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-574-8776-5432",
      "contactType": "sales",
      "areaServed": ["US", "CA", "MX"],
      "availableLanguage": ["en", "zh"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/azulong-fasteners",
      "https://www.facebook.com/azulongparts"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Equipment Fasteners",
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Track Bolts",
          "category": "Construction Equipment Parts",
          "description": "High-strength track bolts for excavators and bulldozers",
          "manufacturer": {
            "@type": "Organization",
            "name": "AzuLong Industrial Fasteners"
          },
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Material",
              "value": "Alloy Steel"
            },
            {
              "@type": "PropertyValue",
              "name": "Standard",
              "value": "ASTM A449"
            },
            {
              "@type": "PropertyValue",
              "name": "Certification",
              "value": "ISO 9001:2015"
            }
          ]
        },
        {
          "@type": "Product",
          "name": "Plow Bolts",
          "category": "Construction Equipment Parts",
          "description": "Heavy-duty plow bolts for snow plows and agricultural equipment",
          "manufacturer": {
            "@type": "Organization",
            "name": "AzuLong Industrial Fasteners"
          },
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Material",
              "value": "Carbon Steel"
            },
            {
              "@type": "PropertyValue",
              "name": "Coating",
              "value": "Zinc Plated"
            },
            {
              "@type": "PropertyValue",
              "name": "Standard",
              "value": "ASTM A449"
            }
          ]
        },
        {
          "@type": "Product",
          "name": "Bucket Teeth",
          "category": "Construction Equipment Parts",
          "description": "Durable bucket teeth for excavator buckets and loaders",
          "manufacturer": {
            "@type": "Organization",
            "name": "AzuLong Industrial Fasteners"
          },
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Material",
              "value": "Alloy Steel"
            },
            {
              "@type": "PropertyValue",
              "name": "Hardness",
              "value": "HRC 45-52"
            },
            {
              "@type": "PropertyValue",
              "name": "Process",
              "value": "Heat Treated"
            }
          ]
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}