import React from 'react';
import logoMeteoBlue from './meteo-blue.png';
import LinkElement from '../../../components/layout/linkElement/LinkElement';

type MetoBlueMapLinkProps = {};

const MetoBlueMapLink: React.FC<MetoBlueMapLinkProps> = () => {
    return (
        <LinkElement
            href={
                'https://www.meteoblue.com/fr/meteo/cartes/orcines_france_2989417#coords=10.01/45.7608/2.9682&map=wind~hourly~auto~850%20mb~none'
            }
            favicon={logoMeteoBlue}
        >
            Carte des vents Météoblue
        </LinkElement>
    );
};

export default MetoBlueMapLink;
