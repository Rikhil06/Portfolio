"use client";

import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    href: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({
    children,
    href,
    onClick,
    ...props
}: TransitionLinkProps) {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (onClick) onClick(e);
        e.preventDefault();

        console.log('here');

        const body = document.querySelector('body');
        body?.classList.add('page-transition');
        await sleep(500);

        router.push(href);

        await sleep(500);
        body?.classList.remove('page-transition');
    }
  return (
    <Link onClick={handleTransition} href={href} {...props}>
        {children}
    </Link>
  )
}
