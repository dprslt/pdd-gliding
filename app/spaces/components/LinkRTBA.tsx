import React from 'react';
import LinkElement from '../../../components/layout/linkElement/LinkElement';

import sia from './cocotte.svg';

const RtbaMapLink: React.FC = () => {
    return (
        <LinkElement
            href={'https://www.sia.aviation-civile.gouv.fr/schedules'}
            favicon={sia}
        >
            Carte Azba Activation RTBA
        </LinkElement>
    );
};

export default RtbaMapLink;
