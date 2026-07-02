import Link from "next/link";
import { PageShell } from "@/components/common/page-shell";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cards = [
    { label: "Orders", href: "/account/orders", value: "12" },
    { label: "Wishlist", href: "/wishlist", value: "8" },
    { label: "Addresses", href: "/account/addresses", value: "3" },
    { label: "Settings", href: "/account/settings", value: "Profile" },
];

export default function AccountPage() {
    return (
        <PageShell title="My Account" subtitle="Manage your purchases, addresses, profile details, and preferences." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Account" }]}>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {cards.map((card) => (
                    <Card key={card.label}>
                        <CardBody className="space-y-3">
                            <p className="text-sm text-white/55">{card.label}</p>
                            <p className="text-3xl font-semibold text-white">{card.value}</p>
                            <Button asChild variant="outline"><Link href={card.href}>Open</Link></Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </PageShell>
    );
}
