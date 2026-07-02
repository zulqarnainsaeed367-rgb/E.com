import { PageShell } from "@/components/common/page-shell";
import { AuthClient } from "@/components/auth/auth-client";

export default function ForgotPasswordPage() {
    return <PageShell title="Forgot Password" subtitle="Request a password reset email and regain access quickly."><AuthClient mode="forgot" /></PageShell>;
}
