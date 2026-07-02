import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/common/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";

export default function OrderSuccessPage() {
    return (
        <PageShell title="Order Success" subtitle="Your order was placed successfully and a confirmation email is on the way." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Order Success" }]}>
            <Card>
                <CardBody className="py-16 text-center">
                    <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-400" />
                    <h2 className="mt-6 text-3xl font-semibold text-white">Thank you for your purchase</h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/60">We are preparing your items now. You can track the order from your account dashboard.</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Button asChild><Link href="/account/orders">View orders</Link></Button>
                        <Button asChild variant="outline"><Link href="/shop">Continue shopping</Link></Button>
                    </div>
                </CardBody>
            </Card>
        </PageShell>
    );
}
