import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/baloo-2';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import MainMenu from '../components/layout/MainMenu';

function PddApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link href="touch-icon-iphone.png" rel="apple-touch-icon" />
                <link
                    href="/icone-pdd-32_x_32.png"
                    rel="apple-touch-icon"
                    sizes="32x32"
                />
                <link
                    href="/icone-pdd-128_x_128.png"
                    rel="apple-touch-icon"
                    sizes="128x128"
                />
                <link
                    href="/icone-pdd-512_x_512.png"
                    rel="apple-touch-icon"
                    sizes="512x512"
                />
                <link rel="manifest" href="/dprslt-pdd.webmanifest" />
                <meta name="theme-color" content="#a7001e" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="viewport" content="uc-fitscreen=yes" />

                <meta property="og:title" content="PDD Parapente - dprslt" />
                <meta
                    property="og:description"
                    content="Centralisation de données sur les conditions de vol en parapente sur le site du Puy de Dome (63)"
                />
                <meta
                    property="og:image"
                    content="https://pdd.dprslt.fr/icone-pdd-128_x_128.png"
                />
                <title>Puy de dôme Parapente</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default PddApp;
