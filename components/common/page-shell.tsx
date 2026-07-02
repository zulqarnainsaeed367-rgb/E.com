import type { ReactNode } from "react";
import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

interface Breadcrumb {
    label: string;
    href?: string;
}

interface PageShellProps {
    title: string;
    subtitle: string;
    breadcrumbs?: Breadcrumb[];
    children: ReactNode;
    className?: string;
}

export function PageShell({ title, subtitle, breadcrumbs, children, className }: PageShellProps) {
    return (
        <Container className={cn("py-10 sm:py-14", className)}>
            <div className="mb-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8">
                {breadcrumbs?.length ? (
                    <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-white/60">
                        {breadcrumbs.map((crumb, index) => (
                            <span key={crumb.label} className="flex items-center gap-2">
                                {crumb.href ? (
                                    <a href={crumb.href} className="transition hover:text-white">
                                        {crumb.label}
                                    </a>
                                ) : (
                                    <span className="text-white">{crumb.label}</span>
                                )}
                                {index < breadcrumbs.length - 1 ? <span className="text-white/30">/</span> : null}
                            </span>
                        ))}
                    </nav>
                ) : null}

                <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70 sm:text-base">{subtitle}</p>
            </div>
            {children}
        </Container>
    );
}
