import FolderTab from "./FolderTab";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-portfolio-skills px-6 pt-6 md:px-16"
    >
      <FolderTab
        label="Skills & Interests"
        arrow="↳"
        side="left"
        bgClassName="bg-portfolio-skills"
      />

    </section>
  );
}