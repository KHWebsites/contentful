import { useContext, createContext, type ReactNode } from 'react';
import path from 'path';

const i18n = {
    defaultLocale: 'en-US',
    locales: ['en-US', 'nl'],
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
};

export interface ContentfulContextInterface {
    locale: string;
}

type ContentfulContextProviderProps = {
    children: ReactNode;
};

export const contentfulContextValue: ContentfulContextInterface = {
    locale: i18n.defaultLocale,
};

export const ContentfulContext = createContext<ContentfulContextInterface>(
    contentfulContextValue
);
export const useContentfulContext = () => useContext(ContentfulContext);

const ContentfulContentProvider = ({
    children,
}: ContentfulContextProviderProps) => {
    return (
        <ContentfulContext.Provider
            value={{
                locale: i18n.defaultLocale,
            }}
        >
            {children}
        </ContentfulContext.Provider>
    );
};

export { ContentfulContentProvider };
