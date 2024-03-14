'use client';

export const ComponentSkeleton = () => {
    return (
        <div role='status' className='z-0 h-full animate-pulse p-2'>
            <div className='flex h-full w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
            <span className='sr-only'>Loading...</span>
        </div>
    );
};
