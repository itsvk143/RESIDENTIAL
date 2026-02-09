import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover",
        primary: "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/30",
        secondary: "bg-white text-blue-900 hover:bg-slate-50 shadow-md",
        outline: "border-2 border-primary/20 text-primary hover:bg-primary/5",
        outlineLight: "border-2 border-white/80 text-white hover:bg-white/10 hover:border-white",
        accent: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/30",
        ghost: "hover:bg-slate-100 text-slate-700 hover:text-blue-600"
      },
      size: {
        default: "h-[44px] px-6",
        sm: "h-8 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        md: "h-11 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
