/**
 * Journal (blog) data layer — MOCKED.
 *
 * This is intentionally shaped like a CMS payload so it can be swapped for a
 * WordPress REST/GraphQL source later with minimal churn: keep the JournalPost
 * shape and the getAllPosts / getPost / getPosts / getRelated helpers, and
 * replace the `posts` array with a `fetch()` inside those functions.
 */

export type Category = "Know-how" | "Materials" | "Responsibility" | "News";

export const categories: Category[] = [
  "Know-how",
  "Materials",
  "Responsibility",
  "News",
];

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string; // ISO (YYYY-MM-DD)
  cover: string; // /images/...
  author: string;
  readingTime: string; // e.g. "4 min"
  pullQuote?: string;
  body: string[]; // paragraphs
}

const posts: JournalPost[] = [
  {
    slug: "a-partnership-woven-in-trust",
    title: "A partnership woven in trust",
    excerpt:
      "What it means to be a development partner rather than a supplier — and why the best collections begin long before the first stitch.",
    category: "Know-how",
    date: "2026-06-18",
    cover: "/images/studio-yarn.jpg",
    author: "Madalena Beça",
    readingTime: "7 min",
    pullQuote:
      "A good partner is not the one who says yes to everything, but the one who knows how to say when.",
    body: [
      "Every collection we make begins with a conversation. Not about quantities or deadlines, but about intention — the feeling a brand wants to hold in the hand, the way a garment should fall, the quiet detail that makes it unmistakably theirs. Before there is a yarn, before there is a program, there is an idea we are trying to understand together. We have learned that the collections we are proudest of are almost always the ones that started with the longest first conversation.",
      "For more than two decades we have worked alongside brands as a development partner. That distinction matters more than it might seem. A supplier fills an order; a partner helps shape it. A supplier waits for a specification; a partner asks the questions that make the specification better. We sit with your team from the first sketch, translate an idea into a knitting program, and refine it — sample after sample — until the piece feels less like something we made and more like something that was always meant to exist.",
      "Being a partner also means being honest, sometimes uncomfortably so. If a yarn will not behave the way a drawing hopes, we say so early, while there is still time to choose another path. If a construction will cost three times what it needs to for no visible gain, we say that too. The easiest thing in the world is to nod and proceed; the useful thing is to tell you what we would do if the collection were our own.",
      "Trust, in our experience, is not declared. It is built in the small moments: an honest note about a tension that is fighting the fabric, a suggestion that quietly saves a season, a problem solved before it ever reaches your inbox. None of these moments are dramatic. Added together, over months and then years, they become something more valuable than any single garment — a way of working that both teams can rely on without having to think about it.",
      "There is a practical side to this, of course. When two teams have worked together long enough, development gets faster. We already know how a brand likes its sleeves to sit, which finishes it tends to reject, how much ease feels right in a body. That accumulated knowledge is a kind of shared memory, and it means each new season starts further along than the last.",
      "But the part we care about most is harder to measure. It is the confidence a designer feels handing over an idea, knowing it will be treated with the same care they gave it. It is the calm of a production manager who has stopped double-checking because the checks are already being done. It is the sense, on both sides, of building something rather than simply trading.",
      "The result is not just a garment. It is a relationship that compounds — each collection a little sharper, a little more assured, because the two teams have learned to think as one. That is what we mean when we say partnership: not a contract, but a habit of care, renewed one piece at a time.",
    ],
  },
  {
    slug: "from-sketch-to-shelf-together",
    title: "From sketch to shelf, together",
    excerpt:
      "A look inside the development studio, where drawings become programs and programs become the pieces you'll wear.",
    category: "Know-how",
    date: "2026-04-02",
    cover: "/images/cap-design.jpg",
    author: "Studio Team",
    readingTime: "6 min",
    body: [
      "The studio is the creative heart of the factory — the room where a flat drawing learns to breathe. A sketch arrives full of intention but with no weight, no drape, no temperature. Our work is to give it those things: to decide how the fabric will move, how it will feel against the skin, how it will hold its shape after the tenth wash and not just the first.",
      "It begins with translation. A designer's line becomes a knitting program, written for our STOLL machines and tested against reality. Tension is adjusted and re-adjusted; a stitch that looked perfect on screen is loosened by a fraction because the hand of the yarn asked for it. This back-and-forth is slow on purpose. Each small correction is a decision, and each decision is what separates a sample that is merely correct from one that is right.",
      "Everything is documented as we go. Every sample is organised, labelled and stored so that nothing is lost between iterations. When a brand asks why version four drapes better than version two, we can show them — not from memory, but from a record. That discipline is invisible in the finished garment, and it is precisely what makes the finished garment repeatable at scale.",
      "This is where partnership stops being an idea and becomes something you can hold. Your team can follow a piece as it evolves, weigh in early, and see the trade-offs before they become expensive. A change of yarn, a shift in gauge, a different rib at the hem — each has consequences, and it is far better to understand them at the sampling table than on the production floor.",
      "We think of the studio as a shared workshop rather than a service counter. The best developments happen when a designer sits with us, feels the swatches, and reacts in the room. Something is always learned in that exchange that could never survive an email thread: a preference that had never been named, a direction that only becomes obvious once the wrong version is in your hands.",
      "By the time a garment reaches the shelf, it carries the fingerprints of both studios — the brand's vision and our making, so closely bound that it is hard to say where one ends and the other begins. That, to us, is the whole point. A good knit should not look designed by one team and manufactured by another. It should look inevitable.",
    ],
  },
  {
    slug: "co-creating-a-responsible-supply-chain",
    title: "Co-creating a responsible supply chain",
    excerpt:
      "Certification is a floor, not a ceiling. How we work with partners to make responsibility a shared, everyday practice.",
    category: "Responsibility",
    date: "2026-01-27",
    cover: "/images/certs-bg.jpg",
    author: "Madalena Beça",
    readingTime: "7 min",
    body: [
      "GOTS, RWS, GRS and OCS — the acronyms are reassuring, and they should be. Each represents an audit, a standard, a promise checked by someone other than us. But a certificate tells you that a supply chain has been examined; it does not, on its own, tell you how a company thinks when no one is auditing. That second part is the work that never really ends.",
      "We treat responsibility as a shared practice with our partners rather than a box to tick once a year. It means being transparent about where a yarn comes from, honest about what a standard does and does not cover, and willing to choose the slower or more expensive option when it is genuinely the better one. None of this is heroic. It is simply the accumulation of small, correct decisions made consistently.",
      "Transparency is the foundation. When a brand asks a hard question about a fibre, a finish, or a subcontractor, the answer should already exist and be easy to share. A chain you cannot explain is a chain you cannot trust, and the effort of keeping ours legible — documented, traceable, ready to be shown — is part of what certification is really protecting.",
      "The certificates themselves are audited by Ecocert Greenlife, under licence 270713. That external scrutiny matters: it keeps us honest in ways that good intentions alone cannot. But we try to remember that the audit is a snapshot, and the real chain is a living thing that has to hold its standard on an ordinary Tuesday, not just on the day the auditor visits.",
      "This is where partners become essential. Responsibility is easiest to protect when a brand and its maker want the same things and are willing to plan for them. A slightly earlier order, a willingness to accept a natural variation, a decision to reuse rather than discard — these choices are lighter when they are shared, and they compound into something meaningful over a season.",
      "We are not interested in responsibility as a marketing layer applied at the end. We would rather it be structural: the yarn selected, the water saved, the offcut given a second life, the working conditions upheld because that is simply how the place is run. Certification gives a brand the confidence to make claims it can stand behind; the daily practice is what makes those claims true.",
      "Done well, responsibility becomes invisible. It stops being a campaign and turns into a texture you can feel in the finished garment and in the way it was made — quietly, carefully, and without shortcuts. That is the supply chain we want to keep building, together with the brands who care enough to build it with us.",
    ],
  },
  {
    slug: "the-quiet-craft-of-gauge",
    title: "The quiet craft of gauge",
    excerpt:
      "Gauges 3 to 12, and what each one does to a knit. A short field guide to the numbers behind the fabric.",
    category: "Know-how",
    date: "2026-05-21",
    cover: "/images/cap-knitting.jpg",
    author: "Studio Team",
    readingTime: "6 min",
    pullQuote: "Gauge is grammar. It decides how loudly a knit speaks.",
    body: [
      "Ask a knitter about gauge and you will get a quiet lesson in restraint. The number — 3, 5, 7, 10, 12 — describes how many needles sit in an inch of the machine bed, and with it, how fine or how chunky the resulting fabric will be. It is one of the first decisions in any development and one of the most consequential, because almost everything else follows from it.",
      "A low gauge gives volume. Think of a chunky rib or a sculptural cable: soft, generous, with real presence on the body. The stitches are large, the fabric is thick, and the garment has a physical weight that you notice the moment you pick it up. Low-gauge knits tend to feel honest and handmade, even when they are engineered with great precision.",
      "A high gauge gives finesse. At 12 the stitches are small and dense, the fabric is light and smooth, and the line becomes almost tailored. These are the knits that behave more like cloth — fine crewnecks, close ribs, pieces that layer without bulk. Neither low nor high is better; they are simply different sentences, and a good collection often speaks in several.",
      "On our STOLL flat machines we move across the full range — gauges 3, 5, 7, 10 and 12 — matching the number to the intention behind a design. The craft is not in owning the machines; it is in knowing which gauge a drawing is really asking for. Sometimes a designer imagines a fabric at one weight and discovers, at the sampling table, that the idea belongs at another entirely.",
      "Gauge also changes how a garment ages. Coarser fabrics forgive; finer fabrics reveal. A high-gauge knit demands cleaner shaping and more careful finishing, because at that density there is nowhere for a mistake to hide. Part of the work is anticipating this — choosing a construction that will still look considered after a season of real wear.",
      "None of these choices are visible to the person who eventually buys the piece, and that is exactly the point. Gauge is grammar: silent, structural, and entirely responsible for how clearly the garment says what it means. When it is right, no one thinks about it. When it is wrong, nothing else quite works.",
    ],
  },
  {
    slug: "notes-on-undyed-yarn",
    title: "Notes on undyed yarn",
    excerpt:
      "The unhurried beauty of natural tones — and why we keep returning to the undyed palette.",
    category: "Materials",
    date: "2026-03-09",
    cover: "/images/studio-swatch-1.jpg",
    author: "Madalena Beça",
    readingTime: "5 min",
    body: [
      "There is a particular calm to undyed yarn. Ecru, oat, stone, the faint grey of raw wool — colours that were never applied, only revealed. They carry the memory of the fibre itself, and there is an honesty in that which no dye can quite reproduce. We keep a shelf of these tones in the studio, and we find ourselves reaching for them again and again.",
      "Working in a natural palette asks more of the knit itself. Without colour to carry the piece, structure and texture have to do the talking. A rib, a pointelle, the soft shadow of a cable — in an undyed fabric these become the whole story, and any weakness in the construction has nowhere to hide. Restraint of colour, it turns out, demands generosity of craft.",
      "There is an environmental dimension too. Skipping the dyeing stage saves water and energy, and it removes a step where things can go wrong. But we are careful not to reduce undyed yarn to a footnote about sustainability. We use it because it is beautiful, and because beauty that happens to be lighter on the world is the best kind.",
      "Natural tones also behave differently across a collection. They sit quietly beside one another, so a piece can be layered and combined without the friction that strong colour sometimes brings. A rack of undyed knits reads as a single, considered family rather than a set of competing statements — calm on the shelf and calmer still on the body.",
      "We keep returning to these tones because they age well, both in the shop and in a wardrobe. They do not chase a season, so they do not date with one. A well-made undyed knit is the sort of thing a person keeps for years, reaching for it precisely because it asks nothing and gives a great deal. They are quiet, and quiet, we have found, is what lasts.",
    ],
  },
  {
    slug: "why-we-knit-slowly",
    title: "Why we knit slowly",
    excerpt:
      "In an industry built for speed, a case for the deliberate pace of small, expert making.",
    category: "Know-how",
    date: "2025-12-14",
    cover: "/images/about-finishing.jpg",
    author: "Madalena Beça",
    readingTime: "6 min",
    body: [
      "We are not an industrial giant, and we have never tried to be. We are not a distant luxury house either. We are a family of makers — small enough to care about a single seam, expert enough to deliver a full collection. That scale is a choice, and slowness is part of what it buys.",
      "Slow, here, does not mean late. It means deliberate. It is the time given to a sample so it can be corrected before it multiplies, the attention paid to a fitting so a garment sits the way it was drawn, the checkpoint that catches a flaw while it is still a single flaw and not a thousand. Speed, in manufacturing, tends to hide mistakes. Care removes them.",
      "Much of this work happens where no customer will ever see it. A tension adjusted by a fraction, a shoulder re-shaped, a finish redone because it was good but not right. These are unglamorous hours, and they are the difference between a knit that merely functions and one that feels considered from the inside out.",
      "There is a rhythm to a slower factory that is hard to describe but easy to feel. People are not rushing past their own decisions. There is room to ask whether something could be better, and room to act on the answer. That room is not inefficiency; it is where quality actually lives.",
      "The pieces that leave our atelier are measured, shaped, steamed and folded by hand. Each one passes through people who know what a good garment should feel like and who would notice if it did not. By the time it is folded, nothing about it was rushed, and that is something you can sense long after the piece is bought.",
      "In an industry organised around speed, choosing to knit slowly is almost a quiet act of resistance. But we are not being contrary for its own sake. We simply believe that the best knitwear cannot be hurried, and that the calm you feel in a well-made garment is the calm that went into making it.",
    ],
  },
  {
    slug: "new-stoll-machines-arrive",
    title: "New STOLL machines arrive at the atelier",
    excerpt:
      "An investment in capacity and finesse: our flat-knitting fleet grows, widening the range of what we can make.",
    category: "News",
    date: "2026-07-30",
    cover: "/images/cap-confection.jpg",
    author: "Madalena Beça",
    readingTime: "4 min",
    body: [
      "This month we welcomed new STOLL flat-knitting machines to the atelier — an investment in both capacity and finesse. Their arrival is one of those quiet milestones that does not make much noise on the factory floor but changes a great deal about what we can offer the brands we work with.",
      "The additions extend our gauge range and let us take on more development in parallel, without the queue that growth can sometimes create. In practice, that means moving from a program to a finished sample faster, and holding more conversations at once, while keeping the precision our partners rely on. Capacity, for us, is only worth having if it never comes at the cost of care.",
      "New machinery also opens the door to constructions that were harder to reach before. Finer gauges, more intricate stitch structures, cleaner transitions — the kind of details that give a knit its character and that a designer notices immediately in the hand. We are already testing new swatches on them, and the studio is quietly excited.",
      "There is a practical benefit for planning, too. More machines mean more flexibility in scheduling, which makes it easier to absorb the inevitable changes a real collection goes through without pushing a delivery date. Room to manoeuvre is one of the most valuable things a maker can give a brand.",
      "For the brands we work with, the message is simple: more room, more range, and the same quiet standard on every piece. The machines are new, but the intention behind them is exactly the one we have always had — to make excellent knitwear, calmly and well.",
    ],
  },
  {
    slug: "ocs-certification-renewed-2026",
    title: "OCS certification renewed for 2026",
    excerpt:
      "Our Organic Content Standard certification has been renewed, keeping our certified chain complete for another year.",
    category: "Responsibility",
    date: "2026-02-11",
    cover: "/images/about-quality.jpg",
    author: "Madalena Beça",
    readingTime: "3 min",
    body: [
      "We are pleased to confirm that our OCS (Organic Content Standard) certification has been renewed for 2026, audited by Ecocert Greenlife under licence 270713. The renewal keeps an important part of our supply chain formally verified for another year.",
      "OCS tracks and verifies the organic content of a material as it moves through the chain, from raw fibre to finished product. On its own it is one standard among several; alongside GOTS, RWS and GRS it completes a picture we have worked for years to keep whole. Together, these certifications give a brand the confidence of a documented, responsible chain from yarn to garment.",
      "Renewal is not a formality we take lightly. It means preparing records, opening our processes to external review, and demonstrating that the standard has been upheld not just in principle but in daily practice. The audit is demanding by design, and passing it is the point.",
      "We often describe certification as a promise we renew each year rather than a plaque on the wall. The certificate is the visible part; the invisible part is the ordinary, consistent work that makes it deserved. With OCS confirmed for another year, that work simply continues — quietly, as it should.",
    ],
  },
  {
    slug: "madalena-beca-at-premiere-vision",
    title: "Madalena Beça at Première Vision",
    excerpt:
      "We'll be showing new knit developments and meeting partners old and new. Come say hello.",
    category: "News",
    date: "2025-11-05",
    cover: "/images/studio-swatch-2.jpg",
    author: "Studio Team",
    readingTime: "3 min",
    body: [
      "We will be at Première Vision this season, presenting a set of new knit developments — fresh structures, natural palettes and a few quiet surprises we have been refining in the studio. It is one of the moments in the year when the work leaves the atelier and meets the people it was made for.",
      "There is only so much a photograph can tell you about a knit. Weight, drape, the exact softness of a hand — these things have to be felt, and a fair is one of the rare places where that is possible at scale. We will bring swatches and samples specifically so they can be picked up, turned over, and judged the way garments are actually judged.",
      "For us the value of these days is less about presenting and more about listening. Conversations on the floor tend to surface ideas that no brief ever would: a direction a brand is quietly moving toward, a construction someone has been searching for, a problem we might be well placed to solve. Some of our favourite collaborations began exactly this way.",
      "Whether we have worked together for years or are meeting for the first time, we would genuinely love to see you. Reach out ahead of time to arrange a proper conversation, or simply find us on the floor and say hello — the door, as always, is open.",
    ],
  },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** Deterministic date formatting (avoids locale/hydration mismatches). */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export function getAllPosts(): JournalPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): JournalPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Posts per listing page. */
export const PAGE_SIZE = 6;

export interface PageResult {
  posts: JournalPost[];
  page: number; // clamped, 1-based
  totalPages: number;
  total: number; // total matching the category (before pagination)
}

/**
 * Filtered + paginated listing. This is the WordPress swap point: replace the
 * body with a paginated `fetch()` (e.g. ?categories=&page=&per_page=PAGE_SIZE)
 * and keep the PageResult shape.
 */
export function getPosts(opts: { category?: string; page?: number }): PageResult {
  const all = getAllPosts();
  const filtered =
    opts.category && categories.includes(opts.category as Category)
      ? all.filter((p) => p.category === opts.category)
      : all;
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const page = Math.min(Math.max(1, opts.page || 1), totalPages);
  const start = (page - 1) * PAGE_SIZE;
  return { posts: filtered.slice(start, start + PAGE_SIZE), page, totalPages, total };
}

/** Related entries — same category first, then most recent, excluding self. */
export function getRelated(slug: string, n = 3): JournalPost[] {
  const current = getPost(slug);
  if (!current) return getAllPosts().slice(0, n);
  const rest = getAllPosts().filter((p) => p.slug !== slug);
  const sameCat = rest.filter((p) => p.category === current.category);
  const others = rest.filter((p) => p.category !== current.category);
  return [...sameCat, ...others].slice(0, n);
}
