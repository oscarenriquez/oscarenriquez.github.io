import Link from "next/link";

export const mdxComponents = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={props.href ?? "#"}
      className="text-blue-600 transition-colors hover:text-blue-700"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {props.children}
    </Link>
  )
};
