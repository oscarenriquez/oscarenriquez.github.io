import Link from "next/link";
import { Container } from "@/components/site/container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 py-10">
      <Container className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>{siteConfig.name}. Built with a static-first Next.js architecture.</p>
        <div className="flex gap-5">
          <Link href={siteConfig.social.github} target="_blank" rel="noreferrer" className="hover:text-slate-900">
            GitHub
          </Link>
          <Link href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900">
            LinkedIn
          </Link>
        </div>
      </Container>
    </footer>
  );
}
