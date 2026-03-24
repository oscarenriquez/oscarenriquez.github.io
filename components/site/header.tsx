import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/container";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/72 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/icons/portfolio_icon.png"
            alt="Oscar Enriquez portfolio icon"
            width={36}
            height={36}
            priority
            className="h-9 w-9 rounded-xl object-cover"
          />
        </Link>
        <nav className="hidden gap-7 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-500 transition-colors hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
