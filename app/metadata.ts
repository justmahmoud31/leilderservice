// app/metadata.ts
import { articles } from "./articleData";

export function getArticleMetadata(slug: string) {
  const article = articles.find((a) => a.slug === slug);
  return article
    ? {
        title: article.metaTitle,
        description: article.metaDescription,
      }
    : {
        title: "Artikel niet gevonden",
        description: "Dit artikel bestaat niet.",
      };
}
