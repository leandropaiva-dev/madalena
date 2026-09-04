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
  cover: string; // /blog/... or /images/...
  coverVideo?: string; // /blog/... — shown instead of the cover image on the article page
  gallery?: string[]; // extra images shown in a grid within the article
  author: string;
  readingTime: string; // e.g. "4 min"
  pullQuote?: string;
  body: string[]; // paragraphs
}

const blog2Gallery = [
  "2023101320434036353239396465633961306663.jpg",
  "2023101320434036353239396465633964333364.jpg",
  "2023101320434036353239396465636130366565.jpg",
  "2023101320434036353239396465636132666635.jpg",
  "2023101320434036353239396465636135386463.jpg",
  "2023101320435136353239396466376632636338.jpg",
  "2023101320440136353239396530313035643730.jpg",
  "2023101320441036353239396530613766303237.jpg",
  "2023101320442236353239396531363631313738.jpg",
  "2023101320443636353239396532343831666435.jpg",
  "2023101320451036353239396534366265326365.jpg",
  "2023101320452136353239396535313661316235.jpg",
  "2023101320455336353239396537313334666263.jpg",
  "2023101320460436353239396537633438333333.jpg",
  "2023101320461836353239396538613532393961.jpg",
  "2023101320463636353239396539633137616435.jpg",
  "2023101320465036353239396561613664393533.jpg",
  "2023101320470036353239396562343762616339.jpg",
].map((f) => `/blog/blog2/${f}`);

const blog3Gallery = [
  "2023101320485836353239396632616138373034.jpeg",
  "2023101320485836353239396632616139623838.jpeg",
  "2023101320485836353239396632616161653566.jpeg",
  "2023101320485836353239396632616163356465.jpeg",
  "2023101320485836353239396632616164613539.jpeg",
  "2023101320490636353239396633326161383137.jpeg",
  "2023101320491436353239396633613661363037.jpeg",
  "2023101320492336353239396634333438663533.jpeg",
  "2023101320493536353239396634663064363339.jpeg",
  "2023101320494636353239396635613732326439.jpeg",
  "2023101320495636353239396636343065313564.jpg",
  "2023101320500636353239396636653239623064.jpg",
  "2023101320501636353239396637383961323032.jpg",
  "2023101320502936353239396638353339383266.jpg",
].map((f) => `/blog/blog3/${f}`);

/**
 * Base article content sourced from public/blog/blog1..4 (real client
 * content, replacing the earlier placeholder copy). Repeated below to fill
 * 9 listing slots, per client request.
 */
const baseArticles: Omit<JournalPost, "slug" | "date">[] = [
  {
    title: "Our client is featured in British Vogue",
    excerpt:
      "One of our sustainably manufactured pieces — a bear cardigan — was selected for British Vogue's list of the best stylish and sustainable buys for babies and children.",
    category: "News",
    cover: "/blog/blog1/blog1.webp",
    author: "Madalena Beça",
    readingTime: "2 min",
    body: [
      "We are thrilled to share this feature with you: our wonderful client is being featured at British Vogue, and so is our sustainably manufactured bear cardigan.",
      "The piece was selected for “The 10 Best Stylish-And-Sustainable Buys For Babies And Children.”",
      "“In ‘Get Your Greens’, an ongoing series in line with the 50th anniversary of Earth Day, British Vogue explores how the industry is advancing towards a greener future.”",
      "Read the full feature at vogue.co.uk/mini-vogue/gallery/sustainable-baby-childrens-brands.",
    ],
  },
  {
    title: "Inspiration Book: Autumn/Winter 2022-2023",
    excerpt:
      "Evolving shapes and multiple identities: inside the inspiration book behind our Autumn/Winter 2022-2023 collection.",
    category: "Know-how",
    cover: blog2Gallery[0],
    coverVideo: "/blog/blog2/blog.mp4",
    gallery: blog2Gallery,
    author: "Studio Team",
    readingTime: "4 min",
    body: [
      "Inspiration Book Autumn/Winter 2022-2023 focuses on two specific themes — evolving shapes and multiple identities — and how creation through knitwear can describe them.",
      "Evolving shapes: the intrinsic capacity of natural elements to survive and evolve through adaptation and transformation. Material in motion — contractions and expansions — creating new dimensions and possibilities of expression.",
      "Multiple identity: in today's diverse and interconnected world, the concept of identity has evolved beyond traditional boundaries. People are increasingly embracing the complexity of their multifaceted personalities, challenging societal norms and stereotypes. It is within this cultural shift that the theme of “Multiple Identity” emerges as a powerful inspiration for fashion. By exploring the richness and diversity of human identity, textures and yarns can create collections that celebrate individuality, encourage self-expression, and reflect the vibrant tapestry of our global society.",
    ],
  },
  {
    title: "Gui Rosa × Madalena Beça: a GUCCIfest capsule collection",
    excerpt:
      "Knitted cowboy boots and a hitch-hiker couture capsule: how Gui Rosa's GUCCIfest film came to life with mohair yarn developed at Madalena Beça.",
    category: "News",
    cover: blog3Gallery[0],
    coverVideo: "/blog/blog3/partnership.mp4",
    gallery: blog3Gallery,
    author: "Madalena Beça",
    readingTime: "4 min",
    body: [
      "Elevating and refining the pieces featured in his GUCCIfest film, ‘Til Death Do Us Ride’, Gui Rosa created a hitch-hiker couture, pedal-to-the-metal capsule that balances the masculine and the domestic — combining colourful crochet, knits and tulle with leather and denim. Together they dismantle the icons of male toughness, weaving a tension between the feminine and hard-edged masculine in a trucker, tarmac road-movie fantasy. Key to the story are his signature knitted cowboy boots.",
      "Having graduated with a Master's from Central Saint Martins in 2020, Gui Rosa has poured his life experience into his designs, drawing on his liberal upbringing in Portugal and combining it with a visceral reaction to the pejorative masculinity he encountered in adult life. With an emphatically non-traditional use of crochet — a craft he takes to new levels — he creates unapologetically frivolous yet subversive handmade pieces that consciously set out to reappropriate stereotypical pop-cultural tropes by juxtaposing overt feminine craft with masculine iconography.",
      "For the series of knee boots, mohair yarn colours from our Filpucci Topkid quality were knitted and developed at Madalena Beça Knitwear.",
    ],
  },
  {
    title: "Kit & Kin's Eco Baby Collection wins Gold at the Junior Design Awards",
    excerpt:
      "Celebrating our valued client Kit & Kin, whose eco-conscious babywear — manufactured to G.O.T.S. standard with us — won Gold at the Junior Design Awards 2020/2021.",
    category: "News",
    cover: "/blog/blog4/2023101711595036353265363932363237333062.png",
    author: "Madalena Beça",
    readingTime: "3 min",
    body: [
      "We are thrilled to share a moment of pride and accomplishment with our valued client, Kit & Kin. Their commitment to eco-conscious babywear has not only captured hearts but also clinched the prestigious Gold award at the Junior Design Awards 2020/2021.",
      "At Madalena Beça Knitwear, we are honoured to have played a pivotal role in bringing Kit & Kin's vision to life. Our dedication to sustainable manufacturing, underscored by the G.O.T.S. (Global Organic Textile Standard) certification, was instrumental in creating a collection that embodies eco-friendliness without compromising on quality or style.",
      "This recognition highlights the collective efforts of Kit & Kin's commitment to sustainable textiles and our craftsmanship. It's a testament to the positive impact that conscious fashion choices can make, both for the little ones who wear it and the environment we all share.",
      "We extend our heartfelt congratulations to Kit & Kin on this remarkable achievement. Together, we continue to drive innovation and excellence in the world of sustainable fashion.",
    ],
  },
];

const publishDates = [
  "2026-08-20",
  "2026-07-15",
  "2026-06-10",
  "2026-05-05",
  "2026-03-28",
  "2026-02-14",
  "2026-01-09",
  "2025-12-02",
  "2025-10-20",
];

/** 9 listing slots, cycling the 4 real articles (1,2,3,4,1,2,3,4,1) per client request. */
const posts: JournalPost[] = publishDates.map((date, i) => {
  const base = baseArticles[i % baseArticles.length];
  const repeatIndex = Math.floor(i / baseArticles.length); // 0 = first pass, 1 = second pass...
  const slugBase = base.title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return {
    ...base,
    slug: repeatIndex === 0 ? slugBase : `${slugBase}-${repeatIndex + 1}`,
    date,
  };
});

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
