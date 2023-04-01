import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

type AnalyticsHeadProps = {};

const AnalyticsHead: React.FC<AnalyticsHeadProps> = () => {
    return (
        <>
            {process && process.env.NODE_ENV === 'production' && (
                <>
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
                </>
            )}
        </>
    );
};

export default AnalyticsHead;
