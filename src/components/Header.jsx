import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import MarqueeNews from "@/components/MarqueeNews";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      {/* News Ticker (Marquee) at the Top */}
      {/* <MarqueeNews /><br /> */}

      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Branding */}
        <Link href="/">
          <h1 className="text-3xl font-bold tracking-tighter text-white">
            COE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-extrabold">NEET</span>
            <span className="text-emerald-400">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href="/">
            <Button>Hire Me</Button>
          </Link> */}
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
          {/* <Link href="/">
            <Button>Hire Me</Button>
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

