import Script from 'next/script';
import { useEffect } from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/baloo-2';
import '../styles/globals.scss';
import { Metadata } from 'next';

// import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
    title: 'Puy de Dome Parapente',
    description: 'Numéro 1 sur les conditions de vols au PDD.',
    authors: { name: 'Theo', url: 'contact@dprslt.fr' },
    metadataBase: new URL('https://pdd.dprslt.fr'),
    openGraph: {
        type: 'website',
        description: 'Numéro 1 sur les conditions de vols au PDD.',
        title: 'Puy de Dome Parapente',
        url: './',
        siteName: 'PDD',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Puy de Dôme Parapente',
    alternateName: 'PDDP',
    url: 'https://pdd.dprslt.fr',
};

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

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>

            <body>
                <div className="root-container">{children}</div>
            </body>
            {/* <Analytics /> */}
            {/* <SpeedInsights /> */}
        </html>
    );
}
