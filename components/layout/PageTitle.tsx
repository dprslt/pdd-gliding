import React, { ReactNode } from 'react';

import pageTitleStyle from './pageTitle.module.scss';

type PageTitleProps = {
    children: ReactNode;
    rightItem?: ReactNode;
    leftItem?: ReactNode;
};

const PageTitle: React.FC<PageTitleProps> = ({
    children,
    rightItem,
    leftItem,
}) => (
    <h1 className={pageTitleStyle['page-title']}>
        {leftItem}
        <span>{children}</span>
        {rightItem}
    </h1>
);

export default PageTitle;
