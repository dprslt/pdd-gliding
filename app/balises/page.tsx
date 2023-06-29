import React from 'react';
import AppPage from '../../components/layout/AppPage';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import HolfuyHistory from './components/MesuresHolfuy/HolfuyHistory';
import HolfuyResume from './components/MesuresHolfuy/HolfuyResume';
import MesuresOPGC from './components/MesuresOPGC/MesuresOPGC';
import ParaveyronLink from './components/Paraveyron';
import SportAirLink from './components/SpotAirLink';

type BalisesPageProps = {};

export const metadata = {
    title: 'Puy de dôme Parapente : Balises',
};

const BalisesPage: React.FC<BalisesPageProps> = () => {
    return (
        <AppPage
            pageTitle={'Balises'}
            pageIcon={faWind}
            className={'mesures-tab-page'}
        >
            <h2>OPGC</h2>
            <MesuresOPGC />
            <h2>Holfuy PDD Nord (1464)</h2>
            <HolfuyResume />
            <HolfuyHistory />
            <h2>Pour aller plus loin</h2>
            <SportAirLink />
            <ParaveyronLink />
        </AppPage>
    );
};

export default BalisesPage;
