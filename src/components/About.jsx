export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100vh-5rem)] flex-col bg-portfolio-about px-6 pb-10 pt-6 md:px-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 pt-8 md:flex-row md:items-start">
        <div className="aspect-[4/5] w-full max-w-sm shrink-0 rounded-2xl border-4 border-portfolio-accent bg-neutral-300 md:w-80" />

        <div className="flex-1">
          <h1 className="text-5xl font-bold text-neutral-900 md:text-6xl">About me</h1>

          <p className="mt-4 max-w-xl text-neutral-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className="mt-4 max-w-xl text-neutral-700">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="mt-6 flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-9 w-9 rounded-md bg-portfolio-yellow" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}