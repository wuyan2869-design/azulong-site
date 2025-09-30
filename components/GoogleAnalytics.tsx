'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  // Replace with your actual Google Analytics ID
  const GA_ID = 'G-XXXXXXXXXX'; // You'll need to replace this with your actual GA4 ID

  return (
    <>
      {/* Google Analytics 4 (GA4) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}', {
            // Enhanced measurement for better tracking
            send_page_view: true,
            anonymize_ip: true,

            // Custom events for US market tracking
            custom_map: {
              'custom_parameter_1': 'market_region',
              'custom_parameter_2': 'product_category'
            },

            // Track specific US market interactions
            enhanced_measurement: {
              scrolls: true,
              outbound_clicks: true,
              site_search: true,
              video_engagement: true,
              file_downloads: true
            }
          });

          // Track product category views
          gtag('event', 'page_view', {
            'custom_parameter_1': 'US_Market',
            'custom_parameter_2': 'Industrial_Fasteners'
          });
        `}
      </Script>

      {/* Optional: Google Tag Manager for advanced tracking */}
      {/* Uncomment if you prefer GTM over direct GA4 */}
      {/*
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </Script>
      */}
    </>
  );
}