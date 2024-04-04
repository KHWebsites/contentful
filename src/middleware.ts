import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['nl', 'en-US'],
    defaultLocale: 'en-US',
});

export const config = {
    matcher: ['/', '/(nl|en-US)/:path*'],
};
