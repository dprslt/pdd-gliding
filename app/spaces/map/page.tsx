import React from 'react';

import spacesStyles from '../spaces.module.scss';
import SpacesSubPage from '../SpacesSubPage';
import { mergeClasses } from 'utils/StyleHelper';

export const metadata = {
    title: 'Puy de dôme Parapente : Espaces / Carte',
};

export default async function TMASpacesPage() {
    return (
        <SpacesSubPage
            className={mergeClasses(
                spacesStyles['space-tab-page'],
                'sub-page-fullscreen'
            )}
        >
            <iframe
                height="300"
                frameBorder="0"
                sandbox="allow-forms allow-scripts allow-same-origin"
                src="https://www.geoportail.gouv.fr/embed/visu.html?c=3.118858,45.708740999999975&z=11&l0=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN-OACI::GEOPORTAIL:OGC:WMTS(1)&permalink=yes"
                allowFullScreen
            ></iframe>
        </SpacesSubPage>
    );
}
