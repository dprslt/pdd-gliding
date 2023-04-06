import React from 'react';
import LinkElement from '../Blocks/LinkElement';
import logoMeteoBlue from './meteo-blue.png';

type MultiModelLinkProps = {};

const MultiModelLink: React.FC<MultiModelLinkProps> = () => {
    return (
        <LinkElement
            href={
                'https://www.meteoblue.com/fr/meteo/prevision/multimodel/orcines_france_2989417?fcstlength=144&params%5B%5D=&params%5B%5D=NMM4&params%5B%5D=NMM22&params%5B%5D=NEMS4&params%5B%5D=NEMS12&params%5B%5D=NEMS12_E&params%5B%5D=NEMSGLOBAL&params%5B%5D=NEMSGLOBAL_E&params%5B%5D=&params%5B%5D=IFS04&params%5B%5D=UMGLOBAL10&params%5B%5D=UKMO2&params%5B%5D=ICONEU&params%5B%5D=ICON&params%5B%5D=ICOND2&params%5B%5D=GFS05&params%5B%5D=GEM15&params%5B%5D=MFFR&params%5B%5D=MFEU&params%5B%5D=MFGLOBAL&params%5B%5D=COSMOM5&params%5B%5D=HARMONIE'
            }
            favicon={logoMeteoBlue}
        >
            Multimodel Météoblue
        </LinkElement>
    );
};

export default MultiModelLink;
