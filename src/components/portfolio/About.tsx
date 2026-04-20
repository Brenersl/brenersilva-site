import { Section, Reveal } from "./Section";

export const About = () => {
  return (
    <Section id="sobre" number="01" eyebrow="Sobre" title="Product thinking, design execution, business outcomes.">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7 md:col-start-5">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p className="text-foreground">
                Sou Product Designer e graduando em{" "}
                <span className="text-accent">Engenharia de Software</span>,
                focado em transformar ideias e requisitos de negócio em
                interfaces funcionais que escalam.
              </p>
              <p>
                Trabalho com foco total em{" "}
                <span className="text-foreground">entendimento do problema</span>,{" "}
                <span className="text-foreground">decisões justificadas</span> e{" "}
                <span className="text-foreground">execução completa</span> —
                cobrindo arquitetura de informação, prototipação de alta
                fidelidade e um handoff técnico preciso. Por estudar engenharia,
                garanto que o design respeite as{" "}
                <span className="text-foreground">restrições reais de código</span>{" "}
                e tempo de desenvolvimento.
              </p>
              <p>
                Minha experiência combina atuação em{" "}
                <span className="text-foreground">times de produto</span>,
                projetos B2B e a construção de produtos próprios — sempre
                buscando o equilíbrio entre uma estética moderna e a{" "}
                <span className="text-foreground">viabilidade técnica</span>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};
