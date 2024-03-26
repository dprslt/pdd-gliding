import React from 'react';
import LinkElement from '../../../components/layout/linkElement/LinkElement';

import cantal from './logo-cantal.png';

const CantalAirzonesLink: React.FC = () => {
    return (
        <LinkElement
            href={'https://info-parapente-cantal.fr/'}
            favicon={cantal}
        >
            Zones actives dans le cantal
        </LinkElement>
    );
};

export default CantalAirzonesLink;
