import { Inter } from 'next/font/google';
import { Nav } from '@/components/contentful/Nav';
import { ReactElement } from 'react';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

type _TRootLayoutProps = {
    children: ReactElement;
    params: { locale: string };
};

export default function RootLayout({ children, params }: _TRootLayoutProps) {
    return (
        <html lang={params.locale}>
            <body className={inter.className}>
                <Nav />
                {children}
            </body>
        </html>
    );
}
