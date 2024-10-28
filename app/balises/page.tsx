import React from 'react';
import AppPage from '../../components/layout/AppPage';
import HolfuyHistory from './components/MesuresHolfuy/HolfuyHistory';
import HolfuyResume from './components/MesuresHolfuy/HolfuyResume';
import ParaveyronLink from './components/Paraveyron';
import SpotAirLink from './components/SpotAirLink';

import balisesPageStyles from './balises.module.scss';
import OPGCLink from './components/OPGCLink';
import SupportPageHeaderLink from 'app/support/SupportPageHeaderLink';
import MetaJDV from './components/MetaJDV';
import SharedMeasure from './components/Mesures/SharedMeasures';
import Link from 'next/link';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WarningHelico from 'app/_components/WarningHelico';

type BalisesPageProps = {};

export const metadata = {
    title: 'Puy de dôme Parapente : Balises',
};

const BalisesPage: React.FC<BalisesPageProps> = () => {
    return (
        <AppPage
            pageTitle={'Balises'}
            className={balisesPageStyles['mesures-tab-page']}
            pageTitleLeftItem={<SupportPageHeaderLink />}
        >
            <WarningHelico />
            <SharedMeasure />
            <div>
                <div className="text-alert">
                    <div className="warn">
                        <FontAwesomeIcon icon={faSnowflake} />
                    </div>
                    <div className="text">
                        La balise holfuy est démontée pendant l&apos;hiver, elle
                        est donc indisponible pendant cette période, elle
                        reviendra au printemps...
                    </div>
                </div>
            </div>
            {/* <HolfuyResume />
            <HolfuyHistory /> */}
            <h2>Balises à proximité</h2>
            <MetaJDV />
            <h2>Pour aller plus loin</h2>
            <SpotAirLink />
            <OPGCLink />
            <ParaveyronLink />
            <div className={balisesPageStyles['thanks']}>
                Un grand merci à tous les{' '}
                <Link href={'/support'}>donateurs</Link> et à{' '}
                <Link href={'https://www.freedom-parapente.fr/boutique'}>
                    Freedom Parapente
                </Link>{' '}
                pour leurs soutiens qui m&apos;aident à faire vivre ce site !
            </div>
        </AppPage>
    );
};

export default BalisesPage;
