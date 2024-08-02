'use client';

import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import pageTitleStyle from './layout/pageTitle.module.scss';

export const ShareIconButton = () => {
    return (
        <Link href="/share" className={pageTitleStyle.icon}>
            <FontAwesomeIcon icon={faShareNodes} />
        </Link>
    );
};
