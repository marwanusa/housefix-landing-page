import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white hover:bg-primary-700 active:bg-primary-600 disabled:bg-neutral-300",
        secondary: "bg-secondary-500 text-white hover:bg-secondary-700 active:bg-secondary-600 disabled:bg-neutral-300",
        
      },
      size: {
        sm: "w-[117px] h-[40px] text-sm",
        md: "w-[140px] h-[48px] text-base",
        lg: "w-[185px] h-[60px] text-lg",
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
        none: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      iconPosition: "none",
    },
  }
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  iconPosition?: "left" | "right" | "none"
}

export function Button({ className, variant, size, iconPosition, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size, iconPosition }), className)} {...props}>
      {children}
    </button>
  )
}
