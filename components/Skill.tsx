import { cn } from "@/lib/utils";
import { P } from "./defaults";

interface SkillProps extends React.ComponentProps<'p'> {
  small?: boolean;
}

export default function Skill({className, small, ...props}: SkillProps) {
  return <P
    className={cn('flex items-center sm:py-[.25em] md:py-[.5em] bg-foreground/75 font-bold text-background rounded-[.25em] [&>svg]:hidden md:[&>svg]:block md:[&>svg]:text-[#000]', 
      className,
      small ? 'text-[1rem]! px-[.375em] sm:px-[.5em] md:px-[.75em] gap-2' : '[&>svg]:scale-150 px-[.5em] sm:px-[.75em] md:px-[1em] gap-4'
    )}
    {...props}
  />
}