import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';

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

    // To prevent hydration mismatches on Vercel, especially for the root route ('/'),
    // we manage the active class on the client side using useState and useEffect.
    // This ensures the `className` is applied only after the component has fully mounted
    // and the client-side `pathname` is stable.
    const [computedClassName, setComputedClassName] = useState('');

    
    useEffect(() => {
        const isActive =
            pathname &&
            (pathname?.startsWith(href) ||
                (emptyPathMeanActive && pathname?.length! <= 1));
        setComputedClassName(isActive ? enabledClass : '');
    }, [pathname, href, emptyPathMeanActive, enabledClass]);

    return (
        <Link
            href={href}
            className={computedClassName}
            aria-label={ariaLabel}
        >
            {children}
        </Link>
    );
};

export default ActiveLink;
