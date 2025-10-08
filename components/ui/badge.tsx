import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-secondary px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        sky: "border-transparent bg-sky-700 text-primary-foreground shadow hover:bg-sky-700/90",
        amber:
          "border-transparent bg-amber-600 text-primary-foreground shadow hover:bg-amber-600/90",
        emerald:
          "border-transparent bg-emerald-600 text-primary-foreground shadow hover:bg-emerald-600/90",
        pink: "border-transparent bg-pink-500 text-primary-foreground shadow hover:bg-pink-500/90",
        pink2:
          "border-transparent bg-pink-700 text-primary-foreground shadow hover:bg-pink-700/90",
        blur: "border-transparent bg-gray-300/10 hover:bg-gray-300/20 backdrop-blur-md shadow-lg text-white",
        blur_ghost:
          "border-transparent hover:bg-gray-300/20 hover:text-white backdrop-blur-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
