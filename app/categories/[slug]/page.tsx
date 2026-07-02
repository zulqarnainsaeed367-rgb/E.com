import { notFound } from "next/navigation";
import { categories, products } from "@/data/catalog";
import { getCategoryBySlug, getProductsByCategory } from "@/services/catalog-service";
import { PageShell } from "@/components/common/page-shell";
import { ProductGrid } from "@/components/products/product-grid";

export function generateStaticParams() {
    return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    const categoryProducts = getProductsByCategory(category.name);

    return (
        <PageShell
            title={category.name}
            subtitle={category.description}
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Categories", href: "/categories" }, { label: category.name }]}
        >
            <ProductGrid products={categoryProducts.length ? categoryProducts : products} />
        </PageShell>
    );
}
