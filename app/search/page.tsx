import { PageShell } from "@/components/common/page-shell";
import { ProductGrid } from "@/components/products/product-grid";
import { searchProducts } from "@/services/catalog-service";

type SearchParams = Record<string, string | string[] | undefined>;

function getQuery(searchParams: SearchParams) {
    const value = searchParams.q;
    return Array.isArray(value) ? value[0] : value ?? "";
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
    const resolvedParams = await searchParams;
    const query = getQuery(resolvedParams);
    const results = searchProducts(query);

    return (
        <PageShell title="Search Results" subtitle={`Results for ${query || "your query"}.`} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Search" }]}>
            <ProductGrid products={results} />
        </PageShell>
    );
}
