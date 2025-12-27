import cn from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navs = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "Journey", href: "/my-journey" },
]

export default function NavItems() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-5">
      {
        navs.map(nav =>
          <Link
            key={nav.href}
            href={nav.href}
            className={cn(
              pathname === nav.href && "text-red-300"
            )}
          >
            {nav.label}
          </Link>
        )
      }
    </nav>
  )
}

