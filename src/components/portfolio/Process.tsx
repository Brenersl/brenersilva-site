import { Section, Reveal } from "./Section";

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "Entrevistas, análise de comportamento e mapeamento de jobs-to-be-done para separar sintoma de causa-raiz antes de qualquer pixel.",
  },
  {
    n: "02",
    title: "Framing",
    desc: "Traduzo ambiguidade em problem statements mensuráveis — com hipóteses, métricas-alvo (ativação, retenção, churn) e critérios de sucesso explícitos.",
  },
  {
    n: "03",
    title: "Execução",
    desc: "Soluções escaláveis ancoradas em design system, padrões de acessibilidade (WCAG AA) e diálogo direto com engenharia para proteger time-to-market.",
  },
  {
    n: "04",
    title: "Iteração",
    desc: "Validação com dados quantitativos e qualitativos — A/B tests, sessões moderadas e telemetria. Decido com evidência, não com opinião.",
  },
];

export const Process = () => {
  return (
    <Section id="processo" number="02" eyebrow="Como eu penso" title="Não desenho telas. Resolvo problemas com impacto mensurável.">
      <Reveal>
        <p className="mb-16 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Design é a interseção entre clareza estratégica, decisão fundamentada
          e execução disciplinada. Trabalho em quatro estágios — todos
          orientados por métricas de negócio:
        </p>
      </Reveal>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="group relative h-full bg-surface p-8 transition-colors duration-500 hover:bg-surface-elevated md:p-10">
              <div className="text-mono mb-12 text-xs text-muted-foreground">{s.n}</div>
              <div className="text-display text-3xl text-foreground md:text-4xl">{s.title}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
