import React from 'react';
import LinkElement from '../../../components/layout/linkElement/LinkElement';

import logoChaine from './logo-chaine.png';

const LinkNotionZonesMil: React.FC = () => {
    return (
        <LinkElement
            href={
                'https://numerous-city-a34.notion.site/Les-zones-militaires-dans-le-Puy-de-D-me-230e1bc38d2e46cdb17803e09bee591b?pvs=4'
            }
            favicon={logoChaine}
        >
            Résumé des zones militaires sur la Chaine des Puys
        </LinkElement>
    );
};

export default LinkNotionZonesMil;
