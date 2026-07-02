"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Eye, GitCompareArrows, ShoppingBag } from "lucide-react";
import type { Product } from "@/types/catalog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { RatingStars } from "@/components/ui/rating-stars";
import { formatPrice } from "@/services/catalog-service";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/use-cart-store";
import { useWishlistStore } from "@/store/use-wishlist-store";
import { toast } from "sonner";

interface ProductCardProps {
    product: Product;
    wishlistActive?: boolean;
    onToggleWishlist?: () => void;
    className?: string;
}

export function ProductCard({ product, wishlistActive, onToggleWishlist, className }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);
    const toggleItem = useWishlistStore((state) => state.toggleItem);
    const hasItem = useWishlistStore((state) => state.hasItem);
    const isWishlisted = wishlistActive ?? hasItem(product.id);

    return (
        <Card className={cn("group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-amber-400/25", className)}>
            <Link href={`/products/${product.slug}`} className="relative block overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                    <Image src={product.images[0].src} alt={product.images[0].alt} fill className="object-cover transition duration-500 group-hover:scale-110" />
                </div>
                {product.compareAtPrice > product.price ? <Badge className="absolute left-4 top-4 bg-amber-400 text-slate-950">-{product.discount}%</Badge> : null}
                {product.isNew ? <Badge className="absolute right-4 top-4 bg-cyan-400/90 text-slate-950">New</Badge> : null}
            </Link>
            <CardBody className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-white/45">{product.brand}</p>
                        <Link href={`/products/${product.slug}`} className="mt-1 block text-lg font-semibold text-white transition hover:text-amber-300">
                            {product.name}
                        </Link>
                    </div>
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                            if (onToggleWishlist) {
                                onToggleWishlist();
                                return;
                            }

                            toggleItem(product.id);
                            toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
                        }}
                        aria-label="Toggle wishlist"
                    >
                        <Heart className={cn("h-4 w-4", isWishlisted ? "fill-rose-500 text-rose-500" : "text-white/75")} />
                    </Button>
                </div>

                <div className="flex items-center gap-2">
                    <RatingStars rating={product.rating} />
                    <span className="text-xs text-white/55">({product.reviewCount})</span>
                </div>

                <p className="line-clamp-2 text-sm leading-6 text-white/60">{product.description}</p>

                <div className="flex items-end justify-between gap-3">
                    <div>
                        <p className="text-lg font-semibold text-white">{formatPrice(product.price)}</p>
                        <p className="text-xs text-white/45 line-through">{formatPrice(product.compareAtPrice)}</p>
                    </div>
                    <p className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">In stock</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                    <Button variant="outline" size="sm" className="w-full"><Eye className="h-4 w-4" /> Quick View</Button>
                    <Button variant="outline" size="sm" className="w-full"><GitCompareArrows className="h-4 w-4" /> Compare</Button>
                    <Button
                        variant="primary"
                        size="sm"
                        className="col-span-2 w-full"
                        onClick={() => {
                            addItem(product);
                            toast.success(`${product.name} added to cart`);
                        }}
                    >
                        <ShoppingBag className="h-4 w-4" /> Add to Cart
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}
