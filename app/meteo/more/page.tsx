import React from 'react';
import MeteoSubPage from '../MeteoSubPage';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import MetOfficeLink from '../components/MetOfficeUK';
import MultiModelLink from '../components/MeteoBlueMultimodel';
import AppPage from '../../../components/layout/AppPage';

import forecastStyle from '../forecast.module.scss';

const MeteoMorePage: React.FC = () => {
    return (
        <MeteoSubPage
            pageIcon={faEarthEurope}
            pageTitle="Analyse météo"
            className={forecastStyle['forecast-more']}
        >
            <h2>Pour aller plus loin</h2>
            <MetOfficeLink />
            <MultiModelLink />
        </MeteoSubPage>
    );
};

export default MeteoMorePage;
