import React from 'react';
import MobilePage from '../../../components/layout/Mobile/MobilePage';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../../../components/Blocks/PageTitle';
import HolfuyHistory from '../../../components/MesuresHolfuy/HolfuyHistory';
import HolfuyResume from '../../../components/MesuresHolfuy/HolfuyResume';
import MesuresOPGC from '../../../components/MesuresOPGC/MesuresOPGC';
import ParaveyronLink from '../../../components/links/Paraveyron';
import SportAirLink from '../../../components/links/SpotAirLink';
import MobileForecastTabs from '../../../components/layout/Mobile/MobileForecastTabs';

type MétéoPageProps = {};

export const urls = ['', 'meteoparapente', 'windy', 'meteoblue', 'more'];

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
        <MobilePage className={'forecast-tab-page'}>
            <MobileForecastTabs />
        </MobilePage>
    );
};

export default MeteoPage;
