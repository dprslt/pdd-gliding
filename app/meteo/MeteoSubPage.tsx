import React, { ReactNode } from 'react';
import MainMenu from '../../components/layout/MainMenu';
import MeteoSubMenu from './MeteoSubMenu';
import { mergeClasses } from '../../utils/StyleHelper';
import PageTitle from '../../components/layout/PageTitle';
import subPageStyles from 'styles/SubPage.module.scss';
import { ShareIconButton } from 'components/ShareIconButton';

type MeteoSubPageProps = {
    children: ReactNode;
    className?: string;

    pageTitle?: string;
};

const MeteoSubPage: React.FC<MeteoSubPageProps> = ({
    children,
    className,
    pageTitle,
}) => {
    return (
        <div className="mobile-app">
            <div
                className={mergeClasses(
                    'mobile-content',
                    subPageStyles['subpage-tab-page'],
                    className
                )}
            >
                <div className={`pageContent`}>
                    {pageTitle && (
                        <PageTitle leftItem={<ShareIconButton />}>
                            {pageTitle}
                        </PageTitle>
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
