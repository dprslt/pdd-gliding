import React from 'react';
import AppPage from '../../../components/layout/Mobile/AppPage';
import MobileForecastTabs from '../../../components/layout/Mobile/MobileForecastTabs';

type MétéoPageProps = {};

const urls = ['', 'meteoparapente', 'windy', 'meteoblue', 'more'];

export const metadata = {
    title: 'Puy de dôme Parapente : Météo',
};

export async function generateStaticParams() {
    return urls.map((e) => ({
        slug: [e],
    }));
}

const MeteoPage: React.FC<MétéoPageProps> = () => {
    return (
        <AppPage className={'forecast-tab-page'}>
            <MobileForecastTabs />
        </AppPage>
    );
};

export default MeteoPage;
