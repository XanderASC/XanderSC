import { cn } from "@/lib/utils";

interface ContainerProps extends React.ComponentProps<'div'> {
  gradient?: boolean;
  parentClass?: string;
}

export default function Container({className, parentClass, gradient, children, ...props}: ContainerProps) {
  return (
    <div className={cn(gradient && 'bg-linear-to-r from-secondary to-tertiary', parentClass)}>
      <div className={cn("max-w-[1200px] mx-auto px-[2rem] py-[1rem]", className, gradient && 'text-background')} {...props}>
        {children}
      </div>
    </div>
  );
}