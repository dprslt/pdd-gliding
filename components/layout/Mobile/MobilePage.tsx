import Head from 'next/head';
import React from 'react';
import MainTabs from './MainTabs';
import MobileNavBar from './MobileNavBar';
import MobilePageHeader from './MobilePageHeader';

type MobilePageProps = {
    pageTitle: string;
    children?: React.ReactNode;
};

const MobilePage: React.FC<MobilePageProps> = ({ pageTitle, children }) => {
    return (
        <div className="mobilePage">
            <Head>
                <title>Puy de dôme Parapente - {pageTitle}</title>
            </Head>
            <MobilePageHeader title={pageTitle} />
            <div className="mobilePage-content">{children}</div>
            <MobileNavBar />
        </div>
    );
};

export default MobilePage;
