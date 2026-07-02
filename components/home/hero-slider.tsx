"use client";

import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";

const slides = [
    {
        title: "Luxury essentials for every day",
        description: "Discover premium products curated with editorial visuals and smooth commerce flows.",
        cta: "/shop",
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=80",
    },
    {
        title: "New season drops now live",
        description: "Fresh arrivals across sneakers, apparel, home, and lifestyle accessories.",
        cta: "/categories",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=80",
    },
    {
        title: "Shop with confidence and style",
        description: "Fast browsing, premium product cards, and a checkout experience built to convert.",
        cta: "/checkout",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    },
];

export function HeroSlider() {
    return (
        <section className="pt-4 sm:pt-6">
            <Container>
                <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation
                        pagination={{ clickable: true }}
                        loop
                        className="hero-swiper"
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.title}>
                                <div className="grid min-h-[560px] lg:grid-cols-[1.05fr_0.95fr]">
                                    <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-14">
                                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/85">Premium commerce</p>
                                        <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">{slide.title}</h1>
                                        <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">{slide.description}</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Button asChild size="lg">
                                                <Link href={slide.cta}>Shop now</Link>
                                            </Button>
                                            <Button asChild size="lg" variant="outline">
                                                <Link href="/about">Learn more</Link>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="relative min-h-[320px] lg:min-h-full">
                                        <Image src={slide.image} alt={slide.title} fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/10 to-black/50" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    );
}
