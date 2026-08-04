import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/Projects";
import CertificationsSection from "./components/Certifications";

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
      </main>
    </div>
  );
}