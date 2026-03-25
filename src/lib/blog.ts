import blogData from "@/data/blog-posts.json";

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
  content: string;
  html?: string;
};

const posts: BlogPost[] = blogData as BlogPost[];

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  return posts.find((p) => p.slug === slug);
}
