import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import TmaInfos from './TmaInfos';

import spacesStyles from '../spaces.module.scss';
import SpacesSubPage from '../SpacesSubPage';

export default async function TMASpacesPage() {
    return (
        <SpacesSubPage
            pageTitle={'Espaces : TMAs'}
            pageIcon={faPlaneCircleCheck}
            className={spacesStyles['space-tab-page']}
        >
            {/* <div>
                <h2>NOTAMS: "Airspace Restrictions"</h2>

                {notams
                    .filter((notam) => notam.qLine.code23.startsWith('R'))
                    .map((n) => {
                        return <NotamCard key={n.id} notam={n} />;
                    })}
            </div> */}

            <TmaInfos />
            {/* <RtbaMapLink /> */}
            {/* <SofiaBriefingLink /> */}

            {/* <pre>{JSON.stringify(result)}</pre> */}

            {/* <ParsedNotams /> */}
        </SpacesSubPage>
    );
}
