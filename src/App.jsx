import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/Projects";
import CertificationsSection from "./components/Certifications";

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      container.style.setProperty("--mouse-x", `${e.clientX}px`);
      container.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
      }}
    >
      <div
        className="pointer-events-none fixed inset-0 z-20"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 50%)",
        }}
      />
      <Navbar />
      <main className="relative z-10">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
      </main>
    </div>
  );
}
