import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "md" | "lg";
  variant?: "white" | "neutral" | "border";
}

export const Card = ({
  className,
  padding = "md",
  variant = "white",
  ...props
}: CardProps) => {
  const paddings = {
    none: "p-0",
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
  };

  const variants = {
    white: "bg-white shadow-sm hover:shadow-md",
    neutral: "bg-neutral-bg",
    border: "border border-border-gray bg-white",
  };

  return (
    <div
      className={cn(
        "rounded-xl transition-all duration-300",
        paddings[padding],
        variants[variant],
        className
      )}
      {...props}
    />
  );
};
