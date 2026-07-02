import { PageShell } from "@/components/common/page-shell";
import { AuthClient } from "@/components/auth/auth-client";

export default function LoginPage() {
    return <PageShell title="Login" subtitle="Sign in to track orders, manage saved items, and review account details."><AuthClient mode="login" /></PageShell>;
}
