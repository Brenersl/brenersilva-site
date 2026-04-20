import { motion } from "framer-motion";

const quotes = [
  "Não desenho interfaces. Desenho decisões de negócio.",
  "Métrica de impacto vence métrica de vaidade — sempre.",
  "Construo, valido e mato hipóteses com a mesma disciplina.",
];

export const Manifesto = () => {
  return (
    <section className="relative overflow-hidden border-y border-border py-32 md:py-44">
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="container-wide relative">
        <div className="space-y-16 md:space-y-24">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="text-display max-w-4xl text-3xl leading-[1.15] text-foreground md:text-5xl lg:text-6xl"
            >
              <span className="mr-3 text-accent">“</span>
              {q}
              <span className="ml-1 text-accent">”</span>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
