import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeSync } from "@/components/layout/theme-sync";

export function SiteShell({ children }: { children: ReactNode }) {
    return (
        <>
            <ThemeSync />
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <Toaster richColors position="top-right" />
        </>
    );
}
