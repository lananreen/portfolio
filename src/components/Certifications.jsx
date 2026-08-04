import { useEffect, useRef, useState } from "react";
import FolderTab from "./FolderTab";
import ArrowButton from "./ArrowButton";
import { CERTIFICATIONS } from "../data/certifications";

const ANIM_MS = 250;

export default function CertificationsSection() {
  const [imageIndex, setImageIndex] = useState(0);
  const [phase, setPhase] = useState("idle");
  const [imageAnimClass, setImageAnimClass] = useState("");
  const [imageKey, setImageKey] = useState(0);
  const [lightbox, setLightbox] = useState("closed");
  const timeoutRef = useRef(null);

  const images = CERTIFICATIONS;

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
      dir === "next" ? "animate-fade-slide-in-right" : "animate-fade-slide-in-left"
    );
    setImageKey((k) => k + 1);

    timeoutRef.current = setTimeout(() => {
      setPhase("idle");
      setImageAnimClass("");
    }, ANIM_MS);
  };

  return (
    <section
      id="certifications"
      className="relative flex min-h-screen flex-col bg-portfolio-certifications px-6 pb-16 pt-6 md:px-16"
    >
      <FolderTab
        label="Certifications"
        arrow="↳"
        side="left"
        bgClassName="bg-portfolio-certifications"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-6 pb-16 pt-10">
        <h2 className="text-3xl font-bold text-neutral-800">
          {images[imageIndex].alt}
        </h2>

        <div className="flex w-full items-center gap-4">
          <ArrowButton direction="left" onClick={() => navigate("prev")} disabled={phase !== "idle"} />

          <div className="flex-1 overflow-hidden rounded-xl">
            <div
              key={imageKey}
              className={`flex items-center justify-center text-neutral-500 text-lg ${imageAnimClass}`}
            >
              {images[imageIndex].src ? (
                <img
                  src={images[imageIndex].src}
                  alt={images[imageIndex].alt}
                  className="max-w-full cursor-pointer rounded-xl"
                  onClick={openLightbox}
                />
              ) : (
                <div className="flex h-64 w-full items-center justify-center rounded-xl bg-neutral-200">
                  <span>{images[imageIndex].alt}</span>
                </div>
              )}
            </div>
          </div>

          <ArrowButton direction="right" onClick={() => navigate("next")} disabled={phase !== "idle"} />
        </div>

        <div className="flex justify-center gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full ${i === imageIndex ? "bg-neutral-600" : "bg-neutral-400"}`}
            />
          ))}
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
