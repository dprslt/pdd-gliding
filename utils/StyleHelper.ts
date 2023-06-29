/**
 * A small utils to properly set classes in a react component
 * @param classNames classes to merge can be null or undefined
 */
export const mergeClasses = (
    ...classNames: Array<string | null | undefined>
): string => classNames.filter((className) => !!className).join(' ');
