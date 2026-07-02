import { PageShell } from "@/components/common/page-shell";
import { ContactForm } from "@/components/contact/contact-form";
import { Card, CardBody } from "@/components/ui/card";

export default function ContactPage() {
    return (
        <PageShell title="Contact" subtitle="Reach our team for support, wholesale questions, and partnership inquiries." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <Card>
                    <CardBody className="space-y-4 text-sm text-white/65">
                        <p>support@nexstore.com</p>
                        <p>+1 (212) 555-0187</p>
                        <p>127 Mercer Street, New York, NY</p>
                        <p>Monday to Friday, 9:00 AM to 6:00 PM</p>
                    </CardBody>
                </Card>
                <ContactForm />
            </div>
        </PageShell>
    );
}
