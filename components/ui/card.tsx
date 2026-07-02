import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl", className)} {...props} />;
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("p-5 sm:p-6", className)} {...props} />;
}

export function GlassPanel({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn("rounded-[2rem] border border-white/10 bg-white/6 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl", className)}>{children}</div>;
}
