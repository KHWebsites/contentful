'use client';

import { usePathname, useRouter } from 'next/navigation';

export const LanguageSwitcher = () => {
    const router = useRouter();
    const pathName = usePathname();

    const onLanguageSwitch: any = () => {
        const newPath = pathName.includes('nl')
            ? pathName.replace('nl', 'en-US')
            : pathName.replace('en-US', 'nl');
        router.push(newPath);
    };

    const activeLocale = pathName.includes('nl') ? 'nl' : 'en-US';
    return (
        <li>
            <button
                onClick={onLanguageSwitch}
                className={`${activeLocale === 'nl' ? 'opacity-100' : 'opacity-50'} font-semibold`}
            >
                NL
            </button>{' '}
            |{' '}
            <button
                onClick={onLanguageSwitch}
                className={`${
                    activeLocale === 'en-US' ? 'opacity-100' : 'opacity-50'
                } font-semibold`}
            >
                EN
            </button>
        </li>
    );
};
