'use client';

import Head from 'next/head';
import React, { ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import MainMenu from './MainMenu';
import PageTitle from './PageTitle';
import { mergeClasses } from '../../utils/StyleHelper';

type AppPageProps = {
    pageTitle?: string;
    pageIcon?: IconDefinition;
    className?: string;
    children?: React.ReactNode;
    pageTitleRightItem?: ReactNode;
};

const AppPage: React.FC<AppPageProps> = ({
    pageTitle,
    pageIcon,
    children,
    className,
    pageTitleRightItem,
}) => {
    return (
        <div className="mobile-app">
            <div className={mergeClasses('mobile-content', className)}>
                <div className={`pageContent`}>
                    {pageTitle && pageIcon && (
                        <PageTitle
                            icon={pageIcon}
                            rightItem={pageTitleRightItem}
                        >
                            {pageTitle}
                        </PageTitle>
                    )}
                    {children}
                </div>
                <MainMenu />
            </div>
        </div>
    );
};

export default AppPage;
