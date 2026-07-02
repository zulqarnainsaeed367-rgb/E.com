"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type AuthMode = "login" | "register" | "forgot";

const schemas = {
    login: z.object({ email: z.string().email(), password: z.string().min(6) }),
    register: z.object({ name: z.string().min(2), email: z.string().email(), password: z.string().min(6), confirmPassword: z.string().min(6) }).refine((values) => values.password === values.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    }),
    forgot: z.object({ email: z.string().email() }),
};

type LoginValues = z.infer<typeof schemas.login>;
type RegisterValues = z.infer<typeof schemas.register>;
type ForgotValues = z.infer<typeof schemas.forgot>;

export function AuthClient({ mode }: { mode: AuthMode }) {
    const router = useRouter();
    const schema = schemas[mode];
    const defaultValues = useMemo(() => {
        if (mode === "register") {
            return { name: "", email: "", password: "", confirmPassword: "" };
        }
        return { email: "", password: "" };
    }, [mode]);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginValues | RegisterValues | ForgotValues>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const onSubmit = handleSubmit(() => {
        toast.success(mode === "login" ? "Welcome back" : mode === "register" ? "Account created" : "Reset link sent");
        router.push("/account");
    });

    return (
        <Card className="mx-auto w-full max-w-lg">
            <CardBody className="space-y-5 p-6 sm:p-8">
                {mode === "login" ? <Field label="Email" error={(errors as Partial<Record<"email", { message?: string }>>).email?.message}><Input type="email" {...register("email")} /></Field> : null}
                {mode === "login" ? <Field label="Password" error={(errors as Partial<Record<"password", { message?: string }>>).password?.message}><Input type="password" {...register("password")} /></Field> : null}

                {mode === "register" ? <Field label="Name" error={(errors as Partial<Record<"name", { message?: string }>>).name?.message}><Input {...register("name")} /></Field> : null}
                {mode !== "forgot" ? <Field label="Email" error={(errors as Partial<Record<"email", { message?: string }>>).email?.message}><Input type="email" {...register("email")} /></Field> : null}
                {mode !== "forgot" ? <Field label="Password" error={(errors as Partial<Record<"password", { message?: string }>>).password?.message}><Input type="password" {...register("password")} /></Field> : null}
                {mode === "register" ? <Field label="Confirm password" error={(errors as Partial<Record<"confirmPassword", { message?: string }>>).confirmPassword?.message}><Input type="password" {...register("confirmPassword")} /></Field> : null}
                {mode === "forgot" ? <Field label="Email" error={(errors as Partial<Record<"email", { message?: string }>>).email?.message}><Input type="email" {...register("email")} /></Field> : null}

                <Button type="submit" className="w-full" disabled={isSubmitting} onClick={onSubmit}>
                    {mode === "login" ? "Sign in" : mode === "register" ? "Create account" : "Send reset link"}
                </Button>

                <p className="text-center text-sm text-white/60">
                    {mode === "login" ? (
                        <>
                            New here? <Link href="/register" className="text-amber-300">Create an account</Link>
                        </>
                    ) : mode === "register" ? (
                        <>
                            Already have an account? <Link href="/login" className="text-amber-300">Sign in</Link>
                        </>
                    ) : (
                        <>
                            Remembered it? <Link href="/login" className="text-amber-300">Back to sign in</Link>
                        </>
                    )}
                </p>
            </CardBody>
        </Card>
    );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
    return (
        <div>
            <label className="mb-2 block text-sm text-white/70">{label}</label>
            {children}
            {error ? <p className="mt-1 text-xs text-rose-300">{error}</p> : null}
        </div>
    );
}
