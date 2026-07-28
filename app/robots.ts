import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const base = process.env.SITE_URL ?? "https://fanza-sdk.example.com";
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot"], allow: ["/", "/llms.txt"], disallow: ["/api/"] },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
