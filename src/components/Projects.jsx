import { useEffect, useRef, useState } from "react";
import FolderTab from "./FolderTab";
import ArrowButton from "./ArrowButton";
import BrowserMockup from "./BrowserMockup";
import { PROJECTS } from "../data/projects";

const ANIM_MS = 250;

export default function ProjectsSection() {
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS[0].id);
  const [imageIndex, setImageIndex] = useState(0);
  const [phase, setPhase] = useState("idle");
  const [imageAnimClass, setImageAnimClass] = useState("");
  const [imageKey, setImageKey] = useState(0);
  const [lightbox, setLightbox] = useState("closed");
  const timeoutRef = useRef(null);

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId);
  const images = activeProject.images;

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (lightbox === "open") {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const openLightbox = () => {
    if (images[imageIndex].src) setLightbox("open");
  };

  const closeLightbox = () => {
    if (lightbox !== "open") return;
    setLightbox("closing");
    timeoutRef.current = setTimeout(() => setLightbox("closed"), 250);
  };

  const navigate = (dir) => {
    if (phase !== "idle") return;

    setPhase("animating");
    setImageIndex((i) =>
      dir === "next" ? (i + 1) % images.length : (i - 1 + images.length) % images.length
    );
    setImageAnimClass(
      dir === "next" ? "animate-fade-slide-in-left" : "animate-fade-slide-in-right"
    );
    setImageKey((k) => k + 1);

    timeoutRef.current = setTimeout(() => {
      setPhase("idle");
      setImageAnimClass("");
    }, ANIM_MS);
  };

  const selectProject = (id) => {
    if (id === activeProjectId || phase !== "idle") return;
    clearTimeout(timeoutRef.current);
    setActiveProjectId(id);
    setImageIndex(0);
    setPhase("idle");
    setImageAnimClass("");
    setImageKey((k) => k + 1);
  };

  return (
    <section
      id="projects"
      className="relative flex min-h-screen flex-col bg-portfolio-projects px-6 pt-6 md:px-16"
    >
      <FolderTab label="Projects" arrow="↵" side="right" bgClassName="bg-portfolio-projects" />

      <div className="mx-auto flex w-full max-w-[90rem] flex-1 items-center gap-10 pb-16 pt-10">
        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-4">
            <ArrowButton direction="left" onClick={() => navigate("prev")} disabled={phase !== "idle"} />

            <BrowserMockup url={activeProject.url}>
              <div
                key={imageKey}
                className={`flex h-full w-full items-center justify-center text-center text-neutral-500 text-lg ${imageAnimClass}`}
              >
                {images[imageIndex].src ? (
                  <img
                    src={images[imageIndex].src}
                    alt={images[imageIndex].alt}
                    className="h-full w-full cursor-pointer object-contain"
                    onClick={openLightbox}
                  />
                ) : (
                  <span>{images[imageIndex].alt}</span>
                )}
              </div>
            </BrowserMockup>

            <ArrowButton direction="right" onClick={() => navigate("next")} disabled={phase !== "idle"} />
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full ${i === imageIndex ? "bg-neutral-600" : "bg-neutral-400"}`}
              />
            ))}
          </div>
        </div>

        <div className="flex w-96 shrink-0 flex-col">
          <div className="flex gap-3">
            {PROJECTS.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => selectProject(project.id)}
                aria-pressed={project.id === activeProjectId}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 ${
                  project.id === activeProjectId
                    ? "bg-neutral-400 text-neutral-900"
                    : "bg-neutral-300 text-neutral-700 hover:brightness-95"
                }`}
              >
                {project.buttonLabel}
              </button>
            ))}
          </div>

          <a
            href={activeProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-2xl font-bold text-neutral-800 transition-all hover:scale-105 hover:text-portfolio-accent inline-block"
          >
            {activeProject.name}
          </a>

          <p className="mt-4 text-neutral-700">
            {activeProject.description}
          </p>
        </div>
      </div>

      {lightbox !== "closed" && (
        <div
          className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6 ${lightbox === "closing" ? "animate-fade-out" : "animate-fade-in"}`}
          onClick={closeLightbox}
        >
          <img
            src={images[imageIndex].src}
            alt={images[imageIndex].alt}
            className={`max-h-[90vh] max-w-full rounded-lg object-contain ${lightbox === "closing" ? "animate-zoom-out" : "animate-zoom-in"}`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
