import FolderTab from "./FolderTab";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative min-h-screen bg-portfolio-certifications px-6 pb-16 pt-6 md:px-16"
    >
      <FolderTab
        label="Certifications"
        arrow="↳"
        side="left"
        bgClassName="bg-portfolio-certifications"
      />

    </section>
  );
}