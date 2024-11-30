import React from 'react';
import RtbaMapLink from '../components/LinkRTBA';
import SofiaBriefingLink from './LinkSofia';

import spacesStyles from '../spaces.module.scss';
import SpacesSubPage from '../SpacesSubPage';
import ZoneCentreLink from '../components/LinkZoneCentre';
import CantalAirzonesLink from './LinkCantal';
import LinkNotionZonesMil from './LinkNotionZonesMil';

import HeholLink from './HeholLink';

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
            <LinkNotionZonesMil />

            <HeholLink />
        </SpacesSubPage>
    );
}
