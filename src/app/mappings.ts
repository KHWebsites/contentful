import { ComponentType } from 'react';
import dynamic from 'next/dynamic';

type TComponentMap = {
    [key: string]: ComponentType<any>;
};

export const ctfComponentMap: TComponentMap = {
} as const;

export const componentMap: TComponentMap = {
    HeroComponent: dynamic(() =>
        import('@/components/contentful/HeroComponent').then(
            (mod) => mod.HeroComponent
        )
    ),
    NewsletterComponent: dynamic(() =>
        import('@/components/contentful/NewsletterComponent').then(
            (mod) => mod.NewsletterComponent
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
