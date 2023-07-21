import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, ReactNode } from 'react';

import pageTitleStyle from './pageTitle.module.scss';

type PageTitleProps = {
    icon: IconProp;
    children: ReactNode;
};

const PageTitle: React.FC<PageTitleProps> = ({ icon, children }) => {
    return (
        <h1 className={pageTitleStyle['page-title']}>
            <div className={pageTitleStyle.icon}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <span>{children}</span>
        </h1>
    );
};

export default PageTitle;
