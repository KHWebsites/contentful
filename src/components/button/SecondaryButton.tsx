import Link from "next/link";
import { ReactNode } from "react";

type _TSecondaryButtonProps = {
    children: ReactNode;
    href: string;
};

export const SecondaryButton = ({ children, href }: _TSecondaryButtonProps) => {
    return (
        <Link 
            href={href}
            className="block w-fit bg-transparent text text-white font-bold"
        >
        {children}
        </Link>
    );
}