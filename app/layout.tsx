import Script from 'next/script';
import { useEffect } from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/baloo-2';
import '../styles/globals.scss';

// import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <head>
                <meta
                    name="description"
                    content="Numéro 1 sur les conditions de vols au PDD."
                />

                <meta property="og:url" content="https://pdd.dprslt.fr" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Puy de Dome Parapente" />
                <meta
                    property="og:description"
                    content="Numéro 1 sur les conditions de vols au PDD."
                />
                <meta
                    property="og:image"
                    content="https://pdd.dprslt.fr/banner.png"
                />
                <meta property="og:image:width" content="2048" />
                <meta property="og:image:height" content="2048" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="pdd.dprslt.fr" />
                <meta property="twitter:url" content="https://pdd.dprslt.fr" />
                <meta name="twitter:title" content="Puy de Dome Parapente" />
                <meta
                    name="twitter:description"
                    content="Numéro 1 sur les conditions de vols au PDD."
                />
                <meta
                    name="twitter:image"
                    content="https://pdd.dprslt.fr/banner.png"
                />
            </head>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-73X7PN0C86"
                strategy="afterInteractive"
            ></Script>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', 'G-73X7PN0C86');
                    `}
            </Script>
            <body>
                <div className="root-container">{children}</div>
            </body>
            {/* <Analytics /> */}
            {/* <SpeedInsights /> */}
        </html>
    );
}
