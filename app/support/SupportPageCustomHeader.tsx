import { GoBackIconButton } from 'components/GoBackIconButton';
import PageTitle from 'components/layout/PageTitle';
import React from 'react';

type SupportPageCustomHeaderProps = {};

const SupportPageCustomHeader: React.FC<SupportPageCustomHeaderProps> = () => {
    return (
        <PageTitle leftItem={<GoBackIconButton />}>Soutenez le site</PageTitle>
    );
};

export default SupportPageCustomHeader;
