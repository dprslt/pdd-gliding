import React from 'react';
import MeteoSubPage from '../MeteoSubPage';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import MetOfficeLink from '../components/MetOfficeUK';
import MultiModelLink from '../components/MeteoBlueMultimodel';
import AppPage from '../../../components/layout/Mobile/AppPage';

const MeteoMorePage: React.FC = () => {
    return (
        // <AppPage
        //     className="forecast-tab-page forecast-morelinks"
        //     pageIcon={faEarthEurope}
        //     pageTitle="Analyse météo"
        // >
        <MeteoSubPage
            pageIcon={faEarthEurope}
            pageTitle="Analyse météo"
            className="forecast-more"
        >
            {/* {children} */}
            {/* NEW PAGE */}
            {/* <MeteoSubMenu /> */}
            <h2>Pour aller plus loin</h2>
            <MetOfficeLink />
            <MultiModelLink />
        </MeteoSubPage>
    );
};

export default MeteoMorePage;
