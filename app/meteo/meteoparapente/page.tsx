import React from 'react';
import MeteoSubPage from '../MeteoSubPage';

type MeteoParapentePageProps = {};

export const metadata = {
    title: 'Puy de dôme Parapente : Météo MeteoParapente',
};
const MeteoParapentePage: React.FC<MeteoParapentePageProps> = () => {
    return (
        <MeteoSubPage>
            <iframe
                src="https://meteo-parapente.com/#/45.7728,2.9625,18"
                height={700}
                width={'50%'}
                frameBorder="0"
            />
        </MeteoSubPage>
    );
};

export default MeteoParapentePage;
