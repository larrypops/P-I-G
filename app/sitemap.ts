import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

const routes = [
  "",
  "/a-propos",
  "/missions",
  "/organisation",
  "/actions",
  "/actualites",
  "/galerie",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
