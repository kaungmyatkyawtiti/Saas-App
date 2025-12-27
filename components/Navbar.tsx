import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import ModeToggle from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <Image
          src={"/logo.jpg"}
          alt="My logo"
          width={40}
          height={40}
          loading="eager"
          className="rounded-full"
        />
      </Link>

      <div className="flex gap-8 items-center">
        <NavItems />
        <Link href={"/"}>SignIn</Link>
        <ModeToggle />
      </div>
    </nav>
  )
}

