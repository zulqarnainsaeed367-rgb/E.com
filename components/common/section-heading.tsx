import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    description?: string;
    className?: string;
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
    return (
        <div className={cn("mb-6 max-w-3xl", className)}>
            {eyebrow ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">{eyebrow}</p> : null}
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
            {description ? <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">{description}</p> : null}
        </div>
    );
}
