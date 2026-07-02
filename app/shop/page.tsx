import { categories, brands } from "@/data/catalog";
import { filterProducts } from "@/services/catalog-service";
import { PageShell } from "@/components/common/page-shell";
import { ProductGrid } from "@/components/products/product-grid";
import { Card, CardBody } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type SearchParams = Record<string, string | string[] | undefined>;

function getValue(searchParams: SearchParams, key: string) {
    const value = searchParams[key];
    return Array.isArray(value) ? value[0] : value;
}

export default async function ShopPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
    const resolvedParams = await searchParams;
    const query = getValue(resolvedParams, "q") ?? "";
    const category = getValue(resolvedParams, "category") ?? "All";
    const brand = getValue(resolvedParams, "brand") ?? "All";
    const rating = Number(getValue(resolvedParams, "rating") ?? 0) || undefined;
    const minPrice = Number(getValue(resolvedParams, "minPrice") ?? 0) || undefined;
    const maxPrice = Number(getValue(resolvedParams, "maxPrice") ?? 1000) || undefined;
    const products = filterProducts({ query, category, brand, rating, minPrice, maxPrice });

    return (
        <PageShell
            title="Shop"
            subtitle="Browse the full catalog with premium products, refined filters, and a high-end shopping experience."
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
        >
            <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
                <Card className="h-fit">
                    <CardBody className="space-y-4">
                        <h2 className="text-lg font-semibold text-white">Filters</h2>
                        <form className="space-y-4" method="get">
                            <Input name="q" placeholder="Search products" defaultValue={query} />
                            <Select name="category" defaultValue={category}>
                                <option value="All">All categories</option>
                                {categories.map((item) => <option key={item.slug} value={item.name}>{item.name}</option>)}
                            </Select>
                            <Select name="brand" defaultValue={brand}>
                                <option value="All">All brands</option>
                                {brands.map((item) => <option key={item} value={item}>{item}</option>)}
                            </Select>
                            <div className="grid grid-cols-2 gap-3">
                                <Input name="minPrice" type="number" placeholder="Min" defaultValue={minPrice} />
                                <Input name="maxPrice" type="number" placeholder="Max" defaultValue={maxPrice} />
                            </div>
                            <Select name="rating" defaultValue={rating ? String(rating) : ""}>
                                <option value="">Any rating</option>
                                <option value="4">4 stars & up</option>
                                <option value="5">5 stars only</option>
                            </Select>
                            <Button type="submit" className="w-full">Apply filters</Button>
                        </form>
                    </CardBody>
                </Card>

                <div>
                    <ProductGrid products={products} />
                </div>
            </div>
        </PageShell>
    );
}
