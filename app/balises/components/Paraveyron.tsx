import React from 'react';
import LinkElement from '../../../components/layout/linkElement/LinkElement';
import roseVent from './rose.jpg';

type ParaveyronBalisesProps = {};

const ParaveyronLink: React.FC<ParaveyronBalisesProps> = () => {
    return (
        <LinkElement
            href={'http://clair-de-femme.fr/balise/saurier.php'}
            favicon={roseVent}
        >
            Aggrégat Balises Paraveyron
        </LinkElement>
    );
};

export default ParaveyronLink;
