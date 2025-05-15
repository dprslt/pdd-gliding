import React from 'react';

import spacesStyles from '../spaces.module.scss';
import SpacesSubPage from '../SpacesSubPage';
import { mergeClasses } from 'utils/StyleHelper';

export const metadata = {
    title: 'Puy de dôme Parapente : Espaces / HEHOL',
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
                src="https://hehol.fr/gliding/plan"
                allowFullScreen
            ></iframe>
        </SpacesSubPage>
    );
}
