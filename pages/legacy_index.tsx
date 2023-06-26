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
            {isTabletOrMobile ? <AppMobile /> : <AppDesktop />}
        </div>
    );
};

export default Home;
