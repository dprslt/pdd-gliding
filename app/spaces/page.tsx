import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import AppPage from '../../components/layout/AppPage';
import RtbaMapLink from './components/LinkRTBA';
import TmaInfos from './components/TmaInfos';
import SofiaBriefingLink from './components/LinkSofia';

import spacesStyles from './spaces.module.scss';

const SpacesPage: React.FC = () => {
    return (
        <AppPage
            pageTitle={'Espaces Aériens'}
            pageIcon={faPlaneCircleCheck}
            className={spacesStyles['space-tab-page']}
        >
            <TmaInfos />
            <RtbaMapLink />
            <SofiaBriefingLink />
        </AppPage>
    );
};

export default SpacesPage;
