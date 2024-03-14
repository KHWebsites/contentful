import { getHeroComponent } from '@/app/lib/contentful/getHeroComponent';
import { Container } from '../Container';
import { type TComponentProps } from './PageContent';
import { ApolloStateProcessor } from '../ApolloStateProcessor';
import { componentMap } from '@/app/mappings';
import { PrimaryButton } from '../button/PrimaryButton';
import { SecondaryButton } from '../button/SecondaryButton';

export const HeroComponent = async ({ id, isFirst }: TComponentProps) => {
    const { data, error, loading } = await getHeroComponent({ id });

    const RichTextComponent = componentMap.RichTextComponent;

    return (
        <ApolloStateProcessor loading={loading} error={error} isFirst={isFirst}>
            <Container
                isFirst={isFirst}
                maxWidth={true}
                backgroundImage={data.heroComponent.backgroundImage}
                className='h-[70vh]'
            >
                <header className='flex flex-col justify-center h-full'>
                    <section className='w-2/5'>
                        <h1>{data.heroComponent.headline}</h1>
                        <RichTextComponent richText={data.heroComponent.bodyText} />
                        <PrimaryButton href={data.heroComponent.ctAtargetPage.slug}>{data.heroComponent.ctaText}</PrimaryButton>
                        <SecondaryButton href={data.heroComponent.secondaryCtaTargetPage.slug}>{data.heroComponent.secondaryCtaText}</SecondaryButton>
                    </section>
                </header>
            </Container>
        </ApolloStateProcessor>
    );
};
