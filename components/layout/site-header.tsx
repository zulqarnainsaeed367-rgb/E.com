"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    ArrowRight,
    ChevronDown,
    Heart,
    Menu,
    MoonStar,
    Search,
    ShoppingBag,
    Sparkles,
    SunMedium,
    User,
    X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { announcementBar, categories, navigationLinks } from "@/data/catalog";
import { useCartStore } from "@/store/use-cart-store";
import { useThemeStore } from "@/store/use-theme-store";
import { useWishlistStore } from "@/store/use-wishlist-store";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

export function SiteHeader() {
    const pathname = usePathname();
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    const theme = useThemeStore((state) => state.theme);
    const totalItems = useCartStore((state) => state.totalItems());
    const wishlistCount = useWishlistStore((state) => state.items.length);

    const activeLink = useMemo(() => pathname, [pathname]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMobileMenuOpen(false);
        setCategoriesOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
            <div className="border-b border-white/10 bg-gradient-to-r from-amber-500/20 via-white/5 to-cyan-400/10 text-xs text-white/75">
                <Container className="flex h-10 items-center justify-between gap-4">
                    <span className="truncate">{announcementBar}</span>
                    <span className="hidden items-center gap-2 sm:flex">
                        <Sparkles className="h-3.5 w-3.5 text-amber-300" /> Premium commerce experience
                    </span>
                </Container>
            </div>
            <Container className="flex h-20 items-center gap-3">
                <Link href="/" className="flex items-center gap-2 text-white" aria-label="Nex home">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20">
                        <Sparkles className="h-5 w-5" />
                    </span>
                    <span className="text-lg font-semibold tracking-[0.2em] uppercase">Nex</span>
                </Link>

                <form
                    className="hidden flex-1 items-center lg:flex"
                    onSubmit={(event) => {
                        event.preventDefault();
                        router.push(`/search?q=${encodeURIComponent(query)}`);
                    }}
                >
                    <div className="flex w-full max-w-2xl items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-inner shadow-black/10">
                        <Search className="h-4 w-4 text-white/45" />
                        <input
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search products, brands, categories"
                            className="w-full bg-transparent text-sm text-white placeholder:text-white/35 outline-none"
                        />
                    </div>
                </form>

                <nav className="hidden items-center gap-1 xl:flex">
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "rounded-full px-4 py-2 text-sm transition",
                                activeLink === link.href ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setCategoriesOpen((value) => !value)}
                            className={cn(
                                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition",
                                categoriesOpen ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
                            )}
                            aria-expanded={categoriesOpen}
                            aria-haspopup="menu"
                        >
                            Categories
                            <ChevronDown className={cn("h-4 w-4 transition", categoriesOpen && "rotate-180")} />
                        </button>

                        {categoriesOpen ? (
                            <div className="absolute left-1/2 top-full mt-3 w-[34rem] -translate-x-1/2 rounded-[2rem] border border-white/10 bg-slate-950/95 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {categories.map((category) => (
                                        <Link
                                            key={category.slug}
                                            href={`/categories/${category.slug}`}
                                            className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:border-amber-400/30 hover:bg-white/8"
                                            onClick={() => setCategoriesOpen(false)}
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <p className="text-sm font-semibold text-white">{category.name}</p>
                                                    <p className="mt-1 text-xs leading-5 text-white/55">{category.description}</p>
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-amber-300 transition group-hover:translate-x-1" />
                                            </div>
                                            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/45">{category.productCount} products</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="hidden sm:inline-flex" onClick={toggleTheme} aria-label="Toggle color theme">
                        {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
                    </Button>
                    <Link href="/wishlist" className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
                        <Heart className="h-4 w-4" />
                        <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-semibold text-slate-950">{wishlistCount}</span>
                    </Link>
                    <Link href="/cart" className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
                        <ShoppingBag className="h-4 w-4" />
                        <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-semibold text-slate-950">{totalItems}</span>
                    </Link>
                    <Link href="/account" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
                        <User className="h-4 w-4" />
                    </Link>
                    <Button
                        variant="outline"
                        size="sm"
                        className="xl:hidden"
                        onClick={() => setMobileMenuOpen((value) => !value)}
                        aria-label="Open navigation menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </Button>
                </div>
            </Container>

            {mobileMenuOpen ? (
                <div className="border-t border-white/10 bg-slate-950/95 xl:hidden">
                    <Container className="py-4">
                        <form
                            className="mb-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                            onSubmit={(event) => {
                                event.preventDefault();
                                router.push(`/search?q=${encodeURIComponent(query)}`);
                                setMobileMenuOpen(false);
                            }}
                        >
                            <Search className="h-4 w-4 text-white/45" />
                            <input
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Search products, brands, categories"
                                className="w-full bg-transparent text-sm text-white placeholder:text-white/35 outline-none"
                            />
                        </form>

                        <div className="grid gap-2">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition",
                                        activeLink === link.href ? "text-white" : "text-white/70 hover:bg-white/10 hover:text-white",
                                    )}
                                >
                                    <span>{link.label}</span>
                                    <ArrowRight className="h-4 w-4 text-amber-300" />
                                </Link>
                            ))}

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                                <button
                                    type="button"
                                    onClick={() => setCategoriesOpen((value) => !value)}
                                    className="flex w-full items-center justify-between rounded-xl px-1 py-2 text-sm font-medium text-white"
                                    aria-expanded={categoriesOpen}
                                >
                                    Categories
                                    <ChevronDown className={cn("h-4 w-4 transition", categoriesOpen && "rotate-180")} />
                                </button>
                                {categoriesOpen ? (
                                    <div className="mt-2 grid gap-2">
                                        {categories.map((category) => (
                                            <Link
                                                key={category.slug}
                                                href={`/categories/${category.slug}`}
                                                className="rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white/70 transition hover:bg-white/8 hover:text-white"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {category.name}
                                            </Link>
                                        ))}
                                    </div>
                                ) : null}
                            </div>

                            <div className="mt-2 grid grid-cols-2 gap-2">
                                <Button variant="outline" size="sm" onClick={toggleTheme} aria-label="Toggle color theme">
                                    {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
                                    Theme
                                </Button>
                                <Link href="/cart" className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white transition hover:bg-white/10">
                                    Cart ({totalItems})
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            ) : null}
        </header>
    );
}
