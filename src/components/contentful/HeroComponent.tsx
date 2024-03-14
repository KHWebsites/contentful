import { getHeroComponent } from '@/app/lib/contentful/getHeroComponent';
import { Container } from '../Container';
import { type TComponentProps } from './PageContent';
import { ApolloStateProcessor } from '../ApolloStateProcessor';
import { RichTextComponent } from './RichTextComponent';

export const HeroComponent = async ({ id, isFirst }: TComponentProps) => {
    const { data, error, loading } = await getHeroComponent({ id });

    return (
        <ApolloStateProcessor loading={loading} error={error} isFirst={isFirst}>
            <Container isFirst={isFirst} maxWidth={true} backgroundImage={data.heroComponent.backgroundImage} className='h-[70vh]'>
                <header className='h-full flex items-center'>
                    <h1>{data.heroComponent.headline}</h1>
                    <RichTextComponent richText={data.heroComponent.bodyText.json} />
                </header>
            </Container>
        </ApolloStateProcessor>
    );
}

