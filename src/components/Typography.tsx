import { BLOCKS } from '@contentful/rich-text-types';

export const Typography = ({
    children,
    variant,
}: {
    children: any;
    variant: BLOCKS;
}): JSX.Element => {
    switch (variant) {
        case BLOCKS.PARAGRAPH:
            return <p>{children}</p>;
        case BLOCKS.HEADING_1:
            return <h1>{children}</h1>;
        case BLOCKS.HEADING_2:
            return <h2>{children}</h2>;
        case BLOCKS.HEADING_3:
            return <h3>{children}</h3>;
        case BLOCKS.HEADING_4:
            return <h4>{children}</h4>;
        case BLOCKS.HEADING_5:
            return <h5>{children}</h5>;
        case BLOCKS.HEADING_6:
            return <h6>{children}</h6>;
        default:
            return <p>{children}</p>;
    }
};
