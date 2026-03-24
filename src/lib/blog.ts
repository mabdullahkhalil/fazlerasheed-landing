import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type BlogPost = {
  title: string;
  slug: string;
  url: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  author: string;
  date: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  coverImage: string;
  coverImageAlt: string;
  featured?: boolean;
  draft?: boolean;
  content: string; // raw markdown
  html?: string; // rendered HTML
};

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return { ...data, content } as BlogPost;
    })
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return undefined;

  const result = await remark().use(html, { sanitize: false }).process(post.content);
  return { ...post, html: result.toString() };
}
