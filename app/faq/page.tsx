import { PageShell } from "@/components/common/page-shell";
import { faqs } from "@/data/catalog";
import { Card, CardBody } from "@/components/ui/card";

export default function FaqPage() {
    return (
        <PageShell title="FAQ" subtitle="Answers to the most common ordering, shipping, and account questions." breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}>
            <div className="space-y-4">
                {faqs.map((item) => (
                    <Card key={item.question}>
                        <CardBody>
                            <h2 className="text-lg font-semibold text-white">{item.question}</h2>
                            <p className="mt-2 text-sm leading-7 text-white/65">{item.answer}</p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </PageShell>
    );
}
