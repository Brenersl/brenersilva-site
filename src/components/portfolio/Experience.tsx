import { Section, Reveal } from "./Section";

const blocks = [
  {
    tag: "Hooney+",
    role: "Product Designer · Atual",
    title: "Design estratégico em squad multidisciplinar de produto",
    desc: "Atuação integrada com Produto e Engenharia em decisões de roadmap, evolução de UX e construção de padrões sistêmicos — traduzindo hipóteses de negócio em fluxos navegáveis e mensuráveis.",
    items: [
      "Co-condução de discovery e priorização ao lado de PM e Tech Lead",
      "Estruturei fluxos, wireframes e protótipos de alta fidelidade para features críticas",
      "Desenvolvi componentes reutilizáveis e padrões visuais consistentes entre telas",
      "Decisões de UX baseadas em dados qualitativos, telemetria e feedback de stakeholders",
    ],
  },
  {
    tag: "Sagitta Digital",
    role: "UX/UI Designer · Projetos",
    title: "Interface, sistema e handoff técnico próximo do código",
    desc: "Responsável por traduzir requisitos de produto em interfaces escaláveis e documentadas, garantindo fidelidade entre design e implementação — reduzindo retrabalho de desenvolvimento e ciclos de revisão.",
    items: [
      "Estruturei biblioteca visual e tokens reutilizáveis para acelerar entregas",
      "Liderei a documentação de componentes, estados e regras de interação",
      "Handoff técnico próximo aos devs (background em Engenharia de Software)",
      "Garantia de pixel-fidelity e consistência sistêmica em produção",
    ],
  },
  {
    tag: "Colina Tech",
    role: "Freelance · B2B & Engenharia",
    title: "Projetos B2B com impacto direto em credibilidade e pipeline",
    desc: "Soluções digitais para clientes em setores técnicos (engenharia, construção, serviços), traduzindo ofertas complexas em narrativas claras que movem percepção de valor, conversão e geração de leads qualificados.",
    items: [
      "Alinhamento estratégico com stakeholders e tomadores de decisão",
      "Information architecture e fluxos navegáveis focados em clareza",
      "Estruturas de conversão otimizadas para qualificação de leads B2B",
      "Componentização e mini design systems para escalabilidade do site",
    ],
  },
  {
    tag: "Vorux Studio",
    role: "Founder · Produtos próprios",
    title: "Produtos 0→1 com estratégia, design system e validação",
    desc: "Construção de produtos próprios cobrindo discovery, validação de hipóteses, design system escalável e go-to-market — assumindo o risco completo de produto, não apenas o de execução de interface.",
    items: [
      "Plataforma SaaS com IA para psicólogos (clínica + automação de insights)",
      "Sistema de automação para distribuição de conteúdo em escala",
      "Estratégia de produto, priorização 80/20 e validação contínua de hipóteses",
      "Design system próprio com tokens, componentes e padrões de acessibilidade",
    ],
  },
];

export const Experience = () => {
  return (
    <Section id="experiencia" number="03" eyebrow="Experiência" title="Empresa, cliente e produto próprio — três contextos, mesma régua.">
      <div className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
        {blocks.map((b, i) => (
          <Reveal key={b.tag} delay={i * 0.06}>
            <div className="group grid gap-8 bg-surface p-8 transition-colors duration-500 hover:bg-surface-elevated md:grid-cols-12 md:p-12">
              <div className="md:col-span-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background px-3 py-1">
                  <span className="accent-dot" />
                  <span className="text-mono text-xs uppercase tracking-wider text-foreground">{b.tag}</span>
                </div>
                <p className="text-mono mt-3 text-xs text-muted-foreground">{b.role}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-display text-3xl text-foreground md:text-4xl">{b.title}</h3>
                <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{b.desc}</p>
                <ul className="mt-8 grid gap-3 md:grid-cols-2">
                  {b.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-border-strong" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
