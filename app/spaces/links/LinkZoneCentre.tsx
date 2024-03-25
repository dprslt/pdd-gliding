import React from 'react';
import LinkElement from '../../../components/layout/linkElement/LinkElement';

import sia from './cocotte.svg';

const ZoneCentreLink: React.FC = () => {
    return (
        <LinkElement
            href={
                'https://www.sia.aviation-civile.gouv.fr/calendrier-zone-centre'
            }
            favicon={sia}
        >
            Calendrier Zone Centre
        </LinkElement>
    );
};

export default ZoneCentreLink;
