import {
    faCross,
    faFlaskVial,
    faPlaneCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import spacesStyles from '../spaces.module.scss';
import {
    fetchNOTAMForRoute,
    PDDNorthSouthRoute,
} from 'services/spaces/sofiaNotam';
import NotamCard from './components/notamsCard/NotamCard';
import SpacesSubPage from '../SpacesSubPage';
import NotamNotice from './components/NotamNotice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateTime } from 'luxon';
import './notam-page.scss';

export const metadata = {
    title: 'Puy de dôme Parapente : Espaces / Notams',
};

export default async function NotamsSpacesPage() {
    const notamResponse = await fetchNOTAMForRoute(PDDNorthSouthRoute).catch(
        (e) => {
            console.error(e);
            return null;
        }
    );

    return (
        <SpacesSubPage
            pageTitle={'Espaces : Notams'}
            pageIcon={faPlaneCircleCheck}
            className={spacesStyles['space-tab-page']}
        >
            <div>
                <NotamNotice />

                {notamResponse === null ? (
                    <>
                        <div className="text-alert">
                            <div className="warn">
                                <FontAwesomeIcon icon={faCross} />
                            </div>
                            <div className="text">
                                Une erreur est survenur, essayez
                                d&quot;actualiser la page.
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <p className="notam-update-time">
                            Dernière mise à jour :{' '}
                            {DateTime.fromISO(notamResponse?.timestamp)
                                .setLocale('fr')
                                .setZone('Europe/Paris')
                                .toLocaleString(DateTime.DATETIME_MED)}
                        </p>
                        <h2>NOTAMS: &quot;Airspace Restrictions&quot;</h2>
                        <div className="notam-list">
                            {notamResponse.notams
                                .filter((notam) =>
                                    notam.qLine.code23.startsWith('R')
                                )
                                .map((n) => {
                                    return <NotamCard key={n.id} notam={n} />;
                                })}
                        </div>
                        <h2>Autres NOTAMS</h2>
                        <div className="notam-list">
                            {notamResponse.notams
                                .filter(
                                    (notam) =>
                                        !notam.qLine.code23.startsWith('R')
                                )
                                .map((n) => {
                                    return <NotamCard key={n.id} notam={n} />;
                                })}
                        </div>
                    </>
                )}
            </div>
        </SpacesSubPage>
    );
}
