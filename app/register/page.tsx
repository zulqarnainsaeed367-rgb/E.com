import { PageShell } from "@/components/common/page-shell";
import { AuthClient } from "@/components/auth/auth-client";

export default function RegisterPage() {
    return <PageShell title="Register" subtitle="Create your account to save preferences, orders, and wishlists."><AuthClient mode="register" /></PageShell>;
}
