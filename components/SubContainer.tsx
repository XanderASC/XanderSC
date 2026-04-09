import { cn } from "@/lib/utils";

interface SubContainerProps extends React.ComponentProps<'div'> {
  gradient?: boolean;
  side?: 'left' | 'right' | 'center';
}

export default function SubContainer({className, gradient, side, ...props}: SubContainerProps) {
  if (gradient) {
    return (
      <div className={cn('bg-background rounded-[1rem] text-foreground p-[4rem] xl:mx-[-4rem] space-y-4', side === 'left' && 'max-w-[50rem]', side === 'right' && 'max-w-[50rem] ml-auto xl:ml-auto', side === 'center' && 'max-w-[50rem] mx-auto xl:mx-auto', className)} {...props}>
        
      </div>
    );
  }
  return (
    <div className={cn('bg-linear-to-r from-secondary to-tertiary p-[.25rem] xl:mx-[-4rem] rounded-[1.125rem]', side === 'left' && 'max-w-[50rem]', side === 'right' && 'max-w-[50rem] ml-auto xl:ml-auto', side === 'center' && 'max-w-[50rem] mx-auto xl:mx-auto')}>
      <div className={cn('bg-background rounded-[1rem] text-foreground p-[3.75rem] space-y-4', className)} {...props}>
        
      </div>
    </div>
  );
}