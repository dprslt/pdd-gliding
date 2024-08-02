import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import TmaInfos from './TmaInfos';

import spacesStyles from '../spaces.module.scss';
import SpacesSubPage from '../SpacesSubPage';

export const metadata = {
    title: 'Puy de dôme Parapente : Espaces / TMA',
};

export default async function TMASpacesPage() {
    return (
        <SpacesSubPage
            pageTitle={'Espaces : TMAs'}
            className={spacesStyles['space-tab-page']}
        >
            <TmaInfos />
        </SpacesSubPage>
    );
}
