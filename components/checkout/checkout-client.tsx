"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCartStore } from "@/store/use-cart-store";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { formatPrice } from "@/services/catalog-service";
import { toast } from "sonner";

const checkoutSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().min(7, "Phone number is required"),
    address: z.string().min(5, "Address is required"),
    city: z.string().min(2, "City is required"),
    country: z.string().min(2, "Country is required"),
    paymentMethod: z.enum(["card", "cod"]),
    notes: z.string().optional(),
});

type CheckoutValues = z.infer<typeof checkoutSchema>;

export function CheckoutClient() {
    const router = useRouter();
    const items = useCartStore((state) => state.items);
    const clearCart = useCartStore((state) => state.clearCart);
    const subtotal = useCartStore((state) => state.subtotal());
    const shipping = subtotal > 0 ? 12 : 0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const defaultValues = useMemo<Partial<CheckoutValues>>(
        () => ({ paymentMethod: "card", country: "United States" }),
        [],
    );

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CheckoutValues>({ resolver: zodResolver(checkoutSchema), defaultValues });

    async function onSubmit(values: CheckoutValues) {
        if (!items.length) {
            toast.error("Add items to your cart first");
            return;
        }

        clearCart();
        toast.success(`Order placed for ${values.firstName} ${values.lastName}`);
        router.push("/order-success");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
                <Card>
                    <CardBody className="grid gap-4 sm:grid-cols-2">
                        <div><label className="mb-2 block text-sm text-white/70">First name</label><Input {...register("firstName")} />{errors.firstName ? <p className="mt-1 text-xs text-rose-300">{errors.firstName.message}</p> : null}</div>
                        <div><label className="mb-2 block text-sm text-white/70">Last name</label><Input {...register("lastName")} />{errors.lastName ? <p className="mt-1 text-xs text-rose-300">{errors.lastName.message}</p> : null}</div>
                        <div><label className="mb-2 block text-sm text-white/70">Email</label><Input type="email" {...register("email")} />{errors.email ? <p className="mt-1 text-xs text-rose-300">{errors.email.message}</p> : null}</div>
                        <div><label className="mb-2 block text-sm text-white/70">Phone</label><Input {...register("phone")} />{errors.phone ? <p className="mt-1 text-xs text-rose-300">{errors.phone.message}</p> : null}</div>
                        <div className="sm:col-span-2"><label className="mb-2 block text-sm text-white/70">Address</label><Input {...register("address")} />{errors.address ? <p className="mt-1 text-xs text-rose-300">{errors.address.message}</p> : null}</div>
                        <div><label className="mb-2 block text-sm text-white/70">City</label><Input {...register("city")} />{errors.city ? <p className="mt-1 text-xs text-rose-300">{errors.city.message}</p> : null}</div>
                        <div><label className="mb-2 block text-sm text-white/70">Country</label><Input {...register("country")} />{errors.country ? <p className="mt-1 text-xs text-rose-300">{errors.country.message}</p> : null}</div>
                        <div className="sm:col-span-2"><label className="mb-2 block text-sm text-white/70">Order notes</label><Textarea {...register("notes")} /></div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Payment method</h2>
                        <Select {...register("paymentMethod")}>
                            <option value="card">Credit / Debit Card</option>
                            <option value="cod">Cash on Delivery</option>
                        </Select>
                        <p className="text-sm text-white/55">Card payments are routed securely. COD is available in supported regions.</p>
                    </CardBody>
                </Card>
            </div>

            <div className="space-y-4">
                <Card>
                    <CardBody className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Order summary</h2>
                        <div className="space-y-3 text-sm text-white/70">
                            {items.map((item) => (
                                <div key={item.product.id} className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="font-medium text-white">{item.product.name}</p>
                                        <p className="text-xs text-white/45">Qty {item.quantity}</p>
                                    </div>
                                    <span>{formatPrice(item.product.price * item.quantity)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-white/10 pt-4 space-y-2 text-sm text-white/70">
                            <div className="flex items-center justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                            <div className="flex items-center justify-between"><span>Shipping</span><span>{formatPrice(shipping)}</span></div>
                            <div className="flex items-center justify-between"><span>Tax</span><span>{formatPrice(tax)}</span></div>
                        </div>
                        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-lg font-semibold text-white">
                            <span>Total</span>
                            <span>{formatPrice(total)}</span>
                        </div>
                        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                            Place order
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </form>
    );
}
