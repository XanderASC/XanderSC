import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ComponentProps<'button'> {
  href?: string
}

export default function Button({className, children, href,  ...props}: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <button className={cn("text-background bg-linear-to-r from-secondary to-tertiary rounded-[1rem] px-[1.125rem] py-[.625rem] text-[1.5rem] font-bold duration-300 relative bottom-0 hover:bottom-1 active:duration-0 active:bottom-0 active:brightness-50", className)} {...props}>
          {children}<span className="ml-[.25em] text-[1.375em]/[0rem]">&gt;</span>
        </button>
      </Link>
    );  
  }
  return (
    <button className={cn("text-background bg-linear-to-r from-secondary to-tertiary rounded-[1rem] px-[1.125rem] py-[.625rem] text-[1.5rem] font-bold duration-300 relative bottom-0 hover:bottom-1 active:duration-0 active:bottom-0 active:brightness-50", className)} {...props}>
      {children}
    </button>
  );
}