import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, ReactNode } from 'react';

type PageTitleProps = {
    icon: IconProp;
    children: ReactNode;
};

const PageTitle: React.FC<PageTitleProps> = ({ icon, children }) => {
    return (
        <h1 className="page-title">
            <div className="icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <span>{children}</span>
        </h1>
    );
};

export default PageTitle;
