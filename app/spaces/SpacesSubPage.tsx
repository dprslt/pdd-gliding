import React, { ReactNode } from 'react';
import MainMenu from '../../components/layout/MainMenu';
import SpacesSubMenu from './SpacesSubMenu';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { mergeClasses } from '../../utils/StyleHelper';
import PageTitle from '../../components/layout/PageTitle';
import SubPageStyles from 'styles/SubPage.module.scss';
import { ShareIconButton } from 'components/ShareIconButton';

type MeteoSubPageProps = {
    children: ReactNode;
    className?: string;

    pageTitle?: string;
};

const SpacesSubPage: React.FC<MeteoSubPageProps> = ({
    children,
    className,
    pageTitle,
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
                    {pageTitle && (
                        <PageTitle rightItem={<ShareIconButton />}>
                            {pageTitle}
                        </PageTitle>
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
