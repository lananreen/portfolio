import FolderTab from "./FolderTab";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-portfolio-projects px-6 pt-6 md:px-16"
    >
      <FolderTab
        label="Projects"
        arrow="↵"
        side="right"
        bgClassName="bg-portfolio-projects"
      />

    </section>
  );
}