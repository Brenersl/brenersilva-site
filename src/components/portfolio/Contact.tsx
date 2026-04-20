import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="relative overflow-hidden py-32 md:py-48">
      <div className="container-wide relative">
        <div className="flex flex-col items-start gap-12">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="label-eyebrow"
          >
            06 — Contato
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display max-w-5xl text-5xl leading-[1.02] text-foreground md:text-7xl lg:text-8xl"
          >
            Vamos construir produto{" "}
            <em className="text-accent not-italic">com impacto real.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            Aberto para conversas sobre roles full-time, contratos de longo
            prazo ou colaborações estratégicas em SaaS, IA aplicada e
            produtos 0→1.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="https://wa.me/5531992609659"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-primary px-7 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Entrar em contato
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#top"
              className="inline-flex h-14 items-center gap-2 rounded-full border border-border-strong bg-transparent px-6 text-base text-foreground transition-all hover:border-accent/50 hover:bg-surface-elevated"
            >
              Voltar ao topo
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-32 flex flex-col items-start justify-between gap-6 border-t border-border pt-10 text-sm text-muted-foreground md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="accent-dot animate-pulse-dot" />
            <span>Open to senior roles · 2025</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/brenerslima"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
