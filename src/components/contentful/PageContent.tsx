import { ComponentType, ReactElement } from 'react';
import { componentMap } from '@/app/mappings';

export type TComponentProps = {
    id: string;
    isFirst: boolean;
};

export type TPageContent = {
    __typename: string;
    sys: {
        id: string;
    };
};

type TPageContentProps = {
    pageContent: TPageContent[];
};

export const PageContent = ({
    pageContent,
}: TPageContentProps): ReactElement => {
    const componentMapping = pageContent.map((item, index) => {
        const Component: ComponentType<TComponentProps> =
            componentMap[item.__typename];
        return (
            <Component
                key={item.sys.id}
                id={item.sys.id}
                isFirst={index === 0}
            />
        );
    });

    return <>{componentMapping}</>;
};
