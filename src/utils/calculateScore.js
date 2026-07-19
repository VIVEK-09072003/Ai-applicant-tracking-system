// Maps a 0-100 ATS score to a human label + Tailwind classes,
// used by the Badge component to color-code resume cards.
export const getScoreMeta = (score) => {
  if (score >= 80) {
    return { label: "Excellent", className: "bg-green-100 text-green-700" };
  }

  if (score >= 50) {
    return { label: "Needs Work", className: "bg-yellow-100 text-yellow-700" };
  }

  return { label: "Poor Match", className: "bg-red-100 text-red-700" };
};
