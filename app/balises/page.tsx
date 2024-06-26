import React from 'react';
import AppPage from '../../components/layout/AppPage';
import { faSnowflake, faWind } from '@fortawesome/free-solid-svg-icons';
import HolfuyHistory from './components/MesuresHolfuy/HolfuyHistory';
import HolfuyResume from './components/MesuresHolfuy/HolfuyResume';
import ParaveyronLink from './components/Paraveyron';
import SpotAirLink from './components/SpotAirLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import balisesPageStyles from './balises.module.scss';
import RawMeterOPGC from './components/MesuresOPGC/RawMeterOPGC';
import OPGCLink from './components/OPGCLink';
import SupportPageHeaderLink from 'app/support/SupportPageHeaderLink';
import MetaJDV from './components/MetaJDV';
import SharedMeasure from './components/Mesures/SharedMeasures';

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
            pageTitleRightItem={<SupportPageHeaderLink />}
        >

            <SharedMeasure />
            {/* <h2>Holfuy PDD Nord (1464)</h2> */}
            {/*
            <div>
                <div className="text-alert">
                    <div className="warn">
                        <FontAwesomeIcon icon={faSnowflake} />
                    </div>
                    <div className="text">
                        La balise holfuy est démontée pendant l&apos;hiver, elle
                        est donc indisponible pendant cette période, elle
                        reviendra au printemps... &apos;fin bientôt
                        j&apos;espére !
                    </div>
                </div>
            </div>
            */}
            <HolfuyResume />
            <HolfuyHistory />
            <h2>Balises à proximité</h2>
            <MetaJDV />
            <h2>Pour aller plus loin</h2>
            <SpotAirLink />
            <OPGCLink />
            <ParaveyronLink />
        </AppPage>
    );
};

export default BalisesPage;
