import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "yellow" | "success" | "warning" | "light";
  size?: "sm" | "md";
}

export const Badge = ({
  className,
  variant = "primary",
  size = "md",
  ...props
}: BadgeProps) => {
  const variants = {
    primary: "bg-primary/10 text-primary",
    yellow: "bg-yellow-start/10 text-yellow-end",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    light: "bg-neutral-bg text-secondary-text",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-small",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-semibold uppercase tracking-wider",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div className="relative w-full group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-light-text group-focus-within:text-primary transition-colors duration-200">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full rounded-lg border border-border-gray bg-white py-3 pl-4 pr-4 transition-all duration-200",
            "text-dark-text placeholder:text-light-text selection:bg-primary/20",
            "focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none",
            icon && "pl-11",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
