import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['nl', 'en-US'];

// @ts-ignore
export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as any)) notFound();

    return {
        locales: (await import(`../public/locales/${locale}.json`)).default,
    };
});
