import dynamic from 'next/dynamic';

export type ComponentMap = {
    [key: string]: React.ComponentType<any>;
};

export const componentMap: ComponentMap = {
    HeroComponent: dynamic(() =>
        import('@/components/contentful/HeroComponent').then(
            (mod) => mod.HeroComponent
        )
    ),
    RichTextComponent: dynamic(() =>
        import('@/components/contentful/RichTextComponent').then(
            (mod) => mod.RichTextComponent
        )
    ),
    HyperlinkComponent: dynamic(() =>
        import('@/components/contentful/HyperlinkComponent').then(
            (mod) => mod.HyperlinkComponent
        )
    ),
} as const;
