import { useContext, createContext } from 'react';
import path from 'path';

const i18n = {
    defaultLocale: 'en-US',
    locales: ['en-US', 'de-DE'],
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
};

export interface ContentfulContextInterface {
    locale: string;
}

type ContentfulContextProviderProps = {
    children: React.ReactNode;
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
