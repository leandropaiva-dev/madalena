import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/journal";
import { SITE_URL } from "@/lib/site";

const STATIC_ROUTES = [
  "",
  "/about",
  "/studio",
  "/how-we-work",
  "/sustainability",
  "/start-a-project",
  "/journal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/journal/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticEntries, ...postEntries];
}
