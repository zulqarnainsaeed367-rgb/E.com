import { PageShell } from "@/components/common/page-shell";
import { CheckoutClient } from "@/components/checkout/checkout-client";

export default function CheckoutPage() {
    return (
        <PageShell title="Checkout" subtitle="Securely complete your order with shipping, billing, and payment details." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Checkout" }]}>
            <CheckoutClient />
        </PageShell>
    );
}
