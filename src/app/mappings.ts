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
} as const;
