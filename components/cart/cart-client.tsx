"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Truck } from "lucide-react";
import { useCartStore } from "@/store/use-cart-store";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { formatPrice } from "@/services/catalog-service";

export function CartClient() {
    const items = useCartStore((state) => state.items);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeItem = useCartStore((state) => state.removeItem);
    const subtotal = useCartStore((state) => state.subtotal());
    const shipping = subtotal > 0 ? 12 : 0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    if (!items.length) {
        return (
            <Card>
                <CardBody className="py-16 text-center">
                    <h2 className="text-2xl font-semibold text-white">Your cart is empty</h2>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/60">Add premium picks to your cart and review them here before checkout.</p>
                    <Button asChild className="mt-6">
                        <Link href="/shop">Continue shopping</Link>
                    </Button>
                </CardBody>
            </Card>
        );
    }

    return (
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="space-y-4">
                {items.map((item) => (
                    <Card key={item.product.id} className="p-5">
                        <div className="flex flex-col gap-5 sm:flex-row">
                            <div className="relative h-36 w-36 overflow-hidden rounded-3xl">
                                <Image src={item.product.images[0].src} alt={item.product.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1 space-y-4">
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{item.product.name}</h3>
                                        <p className="text-sm text-white/55">{item.product.brand}</p>
                                        <p className="mt-2 text-sm text-white/50">Color: {item.selectedColor ?? "Default"} • Size: {item.selectedSize ?? "Default"}</p>
                                    </div>
                                    <Button variant="ghost" size="sm" onClick={() => removeItem(item.product.id)}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="flex flex-wrap items-center gap-5">
                                    <QuantityStepper value={item.quantity} onChange={(value) => updateQuantity(item.product.id, value)} />
                                    <p className="text-lg font-semibold text-white">{formatPrice(item.product.price * item.quantity)}</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="space-y-4">
                <Card>
                    <CardBody className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Order summary</h2>
                        <div className="space-y-3 text-sm text-white/70">
                            <div className="flex items-center justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                            <div className="flex items-center justify-between"><span>Shipping</span><span>{formatPrice(shipping)}</span></div>
                            <div className="flex items-center justify-between"><span>Tax</span><span>{formatPrice(tax)}</span></div>
                        </div>
                        <div className="border-t border-white/10 pt-4">
                            <div className="flex items-center justify-between text-lg font-semibold text-white"><span>Total</span><span>{formatPrice(total)}</span></div>
                        </div>
                        <Button asChild className="w-full">
                            <Link href="/checkout">Proceed to checkout</Link>
                        </Button>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody className="space-y-4">
                        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-white/70"><Truck className="h-4 w-4 text-amber-300" /> Shipping estimate</h3>
                        <Input placeholder="Enter postal code" />
                        <Button variant="outline" className="w-full">Estimate shipping</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
