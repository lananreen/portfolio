import { useEffect, useState } from "react";

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function About() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 100);
    const t2 = setTimeout(() => setStep(2), 200);
    const t3 = setTimeout(() => setStep(3), 300);
    const t4 = setTimeout(() => setStep(4), 400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const SOCIALS = [
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/lana-noreen-tarlac-6a4636230", label: "LinkedIn" },
    { icon: GithubIcon, href: "https://github.com/lananreen", label: "GitHub" },
    { icon: null, href: null, label: null },
    { icon: null, href: null, label: null },
  ];

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col bg-portfolio-about px-6 pb-10 pt-6 md:px-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-10 md:flex-row md:items-center">
        <div className={`aspect-[4/5] w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-white/15 md:w-80 transition-transform duration-500 hover:scale-[1.03] ${step >= 1 ? "animate-zoom-in" : "opacity-0"}`}>
          <img
            src="/image.jpg"
            alt="Lana Tarlac"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className={`text-5xl font-bold text-white md:text-6xl ${step >= 1 ? "animate-fade-slide-in-left" : "opacity-0"}`}>
            About me
          </h1>

          <p className={`mt-4 max-w-xl text-white/60 ${step >= 2 ? "animate-fade-slide-in-left" : "opacity-0"}`}>
            My name is Lana Tarlac and I am currently a student at the University of the Cordilleras taking up 
            Bachelor of Science in Information Technology, specializing in Web-Technology. I am interested in 
            front-end development and creating user-centric prototypes to bridge the gap between functional and 
            intuitive web design. 

          </p>

          <p className={`mt-4 max-w-xl text-white/60 ${step >= 3 ? "animate-fade-slide-in-left" : "opacity-0"}`}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>

          <div className={`mt-6 flex gap-3 ${step >= 4 ? "animate-fade-slide-in-left" : "opacity-0"}`}>
            {SOCIALS.map((social, i) =>
              social.icon ? (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/10 backdrop-blur-md text-white/70 transition-all hover:scale-125 hover:text-white hover:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <social.icon size={18} strokeWidth={2} aria-hidden="true" />
                </a>
              ) : (
                <div key={i} className="h-9 w-9 rounded-md border border-white/10 bg-white/[0.04]" />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
