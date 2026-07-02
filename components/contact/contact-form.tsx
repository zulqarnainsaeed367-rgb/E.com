"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardBody } from "@/components/ui/card";
import { toast } from "sonner";

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

    return (
        <Card>
            <CardBody className="space-y-4">
                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(async () => {
                        toast.success("Message sent");
                        reset();
                    })}
                >
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Name" error={errors.name?.message}><Input {...register("name")} /></Field>
                        <Field label="Email" error={errors.email?.message}><Input type="email" {...register("email")} /></Field>
                    </div>
                    <Field label="Message" error={errors.message?.message}><Textarea {...register("message")} /></Field>
                    <Button type="submit" disabled={isSubmitting}>Send message</Button>
                </form>
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
