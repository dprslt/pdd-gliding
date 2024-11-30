import LinkElement from 'components/layout/linkElement/LinkElement';
import React from 'react';
import heholLogo from './hehol-logo.png';

export type HeholLinkProps = {
    children?: string;
};

const HeholLink: React.FC<HeholLinkProps> = ({ children }) => {
    return (
        <LinkElement href="https://hehol.fr" favicon={heholLogo}>
            {children ||
                'Hehol.fr pour tout comprendre sur les espaces aériens'}
        </LinkElement>
    );
};
export default HeholLink;
