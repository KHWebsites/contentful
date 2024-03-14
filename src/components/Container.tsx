'use client';

import Image from 'next/image';

type _TProps = {
    children: React.ReactNode;
    backgroundImage?: {
        url: string;
        title: string;
    };
    backgroundImageFull?: boolean;
    isFirst?: boolean;
    maxWidth?: boolean;
    ariaLabel?: string;
    className?: string;
};

export const Container = ({
    children,
    backgroundImage,
    backgroundImageFull = true,
    isFirst,
    maxWidth = true,
    ariaLabel,
    className,
}: _TProps) => {
    const hasFullBackgroundImageWithFullContent =
        maxWidth && backgroundImage && !backgroundImageFull;
    return (
        <section
            aria-label={ariaLabel}
            className={`relative w-full ${isFirst ? 'pt-20' : ''} ${className ? className : ''} ${hasFullBackgroundImageWithFullContent || (maxWidth && !backgroundImage) ? 'container mx-auto' : ''}`}
        >
            {backgroundImage && (
                <>
                    <Image
                        className='absolute left-0 top-0 z-0 h-full w-full object-cover object-center'
                        width={1920}
                        height={1080}
                        src={backgroundImage.url}
                        alt={backgroundImage.title}
                        priority={true}
                    />
                    <div
                        className={`relative z-10 h-full w-full ${!hasFullBackgroundImageWithFullContent ? 'container mx-auto' : ''}`}
                    >
                        {children}
                    </div>
                </>
            )}

            {!backgroundImage && children}
        </section>
    );
};
