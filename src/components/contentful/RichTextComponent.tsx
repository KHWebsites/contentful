import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS, Block, Inline, INLINES, MARKS} from '@contentful/rich-text-types';
import { Typography } from '../Typography';
import { ReactNode, useMemo } from 'react';


type _TProps = {
    richText: Document
}

export const RichTextComponent = ({richText}: _TProps): JSX.Element => {
    const document: Document = richText;

    const options: Options = useMemo(() => {
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
            console.log(_node)
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
            return <a className='underline' href={
                (_node as Inline).data.uri
            }>{children}</a>;
        }

        opts.renderNode![INLINES.HYPERLINK] = hyperlinkRenderer;

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