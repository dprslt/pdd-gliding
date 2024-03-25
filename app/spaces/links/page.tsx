import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import RtbaMapLink from './LinkRTBA';
import SofiaBriefingLink from './LinkSofia';

import spacesStyles from '../spaces.module.scss';
import SpacesSubPage from '../SpacesSubPage';
import ZoneCentreLink from './LinkZoneCentre';

export default async function Page() {
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
