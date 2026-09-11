import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

export default [
    {
        ignores: ['public/**', '*.config.*', '.yarn/**']
    },
    ...nextCoreWebVitals
];
