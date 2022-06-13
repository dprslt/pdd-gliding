import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Script from 'next/script';
import AppDesktop from '../components/layout/AppDesktop';
import { useMediaQuery } from '@mui/material';
import AppMobile from '../components/layout/Mobile/AppMobile';
import MobilePage from '../components/layout/Mobile/MobilePage';

const BalisesPage: NextPage = () => {
    const isTabletOrMobile = useMediaQuery('(max-width: 700px)');

    if (!isTabletOrMobile) {
        // TODO redirect to Home
    }

    return <MobilePage pageTitle="Balises">toto</MobilePage>;
};

export default BalisesPage;
