import Link from "next/link";
import { PageShell } from "@/components/common/page-shell";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const orders = [
    { id: "ORD-10021", date: "2026-06-15", status: "Delivered", total: "$428" },
    { id: "ORD-10022", date: "2026-06-27", status: "In Transit", total: "$186" },
    { id: "ORD-10023", date: "2026-06-30", status: "Processing", total: "$79" },
];

export default function OrdersPage() {
    return (
        <PageShell title="My Orders" subtitle="Review recent purchases and track the current status of each shipment." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Account", href: "/account" }, { label: "Orders" }]}>
            <div className="space-y-4">
                {orders.map((order) => (
                    <Card key={order.id}>
                        <CardBody className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-lg font-semibold text-white">{order.id}</p>
                                <p className="text-sm text-white/60">{order.date} • {order.status}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="text-lg font-semibold text-white">{order.total}</p>
                                <Button asChild variant="outline"><Link href={`/account/orders/${order.id.toLowerCase()}`}>Details</Link></Button>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </PageShell>
    );
}
