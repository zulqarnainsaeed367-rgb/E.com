"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function FadeIn({ children }: { children: ReactNode }) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            {children}
        </motion.div>
    );
}

export function Stagger({ children }: { children: ReactNode }) {
    return (
        <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}>
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children }: { children: ReactNode }) {
    return (
        <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.4 }}>
            {children}
        </motion.div>
    );
}
