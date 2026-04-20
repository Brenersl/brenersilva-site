import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  number?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, eyebrow, number, title, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`relative py-28 md:py-40 ${className}`}>
      <div className="container-wide">
        {(eyebrow || title || number) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 grid gap-6 md:mb-24 md:grid-cols-12"
          >
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                {number && <span className="text-mono text-xs text-muted-foreground">{number}</span>}
                {eyebrow && <span className="label-eyebrow">{eyebrow}</span>}
              </div>
            </div>
            {title && (
              <h2 className="text-display text-4xl text-foreground md:col-span-8 md:text-6xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
  >
    {children}
  </motion.div>
);
