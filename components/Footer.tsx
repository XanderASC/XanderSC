import Link from "next/link";
import Container from "./Container";
import { P } from "./defaults";

export default function Footer() {
  return (<>
    <div className="bg-linear-to-r from-secondary to-tertiary h-[.25rem]"></div>
    <Container className="space-y-4">
      <div className="flex text-[1.5rem] justify-between">
        <Link href="/" className="text-midtone hover:text-secondary duration-100">Home</Link>
        <Link href="/contact" className="text-midtone hover:text-secondary duration-100">Contact</Link>
        <Link href="/#projects" className="text-midtone hover:text-secondary duration-100">Projects</Link>
        <Link href="/resume.pdf" className="text-midtone hover:text-secondary duration-100">Resume</Link>
      </div>
      <P className="text-[1.5rem] text-center">&#9426; 2024 - 2026 www.xanderasc.github.io - All Rights Reserved.</P>
    </Container>
  </>);
}