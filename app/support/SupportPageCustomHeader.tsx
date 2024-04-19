'use client';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PageTitle from 'components/layout/PageTitle';
import { useRouter } from 'next/navigation';
import React from 'react';

type SupportPageCustomHeaderProps = {};

const SupportPageCustomHeader: React.FC<SupportPageCustomHeaderProps> = () => {
    const router = useRouter();
    return (
        <PageTitle icon={faArrowLeft} onIconClick={() => router.back()}>
            Soutenez le site
        </PageTitle>
    );
};

export default SupportPageCustomHeader;
