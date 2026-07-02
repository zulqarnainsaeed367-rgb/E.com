import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import Image from "next/image";

export function ProductHero() {
    return (
        <section className="relative overflow-hidden py-8 sm:py-12">
            <Container>
                <div className="grid gap-6 rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.3)] lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
                    <div className="flex flex-col justify-center">
                        <Badge className="mb-4 w-fit border-amber-300/20 bg-amber-300/12 text-amber-200">Premium selection</Badge>
                        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">Elevated commerce built for modern shoppers.</h1>
                        <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                            Discover premium products, refined layouts, and a checkout flow designed to feel fast, secure, and distinctly high-end.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Button size="lg">Shop New Arrivals</Button>
                            <Button size="lg" variant="outline">Explore Categories</Button>
                        </div>
                    </div>
                    <div className="grid min-h-[320px] grid-cols-2 gap-3 sm:min-h-[420px]">
                        <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                            <Image className="object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80" alt="Hero product" fill />
                        </div>
                        <div className="grid gap-3">
                            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                                <Image className="object-cover" src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80" alt="Lifestyle product" fill />
                            </div>
                            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                                <Image className="object-cover" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80" alt="Interior product" fill />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
