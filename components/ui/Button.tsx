"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth = false, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-hover shadow-orange-200 shadow-md transform active:scale-95 transition-all duration-200",
      secondary: "bg-yellow-start text-white hover:bg-yellow-end shadow-yellow-100 shadow-md transform active:scale-95 transition-all duration-200",
      outline: "border-2 border-primary text-primary hover:bg-primary/5 transition-colors duration-200",
      ghost: "text-secondary-text hover:bg-neutral-bg transition-colors duration-200",
    };

    const sizes = {
      sm: "px-4 py-2 text-small",
      md: "px-5 py-2.5 text-body",
      lg: "px-8 py-4 text-body-lg font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          fullWidth ? "w-full" : "",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
