import '../styles/globals.scss';
import '../styles/mobilePage.scss';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
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
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
