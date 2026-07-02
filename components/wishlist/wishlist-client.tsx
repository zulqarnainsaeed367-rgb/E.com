"use client";

import Link from "next/link";
import { products } from "@/data/catalog";
import { useWishlistStore } from "@/store/use-wishlist-store";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";

export function WishlistClient() {
    const itemIds = useWishlistStore((state) => state.items);
    const toggleItem = useWishlistStore((state) => state.toggleItem);
    const selectedProducts = products.filter((product) => itemIds.includes(product.id));

    if (!selectedProducts.length) {
        return (
            <Card>
                <CardBody className="py-16 text-center">
                    <h2 className="text-2xl font-semibold text-white">Your wishlist is empty</h2>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/60">Save products you love so you can compare and return to them later.</p>
                    <Button asChild className="mt-6">
                        <Link href="/shop">Browse products</Link>
                    </Button>
                </CardBody>
            </Card>
        );
    }

    return (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {selectedProducts.map((product) => (
                <ProductCard key={product.id} product={product} wishlistActive onToggleWishlist={() => toggleItem(product.id)} />
            ))}
        </div>
    );
}
