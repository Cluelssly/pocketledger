"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="pl-nav">
      <Link href="/" className="pl-logo">💰 PocketLedger</Link>
      <nav>
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link href="/#features">Features</Link>
        <Link href="/#how">How it works</Link>
        <Link href="/pocket" className={"pl-open" + (pathname === "/pocket" ? " active" : "")}>
          Open app
        </Link>
      </nav>
    </header>
  );
}
