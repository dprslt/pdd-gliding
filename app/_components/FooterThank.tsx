import Link from 'next/link';
import React from 'react';

import footerThanksStyles from './footer-thanks.module.scss';

const FooterThanks: React.FC = () => {
    return (
        <div className={footerThanksStyles['thanks']}>
            Un grand merci à tous les <Link href={'/support'}>donateurs</Link>{' '}
            et à{' '}
            <Link href={'https://www.freedom-parapente.fr/boutique'}>
                Freedom Parapente
            </Link>{' '}
            pour leurs soutiens qui m&apos;aident à faire vivre ce site !
        </div>
    );
};
export default FooterThanks;
