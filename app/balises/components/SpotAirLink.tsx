import React from 'react';
import Image from 'next/image';

import sportAirLogo from './spotair-logo.png';
import LinkElement from '../../../components/layout/linkElement/LinkElement';

type SportAirLinkProps = {};

const SportAirLink: React.FC<SportAirLinkProps> = () => {
    return (
        <LinkElement favicon={sportAirLogo} href="https://spotair.mobi">
            SpotAir
        </LinkElement>
    );
};

export default SportAirLink;
