"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  icon?: React.ReactNode;
  variant?: "glass" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "glass", asChild = false, icon, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center px-5 py-2 rounded-full font-medium transition-all duration-300",

          // glass effect
          variant === "glass" &&
            "backdrop-blur-lg bg-white/10 border border-white/20 text-white shadow-lg hover:bg-white/20 hover:shadow-xl",

          // outline style
          variant === "outline" &&
            "border border-primary/30 text-primary hover:border-primary hover:bg-primary/10",

          className,
        )}
        {...props}
      >
        {/* SINGLE CHILD WRAPPER */}
        <span className="flex items-center gap-2">
          {icon}
          {children}
        </span>
      </Comp>
    );
  },
);

Button.displayName = "Button";
