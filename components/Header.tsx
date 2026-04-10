'use client';

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import logo from "../images/logo.svg";

export default function Header() {
  const pathname = usePathname();
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
            <p className="text-[2.5rem]/[1.625rem] font-barlow-condensed">Xander SC</p>
          </div>
        </Link>

        <nav className="flex gap-[1rem] text-[1.5rem]">
          <Link href="/" className={pathname === '/' ? "text-secondary" : "hover:text-secondary duration-100"}>Home</Link>
          <Link href="/contact" className={pathname === '/contact' ? "text-secondary" : "hover:text-secondary duration-100"}>Contact</Link>
          <Link href="/#projects" className={pathname.startsWith('/projects') ? "text-secondary" : "hover:text-secondary duration-100"}>Projects</Link>
          <Link href="/resume.pdf" className={pathname === '/resume' ? "text-secondary" : "hover:text-secondary duration-100"}>Resume</Link>
        </nav>
      </Container>
      <div className="bg-linear-to-r from-secondary to-tertiary h-[.25rem]"></div>
    </div>
  );
}