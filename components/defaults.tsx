import { cn } from "@/lib/utils"

export const H1 = ({className, ...props}: React.ComponentProps<'h1'>) => {
  return <h1 className={cn("text-[5rem]/[6rem] lg:text-[8rem]/[10rem] font-bold font-barlow-condensed", className)} {...props}></h1>
}

export const H2 = ({className, ...props}: React.ComponentProps<'h1'>) => {
  return <h2 className={cn("text-[5rem] mb-[-.5rem] font-bold font-barlow-condensed", className)} {...props}></h2>
}

export const H3 = ({className, ...props}: React.ComponentProps<'h1'>) => {
  return <h3 className={cn("text-[3rem] mb-[-.25rem] font-barlow-condensed", className)} {...props}></h3>
}

export const P = ({className, ...props}: React.ComponentProps<'p'>) => {
  return <p className={cn("text-[1.5rem] text-foreground/80", className)} {...props}></p>
}

export const Label = ({className, ...props}: React.ComponentProps<'label'>) => {
  return <label className={cn("text-[1.5rem] text-foreground/80", className)} {...props}></label>
}

export const Input = ({className, ...props}: React.ComponentProps<'input'>) => {
  return <input className={cn("border-1 py-1 px-2 text-[1rem] block border-midtone/40 rounded-md bg-midtone/10", className)} {...props} />
}

export const Textarea = ({className, ...props}: React.ComponentProps<'textarea'>) => {
  return <textarea className={cn("border-1 py-1 px-2 text-[1rem] block border-midtone/40 rows-4 rounded-md bg-midtone/10", className)} {...props} />
}

export const UL = ({className, ...props}: React.ComponentProps<'ul'>) => {
  return <ul className={cn("text-foreground/80 text-[1.25rem] list-disc pl-6", className)} {...props} />
}

export const LI = ({className, ...props}: React.ComponentProps<'li'>) => {
  return <li className={cn(className)} {...props}/>
}