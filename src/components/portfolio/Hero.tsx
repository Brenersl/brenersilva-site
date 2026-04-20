import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-32 md:pt-56 md:pb-44">
      {/* radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial" />
      {/* dot grid */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] opacity-[0.18] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]">
        <div className="dot-grid h-full w-full" />
      </div>

      <div className="container-wide relative">
        

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display max-w-5xl text-5xl leading-[1.02] tracking-tight text-foreground md:text-7xl lg:text-[5.5rem]"
        >
          Desenho produtos digitais que movem{" "}
          <em className="text-accent not-italic">métricas de negócio.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Product Designer operando na interseção entre UX, estratégia de produto e
          execução técnica — do discovery ao impacto mensurável.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="mt-3 max-w-2xl text-base text-muted-foreground/80"
        >
          SaaS, IA aplicada e produtos B2B/B2C — construindo do 0→1 com foco em
          retenção, conversão e time-to-market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projetos"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Ver projetos
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contato"
            className="group inline-flex h-12 items-center gap-2 rounded-full border border-border-strong bg-transparent px-6 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:bg-surface-elevated"
          >
            Entrar em contato
          </a>
        </motion.div>

        {/* Marquee meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.7 }}
          className="mt-24 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4"
        >
          {[
            { k: "Foco", v: "Product Design end-to-end" },
            { k: "Stack", v: "SaaS · IA · Design Systems" },
            { k: "Atuação", v: "0→1 e escala" },
            { k: "Disponível", v: "Remoto · Global" },
          ].map((m) => (
            <div key={m.k}>
              <div className="label-eyebrow">{m.k}</div>
              <div className="mt-2 text-sm text-foreground">{m.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
