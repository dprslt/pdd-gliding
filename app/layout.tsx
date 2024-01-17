import Script from 'next/script';
import { useEffect } from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/baloo-2';
import '../styles/globals.scss';

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
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
        </html>
    );
}
