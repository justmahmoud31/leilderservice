"use client";
import { motion } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
};

const variants = {
  up: { y: 30, opacity: 0 },
  down: { y: -30, opacity: 0 },
  left: { x: -30, opacity: 0 },
  right: { x: 30, opacity: 0 },
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0.2,
}: FadeInProps) {
  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
