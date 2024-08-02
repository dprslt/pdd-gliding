import React, { ReactElement, ReactNode } from 'react';

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
        {/* <div className={pageTitleStyle.icon}>{leftItem}</div> */}
        <span>{children}</span>
        {rightItem && <div>{rightItem}</div>}
    </h1>
);

export default PageTitle;
