import { PageShell } from "@/components/common/page-shell";
import { Card, CardBody } from "@/components/ui/card";

export default function TermsPage() {
    return (
        <PageShell title="Terms & Conditions" subtitle="Commercial terms governing use of the storefront and related services." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}>
            <Card><CardBody className="space-y-3 text-sm leading-7 text-white/65"><p>Orders are subject to stock availability, payment verification, and shipping region support.</p><p>Returns, refunds, and exchanges are managed according to the stated policy at the time of purchase.</p></CardBody></Card>
        </PageShell>
    );
}
