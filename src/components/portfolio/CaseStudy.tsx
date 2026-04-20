import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Section";

export interface CaseStudyData {
  index: string;
  category: string;
  title: string;
  context: string;
  problem: string;
  objective?: string;
  insights?: string[];
  solution: string;
  process?: string[];
  decisions?: string[];
  tradeoffs?: string[];
  results: string[];
  url?: string;
  featured?: boolean;
  image?: string;
}

export const CaseStudy = ({ data }: { data: CaseStudyData }) => {
  const isFeatured = data.featured;

  return (
    <article className="border-t border-border pt-16 md:pt-24">
      {/* Header */}
      <Reveal>
        <div className="grid gap-6 md:grid-cols-12">
          <div className="flex items-center gap-4 md:col-span-4">
            <span className="text-mono text-xs text-muted-foreground">{data.index}</span>
            <span className="label-eyebrow">{data.category}</span>
          </div>
          <div className="md:col-span-8">
            <h3 className={`text-display text-foreground ${isFeatured ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"} leading-[1.05]`}>
              {data.title}
            </h3>
            {data.url && (
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <span className="link-underline">{data.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </Reveal>

      {/* Visual block */}
      <Reveal delay={0.1}>
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface noise">
          <div className="relative aspect-[16/9] w-full">
            {data.image ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated via-surface to-background" />
                <img
                  src={data.image}
                  alt={`${data.title} — preview`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated via-surface to-background" />
                <div className="dot-grid absolute inset-0 opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="text-mono mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Case study · {data.category}
                    </div>
                    <div className="text-display text-3xl text-foreground/90 md:text-5xl">{data.title}</div>
                  </div>
                </div>
              </>
            )}
            {/* corner accent */}
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-border-strong bg-background/60 px-3 py-1 backdrop-blur">
              <span className="accent-dot animate-pulse-dot" />
              <span className="text-mono text-xs text-foreground">{data.index}</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Body — structured columns */}
      <div className="mt-16 grid gap-12 md:grid-cols-12">
        {/* Left rail — context/problem/objective */}
        <div className="space-y-10 md:col-span-5">
          <Field label="Contexto" body={data.context} />
          <Field label="Problema" body={data.problem} highlight />
          {data.objective && <Field label="Objetivo" body={data.objective} />}
        </div>

        {/* Right rail — insights/solution/decisions */}
        <div className="space-y-10 md:col-span-7 md:pl-8 md:border-l md:border-border">
          {data.insights && (
            <ListField label="Insights principais" items={data.insights} />
          )}
          <Field label="Solução" body={data.solution} />
          {data.process && <ListField label="Processo" items={data.process} />}
          {data.decisions && <ListField label="Decisões de design" items={data.decisions} />}
          {data.tradeoffs && <ListField label="Trade-offs" items={data.tradeoffs} />}
        </div>
      </div>

      {/* Results */}
      <Reveal delay={0.1}>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {data.results.map((r, i) => (
            <div key={i} className="bg-surface p-8 md:p-10">
              <div className="label-eyebrow mb-4">Resultado · 0{i + 1}</div>
              <p className="text-display text-2xl text-foreground md:text-3xl">{r}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </article>
  );
};

const Field = ({ label, body, highlight = false }: { label: string; body: string; highlight?: boolean }) => (
  <Reveal>
    <div>
      <div className="label-eyebrow mb-3">{label}</div>
      <p className={`text-base leading-relaxed md:text-lg ${highlight ? "text-foreground" : "text-muted-foreground"}`}>
        {body}
      </p>
    </div>
  </Reveal>
);

const ListField = ({ label, items }: { label: string; items: string[] }) => (
  <Reveal>
    <div>
      <div className="label-eyebrow mb-4">{label}</div>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-3 text-base text-muted-foreground md:text-lg"
          >
            <span className="text-mono mt-1.5 text-xs text-accent">→</span>
            <span>{it}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </Reveal>
);
