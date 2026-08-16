/**
 * TEMPORARY — copywriting review layer.
 * Sections that can receive review comments, in document order.
 * `id` must match the id attribute rendered by the matching component.
 */
export type ReviewSection = { id: string; label: string };

export const REVIEW_SECTIONS: ReviewSection[] = [
  { id: "top", label: "Hero" },
  { id: "about", label: "Manifesto" },
  { id: "craft", label: "Craft" },
  { id: "capabilities", label: "Capabilities" },
  { id: "responsibility", label: "Responsibility" },
  { id: "studio", label: "Studio" },
  { id: "gallery", label: "Gallery" },
  { id: "why", label: "Why us" },
  { id: "contact", label: "Contact" },
];

export const SECTION_LABELS: Record<string, string> = Object.fromEntries(
  REVIEW_SECTIONS.map((s) => [s.id, s.label])
);
