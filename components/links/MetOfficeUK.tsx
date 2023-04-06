import React from 'react';
import LinkElement from '../Blocks/LinkElement';
import MetOfficeLogo from './met_office.jpg';

type MetOfficeLinkProps = {};

const MetOfficeLink: React.FC<MetOfficeLinkProps> = () => {
    return (
        <LinkElement
            href={
                'https://www.metoffice.gov.uk/weather/maps-and-charts/surface-pressure'
            }
            favicon={MetOfficeLogo}
        >
            Cartes Isobarres de MetOffice
        </LinkElement>
    );
};

export default MetOfficeLink;
