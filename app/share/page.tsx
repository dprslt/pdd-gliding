import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import AppPage from 'components/layout/AppPage';
import React from 'react';
import Image from 'next/image';

import qrCode from './qr-code.png';
import CopyUrlButton from './CopyUrlButton';

import './share.scss';

export const metadata = {
    title: 'Puy de dôme Parapente : Partage',
};

const SharePage = () => {
    return (
        <AppPage
            pageTitle={'Partager'}
            pageIcon={faShareNodes}
            className="page-share"
        >
            <Image src={qrCode} alt="QRCode" className="qrCode" sizes="100vw" />
            <CopyUrlButton />
        </AppPage>
    );
};

export default SharePage;
