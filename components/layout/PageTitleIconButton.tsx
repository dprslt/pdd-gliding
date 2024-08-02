import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pageTitleStyle from './pageTitle.module.scss';
import { mergeClasses } from 'utils/StyleHelper';

export type PageTitleIconButtonProps = {
    onClick: () => void;
    icon: IconProp;
};

export const PageTitleIconButton: React.FC<PageTitleIconButtonProps> = ({
    onClick,
    icon,
}) => {
    return (
        <button
            className={mergeClasses('raw-button', pageTitleStyle.icon)}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={icon} />
        </button>
    );
};
