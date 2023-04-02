import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Script from 'next/script';
import AppDesktop from '../components/layout/AppDesktop';
import { useMediaQuery } from '@mui/material';
import AppMobile from '../components/layout/Mobile/AppMobile';

const Home: NextPage = () => {
    const isTabletOrMobile = useMediaQuery('(max-width: 820px)');

    return (
        <div className="root-container">
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
                <title>Puy de dôme Parapente</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            {isTabletOrMobile ? <AppMobile /> : <AppDesktop />}
        </div>
    );
};

export default Home;
