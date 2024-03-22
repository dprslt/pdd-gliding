import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import RtbaMapLink from './LinkRTBA';
import SofiaBriefingLink from './LinkSofia';

import spacesStyles from '../spaces.module.scss';
import {
    fetchNOTAMForRoute,
    PDDNorthSouthRoute,
} from 'services/spaces/sofiaNotam';
import SpacesSubPage from '../SpacesSubPage';
import ZoneCentreLink from './LinkZoneCentre';

export default async function Page() {
    const notams = await fetchNOTAMForRoute(PDDNorthSouthRoute);

    return (
        <SpacesSubPage
            pageTitle={'Espaces : Ressources'}
            pageIcon={faPlaneCircleCheck}
            className={spacesStyles['space-tab-page']}
        >
            <RtbaMapLink />
            <ZoneCentreLink />
            <SofiaBriefingLink />
        </SpacesSubPage>
    );
}
