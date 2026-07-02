"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Share2, ShoppingBag } from "lucide-react";
import type { Product } from "@/types/catalog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { RatingStars } from "@/components/ui/rating-stars";
import { formatPrice } from "@/services/catalog-service";
import { useCartStore } from "@/store/use-cart-store";
import { useWishlistStore } from "@/store/use-wishlist-store";
import { toast } from "sonner";

export function ProductDetail({ product }: { product: Product }) {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [quantity, setQuantity] = useState(1);
    const addItem = useCartStore((state) => state.addItem);
    const toggleItem = useWishlistStore((state) => state.toggleItem);
    const hasItem = useWishlistStore((state) => state.hasItem);
    const isWishlisted = hasItem(product.id);

    return (
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="overflow-hidden p-4">
                <div className="grid gap-4 sm:grid-cols-[1fr_140px]">
                    <div className="relative aspect-square w-full overflow-hidden rounded-[2rem]">
                        <Image src={product.images[0].src} alt={product.images[0].alt} fill className="object-cover" />
                    </div>
                    <div className="grid gap-4 sm:grid-rows-2">
                        {product.images.slice(1, 3).map((image) => (
                            <div key={image.src} className="relative aspect-square w-full overflow-hidden rounded-[1.75rem]">
                                <Image src={image.src} alt={image.alt} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
            <div className="space-y-6">
                <div>
                    <Badge>{product.brand}</Badge>
                    <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">{product.name}</h1>
                    <div className="mt-3 flex items-center gap-3">
                        <RatingStars rating={product.rating} />
                        <span className="text-sm text-white/60">{product.reviewCount} reviews</span>
                    </div>
                    <div className="mt-4 flex items-end gap-4">
                        <p className="text-3xl font-semibold text-white">{formatPrice(product.price)}</p>
                        <p className="text-sm text-white/45 line-through">{formatPrice(product.compareAtPrice)}</p>
                        <Badge className="bg-emerald-400/15 text-emerald-300">{product.stock} in stock</Badge>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">{product.description}</p>
                </div>

                <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
                    <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-white/45">Color</p>
                        <div className="mt-3 flex flex-wrap gap-3">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    type="button"
                                    onClick={() => setSelectedColor(color)}
                                    className={`rounded-full border px-4 py-2 text-sm transition ${selectedColor === color ? "border-amber-400 bg-amber-400 text-slate-950" : "border-white/10 bg-white/5 text-white/75 hover:bg-white/10"}`}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-white/45">Size</p>
                        <div className="mt-3 flex flex-wrap gap-3">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    onClick={() => setSelectedSize(size)}
                                    className={`rounded-full border px-4 py-2 text-sm transition ${selectedSize === size ? "border-amber-400 bg-amber-400 text-slate-950" : "border-white/10 bg-white/5 text-white/75 hover:bg-white/10"}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <QuantityStepper value={quantity} onChange={setQuantity} />
                        <Button
                            size="lg"
                            onClick={() => {
                                addItem(product, { quantity, selectedColor, selectedSize });
                                toast.success("Added to cart");
                            }}
                        >
                            <ShoppingBag className="h-4 w-4" /> Add to cart
                        </Button>
                        <Button variant={isWishlisted ? "secondary" : "outline"} size="lg" onClick={() => toggleItem(product.id)}>
                            <Heart className={`h-4 w-4 ${isWishlisted ? "fill-rose-500 text-rose-500" : ""}`} /> Wishlist
                        </Button>
                        <Button variant="ghost" size="lg"><Share2 className="h-4 w-4" /> Share</Button>
                    </div>
                </div>

                <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-2">
                    {product.features.map((feature) => (
                        <div key={feature} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/75">{feature}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}
