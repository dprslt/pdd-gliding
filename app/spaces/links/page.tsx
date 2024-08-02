import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import RtbaMapLink from '../components/LinkRTBA';
import SofiaBriefingLink from './LinkSofia';

import spacesStyles from '../spaces.module.scss';
import SpacesSubPage from '../SpacesSubPage';
import ZoneCentreLink from '../components/LinkZoneCentre';
import CantalAirzonesLink from './LinkCantal';

export const metadata = {
    title: 'Puy de dôme Parapente : Espaces / Liens',
};

export default async function Page() {
    return (
        <SpacesSubPage
            pageTitle={'Espaces : Ressources'}
            className={spacesStyles['space-tab-page']}
        >
            <RtbaMapLink />
            <ZoneCentreLink />
            <SofiaBriefingLink />
            <CantalAirzonesLink />
        </SpacesSubPage>
    );
}
