import { PageShell } from "@/components/common/page-shell";
import { CartClient } from "@/components/cart/cart-client";

export default function CartPage() {
    return (
        <PageShell title="Shopping Cart" subtitle="Review items, adjust quantities, and continue to a premium checkout flow." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}>
            <CartClient />
        </PageShell>
    );
}
