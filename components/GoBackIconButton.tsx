'use client';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { PageTitleIconButton } from './layout/PageTitleIconButton';

export const GoBackIconButton = () => {
    const router = useRouter();
    return (
        <PageTitleIconButton onClick={() => router.back()} icon={faArrowLeft} />
    );
};
