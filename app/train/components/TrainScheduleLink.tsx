import React from 'react';
import LinkElement from '../../../components/layout/LinkElement';
import icon from './pano_icon_x96.png';

type TrainScheduleLinkProps = {};

const TrainScheduleLink: React.FC<TrainScheduleLinkProps> = () => {
    return (
        <LinkElement
            href={'https://www.panoramiquedesdomes.fr/horaires-tarifs/'}
            favicon={icon}
        >
            Planning panoramique
        </LinkElement>
    );
};

export default TrainScheduleLink;
