import { PageShell } from "@/components/common/page-shell";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
    return (
        <PageShell title="Settings" subtitle="Control notifications, privacy, and account security settings." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Account", href: "/account" }, { label: "Settings" }]}>
            <Card>
                <CardBody className="space-y-4">
                    <Setting label="Email notifications" value="Enabled" />
                    <Setting label="Marketing emails" value="Opted in" />
                    <Setting label="Two-factor authentication" value="Off" />
                    <Button>Save settings</Button>
                </CardBody>
            </Card>
        </PageShell>
    );
}

function Setting({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/70">
            <span>{label}</span>
            <span className="text-white">{value}</span>
        </div>
    );
}
