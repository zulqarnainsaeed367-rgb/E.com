import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={cn(
                "h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 shadow-inner shadow-black/10 outline-none transition focus:border-amber-400/50 focus:bg-white/8 focus:ring-2 focus:ring-amber-400/20",
                className,
            )}
            {...props}
        />
    );
}
