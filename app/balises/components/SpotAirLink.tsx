import React from 'react';

import sportAirLogo from './spotair-logo.png';
import LinkElement from '../../../components/layout/linkElement/LinkElement';

const SpotAirLink: React.FC = () => {
    return (
        <LinkElement favicon={sportAirLogo} href="https://spotair.mobi">
            SpotAir
        </LinkElement>
    );
};

export default SpotAirLink;
