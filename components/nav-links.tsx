'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from 'clsx';

// map of links to display in navigation bar
const links =[
    { name: 'Home', href: '/'},
    { name: 'About', href: '/about'},
    { name: 'Documents', href: '/documents'}
];

// set hyperlink to each, change color of current page
export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-full justify-center items-center gap-2 text-md hover:bg-sky-100 hover:text-blue-600 md:w-40 md:px-3",
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            },
                        )}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}