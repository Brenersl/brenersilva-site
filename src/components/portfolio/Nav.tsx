import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#processo", label: "Processo" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-wide flex h-14 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-sm font-medium tracking-tight">
          <span className="accent-dot animate-pulse-dot" />
          <span>Product Designer</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="group inline-flex h-9 items-center gap-1.5 rounded-full border border-border-strong bg-surface-elevated px-4 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:bg-secondary"
        >
          Contato
          <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </header>
  );
};
