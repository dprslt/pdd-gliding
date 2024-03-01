import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import AppPage from '../../components/layout/AppPage';
import RtbaMapLink from './components/LinkRTBA';
import TmaInfos from './components/TmaInfos';
import SofiaBriefingLink from './components/LinkSofia';

import spacesStyles from './spaces.module.scss';
import ParsedNotams from './components/ParsedNotams';

export default async function Page() {
    const coockiesInFetch = await fetch(
        `https://sofia-briefing.aviation-civile.gouv.fr/sofia/pages/homepage.html`,
        { cache: 'no-store' }
    );

    // const buildParams = `%3Aoperation=postNarrowRoutePibRequest&valid_from=2024-02-06T22%3A00%3A16Z&duration=1200&traffic=V&fl_lower=0&fl_upper=85&width=30&radiusAD=30&route%5B%5D=LFBK&route%5B%5D=LFLW&&isFromSofia=true&operation=postNarrowRoutePibRequest&target=%23aside-target&href=%2Fsofia%2Fpages%2Fnotamroute.html&typeVol=N&departure_date=06-02-2024&departure_time=2300&lang=fr&routeVal=false`;

    // const result = await fetch(
    //     'https://sofia-briefing.aviation-civile.gouv.fr/sofia',
    //     {
    //         method: 'POST',
    //         body: buildParams,
    //         credentials: 'same-origin',
    //     }
    // );

    return (
        <AppPage
            pageTitle={'Espaces Aériens'}
            pageIcon={faPlaneCircleCheck}
            className={spacesStyles['space-tab-page']}
        >
            <TmaInfos />
            <RtbaMapLink />
            <SofiaBriefingLink />

            {/* <pre>{JSON.stringify(result)}</pre> */}

            {/* <ParsedNotams /> */}
        </AppPage>
    );
}
