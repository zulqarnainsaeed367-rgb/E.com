"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuantityStepperProps {
    value: number;
    onChange: (value: number) => void;
}

export function QuantityStepper({ value, onChange }: QuantityStepperProps) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
            <Button type="button" variant="ghost" size="sm" onClick={() => onChange(Math.max(1, value - 1))} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
            </Button>
            <span className="min-w-10 px-2 text-center text-sm font-medium text-white">{value}</span>
            <Button type="button" variant="ghost" size="sm" onClick={() => onChange(value + 1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
            </Button>
        </div>
    );
}
