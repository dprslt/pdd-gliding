import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Script from 'next/script';
import AppDesktop from '../components/layout/AppDesktop';
import { useMediaQuery } from '@mui/material';
import AppMobile from '../components/layout/Mobile/AppMobile';

const Home: NextPage = () => {
    // const isTabletOrMobile = useMediaQuery('(max-width: 820px)');
    const isTabletOrMobile = true;

    return (
        <div className="root-container">
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
