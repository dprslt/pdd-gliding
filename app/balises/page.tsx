import React from 'react';
import AppPage from '../../components/layout/AppPage';
import { faSnowflake, faWind } from '@fortawesome/free-solid-svg-icons';
import HolfuyHistory from './components/MesuresHolfuy/HolfuyHistory';
import HolfuyResume from './components/MesuresHolfuy/HolfuyResume';
import MesuresOPGC from './components/MesuresOPGC/MesuresOPGC';
import ParaveyronLink from './components/Paraveyron';
import SportAirLink from './components/SpotAirLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import balisesPageStyles from './balises.module.scss';

type BalisesPageProps = {};

export const metadata = {
    title: 'Puy de dôme Parapente : Balises',
};

const BalisesPage: React.FC<BalisesPageProps> = () => {
    return (
        <AppPage
            pageTitle={'Balises'}
            pageIcon={faWind}
            className={balisesPageStyles['mesures-tab-page']}
        >
            <h2>OPGC</h2>
            <div className="text-alert">
                <div className="warn">
                    <FontAwesomeIcon icon={faSnowflake} />
                </div>
                <div className="text">
                    La balise de l&apos;OPGC est soumise au gel en hiver, elle
                    ne sera donc pas capable de fournir une mesure precise sur
                    la force et la direction du vent pendant une bonne partie de
                    l&apos;hiver.
                </div>
            </div>
            <MesuresOPGC />
            <h2>Holfuy PDD Nord (1464)</h2>
            <div className="text-alert">
                <div className="warn">
                    <FontAwesomeIcon icon={faSnowflake} />
                </div>
                <div className="text">
                    La balise holfuy est démontée pendant l&apos;hiver, elle est
                    donc indisponible pendant cette période, elle reviendra au
                    printemps !
                </div>
            </div>
            <HolfuyResume />
            <HolfuyHistory />
            <h2>Pour aller plus loin</h2>
            <SportAirLink />
            <ParaveyronLink />
        </AppPage>
    );
};

export default BalisesPage;
