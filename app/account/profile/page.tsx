import { PageShell } from "@/components/common/page-shell";
import { Card, CardBody } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
    return (
        <PageShell title="Profile" subtitle="Update your personal information and communication preferences." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Account", href: "/account" }, { label: "Profile" }]}>
            <Card>
                <CardBody className="grid gap-4 sm:grid-cols-2">
                    <Input defaultValue="Jordan" placeholder="First name" />
                    <Input defaultValue="Parker" placeholder="Last name" />
                    <Input className="sm:col-span-2" defaultValue="jordan@example.com" placeholder="Email" />
                    <Input className="sm:col-span-2" defaultValue="+1 (212) 555-0187" placeholder="Phone" />
                    <Button className="sm:col-span-2">Save changes</Button>
                </CardBody>
            </Card>
        </PageShell>
    );
}
