const NAV_LINKS = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills & Interests" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
];

export default function Navbar() {
  const handleClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const elTop = el.getBoundingClientRect().top;
    if (elTop > -10 && elTop < 80) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
      <span className="text-lg font-semibold text-neutral-900">My name</span>

      <nav className="flex flex-wrap justify-end gap-2 md:gap-3">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={handleClick(link.id)}
            className="rounded-full bg-portfolio-accent px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}