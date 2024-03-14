import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS, Block, Inline, INLINES} from '@contentful/rich-text-types';
import { Typography } from '../Typography';
import { ReactNode, useMemo } from 'react';
import { componentMap } from '@/app/mappings';
import { headers } from 'next/headers';

type _TProps = {
    richText:  {
        json: Document;
        links?: {
            entries?: {
                block?: any;
                inline?: any;
            } | null;
            assets?: {
                block?: any;
                } | null;
        } | null;
    };
    
}

export const RichTextComponent = ({richText}: _TProps): JSX.Element => {
    const document: Document = richText.json;
    const HyperlinkComponent = componentMap.HyperlinkComponent;

    const options: Options = useMemo(() => {
        const headersList = headers();
        let opts: Options = {
            renderNode: {},
            renderText: text => text,
            renderMark: {},
        }

        // PARAGRAPH
        type TParagraphRendererProps = {
            variant: BLOCKS,
        }

        const paragraphRenderer = ({ variant }: TParagraphRendererProps) => (_node: Block | Inline, children: ReactNode) => {
            return <Typography variant={variant}>{children}</Typography>;
        }

        opts.renderNode![BLOCKS.PARAGRAPH] = paragraphRenderer({ variant: BLOCKS.PARAGRAPH });
        opts.renderNode![BLOCKS.HEADING_1] = paragraphRenderer({ variant: BLOCKS.HEADING_1 });
        opts.renderNode![BLOCKS.HEADING_2] = paragraphRenderer({ variant: BLOCKS.HEADING_2 });
        opts.renderNode![BLOCKS.HEADING_3] = paragraphRenderer({ variant: BLOCKS.HEADING_3 });
        opts.renderNode![BLOCKS.HEADING_4] = paragraphRenderer({ variant: BLOCKS.HEADING_4 });
        opts.renderNode![BLOCKS.HEADING_5] = paragraphRenderer({ variant: BLOCKS.HEADING_5 });
        opts.renderNode![BLOCKS.HEADING_6] = paragraphRenderer({ variant: BLOCKS.HEADING_6 });

        // HR
        const hrRenderer = () => {
            return <hr />;
        }

        opts.renderNode![BLOCKS.HR] = hrRenderer;

        // LIST ITEM
        const listItemRenderer = (_node: Block | Inline, children: ReactNode) => {
            return <li>{children}</li>;
        }

        opts.renderNode![BLOCKS.LIST_ITEM] = listItemRenderer;

        // TABLE
        const tableRenderer = (_node: Block | Inline, children: ReactNode) => {
            return (
                <div className='overflow-auto'>
                    <table>
                        {children}
                    </table>
                </div>
            );
        }

        opts.renderNode![BLOCKS.TABLE] = tableRenderer;

        // INLINE HYPERLINK
        const hyperlinkRenderer = (_node: Block | Inline, children: ReactNode) => {
            // Check if link is external link
            const isTargetBlank = (_node as Inline).data.uri && new URL((_node as Inline).data.uri).host !== headersList.get('host');

            return <a className='underline' target={isTargetBlank ? '_blank' : ''} href={
                (_node as Inline).data.uri
            }>{children}</a>;
        }

        opts.renderNode![INLINES.HYPERLINK] = hyperlinkRenderer;

        // ASSETS HYPERLINK
        const inlineHyperlinkRenderer = (_node: Block | Inline, children: ReactNode) => {
            return <HyperlinkComponent id={(_node as Inline).data.target.sys.id} nodeType={_node.nodeType}>{children}</HyperlinkComponent>;
        }

        opts.renderNode![INLINES.ASSET_HYPERLINK] = inlineHyperlinkRenderer;

        // ENTRY HYPERLINK
        opts.renderNode![INLINES.ENTRY_HYPERLINK] = inlineHyperlinkRenderer;

        // RESOURCE HYPERLINK
        opts.renderNode![INLINES.RESOURCE_HYPERLINK] = inlineHyperlinkRenderer;

        // RenderText
        opts.renderText = text => {
            return text.split('\n').reduce((children, textSegment, index) => {
              return [...children, index > 0 && <br key={textSegment} />, textSegment];
            }, [] as any[]);
          };

        return opts;
    }, [Typography]);
    
    return (
        <div className='flex flex-col'>
            {documentToReactComponents(document, options)}
        </div>
    )
}