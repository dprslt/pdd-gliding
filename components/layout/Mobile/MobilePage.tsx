'use client';

import Head from 'next/head';
import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../../Blocks/PageTitle';
import MainMenu from './MainMenu';

type MobilePageProps = {
    pageTitle?: string;
    pageIcon?: IconDefinition;
    className?: string;
    children?: React.ReactNode;
};

const MobilePage: React.FC<MobilePageProps> = ({
    pageTitle,
    pageIcon,
    children,
    className,
}) => {
    return (
        <div className="mobile-app">
            <div className="mobile-content">
                <div className={`pageContent ${className}`}>
                    {pageTitle && pageIcon && (
                        <PageTitle icon={pageIcon}>{pageTitle}</PageTitle>
                    )}
                    {children}
                </div>
                <MainMenu />
            </div>
        </div>
    );
};

export default MobilePage;
