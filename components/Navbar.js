import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Image alt="" width="30rem" height="30rem" src="/logo.jpeg" />
        <ul className="flex mx-auto">
            <li className="nav-li"><Link href="/">Home</Link></li>
            <li className="nav-li"><Link href="/about">About</Link></li>
            <li className="nav-li"><Link href="/application">Applications</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
