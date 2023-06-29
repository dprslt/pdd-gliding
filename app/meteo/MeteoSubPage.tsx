import React, { ReactNode } from 'react';
import AppPage from '../../components/layout/Mobile/AppPage';
import MainMenu from '../../components/layout/MainMenu';
import MeteoSubMenu from './MeteoSubMenu';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { mergeClasses } from '../../utils/StyleHelper';
import PageTitle from '../../components/layout/PageTitle';

type MeteoSubPageProps = {
    children: ReactNode;
    className?: string;

    pageTitle?: string;
    pageIcon?: IconDefinition;
};

const MeteoSubPage: React.FC<MeteoSubPageProps> = ({
    children,
    className,
    pageTitle,
    pageIcon,
}) => {
    return (
        <div className="mobile-app">
            <div
                className={mergeClasses(
                    'mobile-content',
                    'forecast-tab-page',
                    className
                )}
            >
                <div className={`pageContent`}>
                    {pageTitle && pageIcon && (
                        <PageTitle icon={pageIcon}>{pageTitle}</PageTitle>
                    )}
                    {children}
                </div>
                <MeteoSubMenu />
                <MainMenu />
            </div>
        </div>
    );
};

export default MeteoSubPage;
