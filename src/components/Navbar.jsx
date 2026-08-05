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
    <header className="sticky top-0 z-50 backdrop-blur-xl flex items-center justify-between px-6 py-5 md:px-10">

      <nav className="flex flex-wrap justify-end gap-2 md:gap-3">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={handleClick(link.id)}
            className="rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:scale-110 hover:bg-white/20 hover:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
