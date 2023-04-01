import '../styles/globals.scss';
import '../styles/mobilePage.scss';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';
import { useEffect } from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import AnalyticsHead from '../components/Headers/Analystics';
import PWAHead from '../components/Headers/PWA';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <PWAHead />
                <AnalyticsHead />
                <meta name="theme-color" content="#a7001e" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="viewport" content="uc-fitscreen=yes" />

                <meta property="og:title" content="PDD Parapente - dprslt" />
                <meta
                    property="og:description"
                    content="Centralisation de données sur les conditions de vol sur le site du Puy de Dome (63)"
                />
                <meta
                    property="og:image"
                    content="https://pdd.dprslt.fr/icone-pdd-128_x_128.png"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
