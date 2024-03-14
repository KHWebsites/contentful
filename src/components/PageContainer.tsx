import { ReactElement } from 'react';

type _props = {
    children: ReactElement;
};

export const PageContainer = ({ children }: _props) => {
    return (
        <main className={`flex min-h-screen`}>
            <>{children}</>
        </main>
    );
};
