"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ComponentProps, ReactNode } from 'react'

const Nav = ({ children }: {children: ReactNode}) => {
  return (
    <nav className="flex items-center justify-between border-b bg-background px-4 py-3 sm:px-6">{children}</nav>
  )
}

export default Nav;

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className"> & { className?: string }) {
  const { className, ...rest } = props;
  const pathname = usePathname();
  return (
    <Link
      {...rest}
      className={cn(
        "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        pathname === props.href && "bg-background text-foreground",
        className
      )}
    />
  );
}

export function NavLinks({ children }: {children: ReactNode}){
  return <div>{children}</div>
}