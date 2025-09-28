import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

type ActiveLinkProps = {
    href: string;
    children: ReactNode;
    enabledClass?: string;
    emptyPathMeanActive?: boolean;
    ariaLabel?: string;
};

const ActiveLink: React.FC<ActiveLinkProps> = ({
    href,
    children,
    enabledClass = 'active',
    emptyPathMeanActive = false,
    ariaLabel,
}) => {
    const pathname = usePathname();
    const isActive =
        pathname &&
        (pathname?.startsWith(href) ||
            (emptyPathMeanActive && pathname?.length <= 1));

    console.log("pathname", pathname);
    console.log("href", href);
    console.log("isActive", isActive);
    console.log("enabledClass", enabledClass);
    console.log("emptyPathMeanActive", emptyPathMeanActive);
    console.log("pathname.length", pathname?.length);
    return (
        <Link
            href={href}
            className={isActive ? enabledClass : ''}
            aria-label={ariaLabel}
        >
            {children}
        </Link>
    );
};

export default ActiveLink;
