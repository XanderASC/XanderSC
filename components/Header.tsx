'use client';

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import logo from "../images/logo.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLink = ({
  href, children, condition, setCollapsed
}: {
  href: string, children: React.ReactNode, condition: boolean, setCollapsed: Dispatch<SetStateAction<boolean>>
}) => {
  return <Link
    href={href}
    className={cn("px-[1rem] sm:px-0", condition ? "text-secondary" : "hover:text-secondary duration-100")}
    onClick={() => setCollapsed(true)}
  >
    {children}
  </Link>
}

export default function Header() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <div className="sticky top-0 bg-background z-1">
      <Container className="flex justify-between items-center">
        <Link href="/#">
          <div className="flex gap-[1rem]">
            <Image
              src={logo}
              alt="XSC"
              width={40}
              height={30}
              className="h-auto"
            />
            <p className="text-[2.5rem]/[1.625rem] font-barlow-condensed">Xander&nbsp;SC</p>
          </div>
        </Link>

        <nav>
          <button className="sm:hidden flex items-center cursor-pointer p-[.1875rem]" onClick={() => setCollapsed(!collapsed)}>
            {collapsed && <Menu />}
            {!collapsed && <X />}
          </button>
          <div className="sm:flex! sm:static! sm:w-auto! gap-[1rem] text-[1.5rem]"
            style={collapsed ?
              {display: 'none'} :
              {display: 'flex', position: 'absolute', width: '100vw', left: 0, top: 65, flexDirection: 'column', background: 'var(--background)', zIndex: -1, paddingTop: '1rem'}
            }
          >
            <NavLink href="/" condition={pathname === '/'} setCollapsed={setCollapsed}>Home</NavLink>
            <NavLink href="/contact" condition={pathname === '/contact'} setCollapsed={setCollapsed}>Contact</NavLink>
            <NavLink href="/#projects" condition={pathname.startsWith('projects')} setCollapsed={setCollapsed}>Projects</NavLink>
            <NavLink href="/resume.pdf" condition={pathname === '/resume'} setCollapsed={setCollapsed}>Resume</NavLink>
            <div className="sm:hidden bg-linear-to-r from-secondary to-tertiary h-[.25rem]"></div>
          </div>
        </nav>
      </Container>
      <div className="bg-linear-to-r from-secondary to-tertiary h-[.25rem]"></div>
    </div>
  );
}