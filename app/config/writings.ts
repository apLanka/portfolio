/**
 * Featured writings and blog posts configuration.
 * Showcase articles that demonstrate architectural thinking.
 */

export interface Article {
  title: string;
  description: string;
  url: string;
  platform: string;
  date: string;
}

export const articles: Article[] = [
  {
    title: "Article Title Here",
    description: "A brief summary of what this article covers and why it matters.",
    url: "https://medium.com/@pasindulanka/article-slug",
    platform: "Medium",
    date: "2025",
  },
  // add more articles here
];
