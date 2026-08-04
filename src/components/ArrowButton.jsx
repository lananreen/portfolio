import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ArrowButton({ direction = "left", onClick, disabled }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous screenshot" : "Next screenshot"}
      className="shrink-0 rounded-full p-2 text-neutral-400 transition-all hover:scale-110 hover:text-neutral-600 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
    >
      <Icon size={40} strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
}
