"use client";

export const ComponentSkeleton = () => {
    return (
        <div role="status" className="animate-pulse p-2 z-0 h-full">
            <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-700" />
            <span className="sr-only">Loading...</span>
        </div>
    );
};