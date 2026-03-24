import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx/mdx-components";

type ContentType = "blog" | "projects";

type BaseFrontmatter = {
  title: string;
  summary: string;
  publishedAt: string;
  featured?: boolean;
  tags?: string[];
};

export type ProjectFrontmatter = BaseFrontmatter & {
  problem: string;
  solution: string;
  architecture: string;
  github: string;
  stack: string[];
};

export type BlogFrontmatter = BaseFrontmatter & {
  readingTime: string;
};

export type ContentItem<T extends BaseFrontmatter> = T & {
  slug: string;
};

const contentRoot = path.join(process.cwd(), "content");

async function readDirectory(type: ContentType) {
  const directory = path.join(contentRoot, type);
  const entries = await fs.readdir(directory);

  return entries.filter((file) => file.endsWith(".mdx"));
}

async function readFile(type: ContentType, slug: string) {
  const filePath = path.join(contentRoot, type, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  return matter(source);
}

function sortByDate<T extends BaseFrontmatter>(items: ContentItem<T>[]) {
  return items.sort(
    (left, right) =>
      new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
  );
}

export async function getProjects() {
  const files = await readDirectory("projects");
  const items = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data } = await readFile("projects", slug);

      return {
        slug,
        ...(data as ProjectFrontmatter)
      };
    })
  );

  return sortByDate(items);
}

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((project) => project.featured).slice(0, 3);
}

export async function getBlogPosts() {
  const files = await readDirectory("blog");
  const items = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data } = await readFile("blog", slug);

      return {
        slug,
        ...(data as BlogFrontmatter)
      };
    })
  );

  return sortByDate(items);
}

export async function getProjectBySlug(slug: string) {
  const { data, content } = await readFile("projects", slug);

  const compiled = await compileMDX<ProjectFrontmatter>({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm]
      }
    },
    components: mdxComponents
  });

  return {
    frontmatter: {
      slug,
      ...(data as ProjectFrontmatter)
    },
    content: compiled.content
  };
}

export async function getBlogPostBySlug(slug: string) {
  const { data, content } = await readFile("blog", slug);

  const compiled = await compileMDX<BlogFrontmatter>({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm]
      }
    },
    components: mdxComponents
  });

  return {
    frontmatter: {
      slug,
      ...(data as BlogFrontmatter)
    },
    content: compiled.content
  };
}
