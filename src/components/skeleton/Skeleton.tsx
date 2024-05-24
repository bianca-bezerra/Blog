import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export const Skeleton = ({className, ...props} : ComponentProps<'div'>) => {
  return (
    <div className={twMerge(className, "bg-slate-800 animate-pulse rounded-md")} {...props}/>
  )
}
