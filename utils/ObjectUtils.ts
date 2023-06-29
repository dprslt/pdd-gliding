export const hasNotUndefinedKeys = (obj: Record<string, unknown>): boolean => {
    return !hasOnlyUndefinedKeys(obj);
};

export const hasOnlyUndefinedKeys = (obj: Record<string, unknown>): boolean => {
    return Object.values(obj).filter((v) => v !== undefined).length === 0;
};
