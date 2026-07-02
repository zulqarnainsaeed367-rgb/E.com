import { PageShell } from "@/components/common/page-shell";
import { Card, CardBody } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <PageShell title="About" subtitle="A premium commerce front-end built for long-term scale and backend integration." breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}>
            <Card>
                <CardBody className="space-y-4 text-sm leading-7 text-white/65">
                    <p>Nex Commerce is designed to feel like a modern premium storefront with clean product discovery, elegant detail views, and fast checkout experiences.</p>
                    <p>The architecture uses reusable components, typed product data, scalable route structure, and isolated stores so the backend can be integrated later with minimal friction.</p>
                </CardBody>
            </Card>
        </PageShell>
    );
}
