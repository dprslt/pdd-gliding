import React from 'react';
import LinkElement from '../../../components/layout/linkElement/LinkElement';

import notam from './notam-circle.png';

const SofiaBriefingLink: React.FC = () => {
    return (
        <LinkElement
            href={
                'https://sofia-briefing.aviation-civile.gouv.fr/sofia/pages/prepavol.html'
            }
            favicon={notam}
        >
            NOTAMs (Sofia)
        </LinkElement>
    );
};

export default SofiaBriefingLink;
