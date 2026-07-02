import Link from "next/link";
import { categories } from "@/data/catalog";
import { PageShell } from "@/components/common/page-shell";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CategoriesPage() {
    return (
        <PageShell title="Categories" subtitle="Navigate premium collections grouped by style, use case, and seasonal focus." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Categories" }]}>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {categories.map((category) => (
                    <Card key={category.slug} className="overflow-hidden">
                        <div className="relative h-56 w-full overflow-hidden">
                            <Image src={category.image} alt={category.name} fill className="object-cover" />
                        </div>
                        <CardBody>
                            <h2 className="text-xl font-semibold text-white">{category.name}</h2>
                            <p className="mt-2 text-sm leading-6 text-white/60">{category.description}</p>
                            <Button asChild className="mt-5">
                                <Link href={`/categories/${category.slug}`}>Open category</Link>
                            </Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </PageShell>
    );
}
