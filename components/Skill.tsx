import { cn } from "@/lib/utils";
import { P } from "./defaults";

interface SkillProps extends React.ComponentProps<'p'> {
  small?: boolean;
}

export default function Skill({className, small, ...props}: SkillProps) {
  return <P
    className={cn('flex items-center py-[.5em] bg-foreground/75 font-bold text-background rounded-[.25em] [&>svg]:text-[#000]', 
      className,
      small ? 'text-[1rem] px-[.75rem] gap-2' : '[&>svg]:scale-150 px-[1em] gap-4'
    )}
    {...props}
  />
}