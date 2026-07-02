import Link from "next/link";
import { PageShell } from "@/components/common/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";

export default function NotFound() {
    return (
        <PageShell title="Page not found" subtitle="The page you requested does not exist or may have moved.">
            <Card>
                <CardBody className="py-16 text-center">
                    <h2 className="text-3xl font-semibold text-white">404</h2>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/60">Use the links below to return to the store or continue browsing premium collections.</p>
                    <div className="mt-6 flex justify-center gap-3">
                        <Button asChild><Link href="/">Home</Link></Button>
                        <Button asChild variant="outline"><Link href="/shop">Shop</Link></Button>
                    </div>
                </CardBody>
            </Card>
        </PageShell>
    );
}
