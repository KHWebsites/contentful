import { Inter } from 'next/font/google';
import { Nav } from '@/components/Nav';
import { ReactElement } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactElement }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Nav />
                {children}
            </body>
        </html>
    );
}
