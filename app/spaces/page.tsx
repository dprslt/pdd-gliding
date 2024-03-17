import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import AppPage from '../../components/layout/AppPage';
import RtbaMapLink from './components/LinkRTBA';
import TmaInfos from './components/TmaInfos';
import SofiaBriefingLink from './components/LinkSofia';

import spacesStyles from './spaces.module.scss';
import ParsedNotams from './components/ParsedNotams';
import {
    fetchNOTAMForRoute,
    PDDNorthSouthRoute,
} from 'services/spaces/sofiaNotam';
import NotamCard from './components/notams/NotamCard';

export default async function Page() {
    const notams = await fetchNOTAMForRoute(PDDNorthSouthRoute);

    return (
        <AppPage
            pageTitle={'Espaces Aériens'}
            pageIcon={faPlaneCircleCheck}
            className={spacesStyles['space-tab-page']}
        >
            <div>
                <h2>NOTAMS: "Airspace Restrictions"</h2>

                {notams
                    .filter((notam) => notam.qLine.code23.startsWith('R'))
                    .map((n) => {
                        return <NotamCard key={n.id} notam={n} />;
                    })}
            </div>

            <TmaInfos />
            <RtbaMapLink />
            <SofiaBriefingLink />

            {/* <pre>{JSON.stringify(result)}</pre> */}

            {/* <ParsedNotams /> */}
        </AppPage>
    );
}
