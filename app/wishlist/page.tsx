import { PageShell } from "@/components/common/page-shell";
import { WishlistClient } from "@/components/wishlist/wishlist-client";

export default function WishlistPage() {
    return (
        <PageShell title="Wishlist" subtitle="Save your favorite products here and return to them when you are ready to buy." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Wishlist" }]}>
            <WishlistClient />
        </PageShell>
    );
}
