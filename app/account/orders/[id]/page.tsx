import { PageShell } from "@/components/common/page-shell";
import { Card, CardBody } from "@/components/ui/card";

export default async function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <PageShell title="Order Details" subtitle={`Detailed view for order ${id.toUpperCase()}.`} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Account", href: "/account" }, { label: "Orders", href: "/account/orders" }, { label: id.toUpperCase() }]}>
            <Card>
                <CardBody className="space-y-4">
                    <p className="text-sm text-white/60">Shipping address, payment status, item summaries, and tracking information can be wired here when the backend is connected.</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Detail label="Status" value="Processing" />
                        <Detail label="Tracking" value="Pending" />
                        <Detail label="Payment" value="Paid" />
                        <Detail label="Total" value="$428" />
                    </div>
                </CardBody>
            </Card>
        </PageShell>
    );
}

function Detail({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">{label}</p>
            <p className="mt-2 text-lg font-semibold text-white">{value}</p>
        </div>
    );
}
