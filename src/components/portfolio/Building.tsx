import { Section, Reveal } from "./Section";

const items = [
  {
    name: "SaaS clínico com IA para psicólogos",
    desc: "Plataforma que converte transcrições de sessão em insights estruturados — reduzindo o tempo de análise pós-consulta e padronizando a documentação clínica em escala.",
    status: "MVP em validação com usuários reais",
  },
  {
    name: "Sistema de automação para redes sociais",
    desc: "Orquestração de fluxos de conteúdo e distribuição multi-canal, focado em reduzir custo operacional de criadores e times de marketing.",
    status: "Em desenvolvimento ativo",
  },
];

export const Building = () => {
  return (
    <Section id="building" number="05" eyebrow="Currently building" title="Apostas em produção — não slides.">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.name} delay={i * 0.08}>
            <div className="group relative h-full bg-surface p-8 transition-colors hover:bg-surface-elevated md:p-12">
              <div className="flex items-center gap-2">
                <span className="accent-dot animate-pulse-dot" />
                <span className="text-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {it.status}
                </span>
              </div>
              <h3 className="text-display mt-8 text-3xl text-foreground md:text-4xl">{it.name}</h3>
              <p className="mt-4 max-w-md text-base text-muted-foreground md:text-lg">{it.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
