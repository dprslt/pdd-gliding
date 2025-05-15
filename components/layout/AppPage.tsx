'use client';

import Head from 'next/head';
import React, { ReactNode } from 'react';
import {
    faShareNodes,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import MainMenu from './MainMenu';
import PageTitle from './PageTitle';
import { mergeClasses } from '../../utils/StyleHelper';
import { useRouter } from 'next/navigation';
import { ShareIconButton } from 'components/ShareIconButton';

type AppPageProps = {
    pageTitle?: string;
    pageIcon?: IconDefinition;
    className?: string;
    children?: React.ReactNode;
    pageTitleRightItem?: ReactNode | null;
    pageTitleLeftItem?: ReactNode;
};

const AppPage: React.FC<AppPageProps> = ({
    pageTitle,
    children,
    className,
    pageTitleRightItem,
    pageTitleLeftItem,
}) => {
    const router = useRouter();
    return (
        <div className="mobile-app">
            <div className={mergeClasses('mobile-content', className)}>
                <div className={`pageContent`}>
                    {pageTitle && (
                        <PageTitle
                            rightItem={
                                pageTitleRightItem || <ShareIconButton />
                            }
                            leftItem={pageTitleLeftItem}
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
