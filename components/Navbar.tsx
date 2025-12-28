import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import ModeToggle from "./ModeToggle";
import ClerkLogin from "./ClerkLogin";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <Image
          src={"/images/logo.svg"}
          alt="My logo"
          width={40}
          height={40}
          loading="eager"
        />
      </Link>

      <div className="flex gap-6 items-center">
        <NavItems />
        <ClerkLogin />
        <ModeToggle />
      </div>
    </nav>
  )
}

