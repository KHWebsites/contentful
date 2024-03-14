import Link from "next/link";
import { ReactNode } from "react";

type _TPrimaryButtonProps = {
    children: ReactNode;
    href: string;
};

export const PrimaryButton = ({ children, href }: _TPrimaryButtonProps) => {
    return (
        <Link
            href={href}
            className="block w-fit bg-orange-500 text-white text-lg px-8 py-4 font-bold rounded-sm transition-all whitespace-nowrap hover:bg-orange-600"
            >
            {children}
        </Link>
    );
};