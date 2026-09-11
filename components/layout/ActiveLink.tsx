import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useSyncExternalStore } from 'react';

type ActiveLinkProps = {
    href: string;
    children: ReactNode;
    enabledClass?: string;
    emptyPathMeanActive?: boolean;
    ariaLabel?: string;
};

const subscribe = () => () => {};

const ActiveLink: React.FC<ActiveLinkProps> = ({
    href,
    children,
    enabledClass = 'active',
    emptyPathMeanActive = false,
    ariaLabel,
}) => {
    const pathname = usePathname();

    // To prevent hydration mismatches on Vercel, especially for the root route ('/'),
    // the active class is applied only after the component has fully mounted
    // and the client-side `pathname` is stable.
    const mounted = useSyncExternalStore(
        subscribe,
        () => true,
        () => false,
    );

    const isActive =
        mounted &&
        !!pathname &&
        (pathname.startsWith(href) ||
            (emptyPathMeanActive && pathname.length <= 1));
    const computedClassName = isActive ? enabledClass : '';

    return (
        <Link href={href} className={computedClassName} aria-label={ariaLabel}>
            {children}
        </Link>
    );
};

export default ActiveLink;
