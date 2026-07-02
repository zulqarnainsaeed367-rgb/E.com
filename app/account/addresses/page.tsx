import { PageShell } from "@/components/common/page-shell";
import { Card, CardBody } from "@/components/ui/card";

export default function AddressesPage() {
    return (
        <PageShell title="Addresses" subtitle="Store your delivery and billing addresses for faster checkout." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Account", href: "/account" }, { label: "Addresses" }]}>
            <div className="grid gap-5 md:grid-cols-2">
                <AddressCard title="Home Address" lines={["127 Mercer Street", "New York, NY 10012", "United States"]} />
                <AddressCard title="Office Address" lines={["84 Hudson Yard", "New York, NY 10001", "United States"]} />
            </div>
        </PageShell>
    );
}

function AddressCard({ title, lines }: { title: string; lines: string[] }) {
    return (
        <Card>
            <CardBody>
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <div className="mt-3 space-y-1 text-sm text-white/60">{lines.map((line) => <p key={line}>{line}</p>)}</div>
            </CardBody>
        </Card>
    );
}
