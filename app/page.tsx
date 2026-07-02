import { categories, products, socialImages, testimonials } from "@/data/catalog";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductHero } from "@/components/products/product-hero";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RatingStars } from "@/components/ui/rating-stars";
import { Stagger, StaggerItem } from "@/components/common/motion";
import { HeroSlider } from "@/components/home/hero-slider";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ProductHero />

      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading eyebrow="Shop By Category" title="Explore premium collections" description="Curated categories designed with a luxury storefront feel and fast browsing." />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <Card key={category.slug} className="group overflow-hidden transition hover:-translate-y-1 hover:border-amber-400/30">
                <Link href={`/categories/${category.slug}`} className="block overflow-hidden">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image src={category.image} alt={category.name} fill className="object-cover transition duration-500 group-hover:scale-110" />
                  </div>
                </Link>
                <CardBody>
                  <Badge className="bg-white/8 text-white">{category.productCount} products</Badge>
                  <h3 className="mt-3 text-xl font-semibold text-white">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{category.description}</p>
                  <Button asChild className="mt-5">
                    <Link href={`/categories/${category.slug}`}>View collection</Link>
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading eyebrow="Featured Products" title="Best selling essentials" description="Premium picks with strong reviews, balanced pricing, and polished design." />
          <ProductGrid products={products.slice(0, 4)} />
        </Container>
      </section>

      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading eyebrow="Reviews" title="What customers say" />
          <Stagger>
            <div className="grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <StaggerItem key={testimonial.name}>
                  <Card className="h-full p-6">
                    <RatingStars rating={5} />
                    <p className="mt-4 text-sm leading-6 text-white/70">{testimonial.quote}</p>
                    <div className="mt-6 border-t border-white/10 pt-4">
                      <p className="font-medium text-white">{testimonial.name}</p>
                      <p className="text-xs text-white/45">{testimonial.role}</p>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Container>
      </section>

      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid gap-6 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
            <div>
              <SectionHeading eyebrow="Instagram Gallery" title="A visual brand story" description="A premium feed-style gallery with lifestyle imagery and editorial composition." />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {socialImages.slice(0, 6).map((image) => (
                  <div key={image} className="relative aspect-square overflow-hidden rounded-3xl">
                    <Image src={image} alt="Social gallery image" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.16),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6">
              <div>
                <Badge className="bg-amber-400 text-slate-950">Newsletter</Badge>
                <h3 className="mt-4 text-3xl font-semibold text-white">Join for launches, drops, and private offers.</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">Subscribe for exclusive access to new product drops, restocks, and limited-time offers.</p>
              </div>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input className="h-12 flex-1 rounded-full border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/35" placeholder="Enter your email" />
                <Button type="submit" size="lg">Subscribe</Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
