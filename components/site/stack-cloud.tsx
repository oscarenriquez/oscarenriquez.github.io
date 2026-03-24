import { featuredStacks } from "@/lib/site";

export function StackCloud() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {featuredStacks.map((item) => (
        <div
          key={item.name}
          className="surface flex items-center gap-4 rounded-3xl border border-slate-200/70 px-4 py-4 shadow-[var(--shadow-soft)]"
        >
          <img src={item.logo} alt={`${item.name} logo`} className="size-9 shrink-0" loading="lazy" />
          <div>
            <p className="text-sm font-medium text-slate-900">{item.name}</p>
            <p className="text-sm text-slate-500">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
