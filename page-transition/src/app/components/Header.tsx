import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="text-lg">
        <ul className="container flex gap-10">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
