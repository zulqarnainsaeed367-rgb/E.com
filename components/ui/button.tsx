import { cloneElement, isValidElement, type ButtonHTMLAttributes, type ReactNode } from "react";
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
    children?: ReactNode;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-slate-950 shadow-[0_16px_40px_rgba(245,158,11,0.24)] hover:shadow-[0_20px_55px_rgba(245,158,11,0.34)]",
    secondary: "bg-white/10 text-white hover:bg-white/15 border border-white/10",
    ghost: "bg-transparent text-white hover:bg-white/8",
    outline: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
};

export function Button({ className, variant = "primary", size = "md", asChild, children, ...props }: ButtonProps) {
    const sharedClassName = cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
    );

    if (asChild && isValidElement(children)) {
        return cloneElement(children, {
            className: cn(sharedClassName, (children.props as { className?: string }).className),
            ...props,
        } as React.HTMLAttributes<HTMLElement>);
    }

    return (
        <button
            className={sharedClassName}
            {...props}
        />
    );
}
