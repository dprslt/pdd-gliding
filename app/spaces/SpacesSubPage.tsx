import React, { ReactNode } from 'react';
import MainMenu from '../../components/layout/MainMenu';
import SpacesSubMenu from './SpacesSubMenu';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { mergeClasses } from '../../utils/StyleHelper';
import PageTitle from '../../components/layout/PageTitle';
import SubPageStyles from 'styles/SubPage.module.scss';

type MeteoSubPageProps = {
    children: ReactNode;
    className?: string;

    pageTitle?: string;
    pageIcon?: IconDefinition;
};

const SpacesSubPage: React.FC<MeteoSubPageProps> = ({
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
                    SubPageStyles['subpage-tab-page'],
                    className
                )}
            >
                <div className={`pageContent`}>
                    {pageTitle && pageIcon && (
                        <PageTitle icon={pageIcon}>{pageTitle}</PageTitle>
                    )}
                    {children}
                </div>
                <SpacesSubMenu />
                <MainMenu />
            </div>
        </div>
    );
};

export default SpacesSubPage;
