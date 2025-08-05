import React from 'react';
import MeteoSubPage from '../MeteoSubPage';

export const metadata = {
    title: 'Puy de dôme Parapente : Météo Wetter',
};
const MeteoParapentePage: React.FC = () => {
    return (
        <MeteoSubPage className="sub-page-fullscreen">
            <iframe
                src="https://www.wetter.aero/"
                height={700}
                width={'100%'}
                frameBorder="0"
            />
        </MeteoSubPage>
    );
};

export default MeteoParapentePage;
