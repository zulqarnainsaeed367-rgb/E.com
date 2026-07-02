import Link from "next/link";
import { Container } from "@/components/common/container";
import { categories, navigationLinks } from "@/data/catalog";
import { Mail, MapPin, Phone, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="mt-20 border-t border-white/10 bg-black/30 pb-10 pt-16">
            <Container>
                <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 text-white">
                            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 text-slate-950">N</span>
                            <span className="text-lg font-semibold tracking-[0.2em] uppercase">Nex</span>
                        </Link>
                        <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
                            Premium commerce UI built for scale, with polished product discovery, elegant checkout, and future backend integration.
                        </p>
                        <div className="mt-6 space-y-3 text-sm text-white/60">
                            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-300" /> 127 Mercer Street, New York, NY</p>
                            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber-300" /> +1 (212) 555-0187</p>
                            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-amber-300" /> support@nexstore.com</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Quick Links</h3>
                        <ul className="mt-4 space-y-3 text-sm text-white/60">
                            {navigationLinks.map((link) => (
                                <li key={link.href}><Link href={link.href} className="transition hover:text-white">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Categories</h3>
                        <ul className="mt-4 space-y-3 text-sm text-white/60">
                            {categories.map((category) => (
                                <li key={category.slug}><Link href={`/categories/${category.slug}`} className="transition hover:text-white">{category.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Customer Support</h3>
                        <div className="mt-4 space-y-3 text-sm text-white/60">
                            <p className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-300" /> Secure payments</p>
                            <p className="flex items-center gap-2"><Truck className="h-4 w-4 text-amber-300" /> Fast delivery</p>
                            <p className="flex items-center gap-2"><RotateCcw className="h-4 w-4 text-amber-300" /> 30-day returns</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Nex Commerce. All rights reserved.</p>
                    <p>Visa · Mastercard · Apple Pay · PayPal · Klarna</p>
                </div>
            </Container>
        </footer>
    );
}
