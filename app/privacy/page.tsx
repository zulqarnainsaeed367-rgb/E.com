import { PageShell } from "@/components/common/page-shell";
import { Card, CardBody } from "@/components/ui/card";

export default function PrivacyPage() {
    return (
        <PageShell title="Privacy Policy" subtitle="How we handle customer information, analytics, and account data." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}>
            <Card><CardBody className="space-y-3 text-sm leading-7 text-white/65"><p>We collect only the information required to process orders, improve experience, and provide support.</p><p>Customer data is stored securely and used only for the purposes disclosed in our service policy.</p></CardBody></Card>
        </PageShell>
    );
}
