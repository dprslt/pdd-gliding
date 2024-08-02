import React from 'react';

import spacesStyles from '../spaces.module.scss';
import SpacesSubPage from '../SpacesSubPage';
import ZoneCentreCut from './ZoneCentreCut';
import RtbaMapLink from '../components/LinkRTBA';
import ZoneCentreLink from '../components/LinkZoneCentre';
import LinkNotionZonesMil from '../links/LinkNotionZonesMil';

export const metadata = {
    title: 'Puy de dôme Parapente : Espaces / TMA',
};

export default async function TMASpacesPage() {
    return (
        <SpacesSubPage
            pageTitle={'Espaces : TMAs'}
            className={spacesStyles['space-tab-page']}
        >
            <ZoneCentreCut />

            <ZoneCentreLink />
            <RtbaMapLink />
            <LinkNotionZonesMil />
        </SpacesSubPage>
    );
}
