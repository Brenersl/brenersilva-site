import { Section } from "./Section";
import { CaseStudy, CaseStudyData } from "./CaseStudy";
import projectGhc from "@/assets/project-ghc.png";
import projectIdamir from "@/assets/project-idamir.png";
import projectAjs from "@/assets/project-ajs.png";
import projectTccSuite from "@/assets/project-tcc-suite.png";

const cases: CaseStudyData[] = [
  {
    index: "P/01",
    category: "SaaS · IA aplicada · HealthTech",
    title: "Plataforma com IA para psicólogos",
    featured: true,
    image: projectTccSuite,
    context:
      "Psicólogos clínicos processam horas semanais de informação não estruturada vinda de sessões — análise manual que compete diretamente com tempo faturável e gera inconsistência entre profissionais. Mercado com baixa adoção de tooling especializado e alta sensibilidade à privacidade.",
    problem:
      "Estimadas 4–6h/semana por profissional gastas em análise pós-sessão e documentação. Esforço cognitivo alto, padrão de qualidade variável e risco operacional na guarda de dados sensíveis — fricção direta sobre retenção do terapeuta na ferramenta.",
    objective:
      "Reduzir o tempo de análise pós-sessão em ≥60% e elevar a consistência da documentação clínica, sem sacrificar controle profissional sobre o output.",
    insights: [
      "Ferramentas existentes são genéricas (notion-likes) ou clínicas pesadas — nenhuma resolve o fluxo real do psicólogo",
      "Profissionais rejeitam complexidade: cada clique extra reduz adoção em sessões consecutivas",
      "Confiança no output da IA depende de transparência (mostrar a fonte) e controle (editar sem fricção)",
    ],
    solution:
      "Plataforma que converte transcrição de sessão em insights estruturados em blocos escaneáveis (temas, hipóteses, próximos passos) — com IA assistiva, não autônoma. O terapeuta mantém autoria; a máquina remove o trabalho repetitivo.",
    process: [
      "Discovery com 8+ profissionais para mapear o fluxo real (não o ideal)",
      "Definição de métricas-alvo: tempo de análise, taxa de edição do output da IA, retenção semanal",
      "Wireframes de baixa fidelidade testados em sessões moderadas antes do investimento em UI",
      "Iteração quinzenal com telemetria de uso e entrevistas qualitativas em paralelo",
    ],
    decisions: [
      "Redução agressiva de passos no fluxo crítico (de 7 para 3) para proteger ativação",
      "Sistema tipográfico hierárquico priorizando legibilidade clínica em sessões longas",
      "Blocos modulares e escaneáveis — reduzem carga cognitiva e habilitam reuso futuro como design system",
      "Padrões de acessibilidade WCAG AA aplicados desde o MVP (contraste, navegação por teclado, ARIA)",
    ],
    tradeoffs: [
      "Simplicidade do core vs flexibilidade avançada — escolhi cobrir o caso 80/20 primeiro para validar retenção",
      "IA assistiva vs autônoma — abrimos mão de 'wow factor' para ganhar confiança e reduzir churn por desconfiança",
      "Velocidade de MVP vs robustez — priorizei time-to-market para validar willingness-to-pay antes de hardening",
    ],
    results: [
      "MVP funcional validado com usuários reais pagando ou em waitlist qualificada",
      "Redução estimada de ~70% no tempo de análise pós-sessão entre early adopters",
    ],
  },
  {
    index: "P/02",
    category: "Freelance · B2B · Engenharia",
    title: "Website institucional para empresa de engenharia",
    url: "https://ghcengenharia.netlify.app/",
    image: projectGhc,
    context:
      "Empresa de engenharia com posicionamento técnico forte, mas presença digital incompatível com o ticket médio de seus contratos — gerando atrito na qualificação de leads inbound de maior valor.",
    problem:
      "Comunicação genérica, ausência de proposta de valor clara nos primeiros 5 segundos e baixa percepção de credibilidade — comprometendo a taxa de conversão de visitantes em contatos qualificados.",
    objective: "Elevar credibilidade percebida e conversão para contato qualificado em até 3x, mantendo o site escalável para futuras linhas de serviço.",
    insights: [
      "Decisões B2B de contratação técnica são pré-qualificadas em segundos — credibilidade visual precede conteúdo",
      "Clareza estrutural supera densidade visual em setores técnicos — sinaliza maturidade operacional",
      "Provas sociais (clientes, números, certificações) são o gatilho crítico de conversão B2B",
    ],
    solution:
      "Arquitetura de informação reescrita em torno de proposta de valor, prova social e CTA único — com sistema de componentes reutilizáveis para escalar novas linhas de serviço sem retrabalho.",
    decisions: [
      "Above-the-fold dedicado à proposta de valor + CTA primário (regra de 5 segundos)",
      "Hierarquia tipográfica em 3 níveis para guiar leitura escaneável",
      "Componentização modular — reduz time-to-market de novas páginas em ~60%",
      "Performance e acessibilidade tratadas como requisito de credibilidade (não opcional)",
    ],
    results: [
      "Posicionamento digital alinhado ao ticket médio dos contratos",
      "Estrutura escalável para novas verticais sem retrabalho de design",
    ],
  },
  {
    index: "P/03",
    category: "Freelance · Conversão · B2C",
    title: "Website para profissional autônomo com foco em conversão",
    url: "http://idamirduarte.com.br/",
    image: projectIdamir,
    context:
      "Profissional consolidado offline mas sem ativo digital — dependendo 100% de indicação para novos contatos e perdendo oportunidades inbound de maior margem.",
    problem:
      "Ausência de presença digital coerente com o serviço, resultando em zero captura de demanda inbound e dependência total de canais não-escaláveis.",
    solution:
      "Landing page de conversão única — narrativa direta, prova social posicionada em pontos de decisão e caminho único de ação para minimizar fricção.",
    decisions: [
      "Headline com proposta de valor inequívoca testada contra 3 alternativas",
      "Single-CTA strategy: removendo distrações para maximizar taxa de conversão",
      "Provas sociais (depoimentos + autoridade) ancoradas nos pontos de hesitação",
      "Mobile-first com performance otimizada — 70%+ do tráfego esperado é mobile",
    ],
    results: [
      "Canal inbound funcional substituindo dependência exclusiva de indicação",
      "Aumento mensurável de profissionalismo percebido no primeiro contato",
    ],
  },
  {
    index: "P/04",
    category: "Freelance · B2B · Construção",
    title: "Website para empresa de construção",
    url: "http://ajsconstrucoes.com.br/",
    image: projectAjs,
    context:
      "Empresa com ampla gama de serviços técnicos cuja comunicação digital fragmentada estava ativamente prejudicando a qualificação de leads — clientes potenciais não conseguiam mapear se a empresa atendia sua necessidade.",
    problem:
      "Information architecture incoerente com a oferta real, linguagem técnica inacessível ao cliente final e sem hierarquia de serviços — gerando alta taxa de bounce e leads desqualificados.",
    solution:
      "Reestruturação completa de IA, taxonomia de serviços orientada ao cliente (não à organização interna) e sistema visual hierárquico que guia o olhar até a ação.",
    decisions: [
      "Taxonomia de serviços reescrita do ponto de vista do cliente — não do org chart interno",
      "Hierarquia visual em 4 níveis para acomodar a amplitude de oferta sem perder clareza",
      "Linguagem traduzida do técnico para o acionável — reduz fricção de qualificação",
      "Padrões consistentes entre páginas reduzem custo cognitivo e elevam confiança",
    ],
    results: [
      "Compreensão de escopo significativamente mais clara para o cliente final",
      "Navegação reestruturada com caminhos diretos para cada vertical de serviço",
    ],
  },
];

export const Projects = () => {
  return (
    <Section
      id="projetos"
      number="04"
      eyebrow="Projetos"
      title="Case studies — contexto, hipótese, execução, impacto."
    >
      <div className="space-y-32 md:space-y-44">
        {cases.map((c) => (
          <CaseStudy key={c.index} data={c} />
        ))}
      </div>
    </Section>
  );
};
