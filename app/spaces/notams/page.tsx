import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import spacesStyles from '../spaces.module.scss';
import {
    fetchNOTAMForRoute,
    PDDNorthSouthRoute,
} from 'services/spaces/sofiaNotam';
import NotamCard from './components/notamsCard/NotamCard';
import SpacesSubPage from '../SpacesSubPage';
import NotamNotice from './components/NotamNotice';

export default async function NotamsSpacesPage() {
    const notams = await fetchNOTAMForRoute(PDDNorthSouthRoute);

    return (
        <SpacesSubPage
            pageTitle={'Espaces : Notams'}
            pageIcon={faPlaneCircleCheck}
            className={spacesStyles['space-tab-page']}
        >
            <div>
                <NotamNotice />

                <h2>NOTAMS: &quot;Airspace Restrictions&quot;</h2>
                <div className="notam-list">
                    {notams
                        .filter((notam) => notam.qLine.code23.startsWith('R'))
                        .map((n) => {
                            return <NotamCard key={n.id} notam={n} />;
                        })}
                </div>

                <h2>Autres NOTAMS</h2>
                <div className="notam-list">
                    {notams
                        .filter((notam) => !notam.qLine.code23.startsWith('R'))
                        .map((n) => {
                            return <NotamCard key={n.id} notam={n} />;
                        })}
                </div>
            </div>
        </SpacesSubPage>
    );
}
