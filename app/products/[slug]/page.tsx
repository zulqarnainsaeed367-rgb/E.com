import { notFound } from "next/navigation";
import { products } from "@/data/catalog";
import { getProductBySlug, getRelatedProducts } from "@/services/catalog-service";
import { PageShell } from "@/components/common/page-shell";
import { ProductDetail } from "@/components/products/product-detail";
import { ProductGrid } from "@/components/products/product-grid";
import { SectionHeading } from "@/components/common/section-heading";

export function generateStaticParams() {
    return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = getRelatedProducts(product.slug);

    return (
        <PageShell
            title={product.name}
            subtitle={product.description}
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: product.name }]}
        >
            <ProductDetail product={product} />
            <section className="mt-14 space-y-6">
                <SectionHeading eyebrow="Related Products" title="You may also like" />
                <ProductGrid products={relatedProducts} />
            </section>
        </PageShell>
    );
}
