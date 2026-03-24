import Link from "next/link";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <Container className="pb-24">
      <div className="surface-strong rounded-[2rem] border border-slate-200/70 px-8 py-10 shadow-[var(--shadow-soft)] md:flex md:items-center md:justify-between md:px-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Open to high-impact roles</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
            Cloud platforms, payment-grade systems, and practical AI.
          </h3>
          <p className="mt-4 text-base leading-8 text-slate-600">
            The portfolio is static-first today and intentionally shaped to expand into a richer product surface later.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <Link href="/contact">
            <Button size="lg">Start a conversation</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
