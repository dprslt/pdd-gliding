import React from 'react';
import MeteoSubPage from '../MeteoSubPage';
import MetOfficeLink from '../components/MetOfficeUK';
import MultiModelLink from '../components/MeteoBlueMultimodel';

import MetoBlueMapLink from '../components/MetoBlueMapLink';

export const metadata = {
    title: 'Puy de dôme Parapente : Météo Liens',
};
const MeteoMorePage: React.FC = () => {
    return (
        <MeteoSubPage pageTitle="Analyse météo">
            <h2>Pour aller plus loin</h2>
            <MetOfficeLink />
            <MultiModelLink />
            <MetoBlueMapLink />
        </MeteoSubPage>
    );
};

export default MeteoMorePage;
