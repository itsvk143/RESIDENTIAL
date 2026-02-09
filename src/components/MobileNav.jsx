"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "courses",
    path: "/course",
  },
  {
    name: "faculty",
    path: "/faculty",
  },
  {
    name: "results",
    path: "/results",
  },
  {
    name: "testimonials",
    path: "/testimonials",
  },
  {
    name: "scholarships",
    path: "/scholarships",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-blue-600" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-white">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-bold tracking-tighter text-slate-800">
              COE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 font-extrabold">NEET</span>
              <span className="text-emerald-500">.</span>
            </h1>
          </Link>

          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              const isActive = link.path === pathname;
              const isSpecial = link.name.toLowerCase() === "scholarships";

              return (
                <Link
                  href={link.path}
                  key={index}
                  className={`capitalize text-xl transition-all px-3 py-1 rounded
                    ${isActive ? "text-accent border-b-2 border-accent" : ""}
                    ${isSpecial ? "border border-accent text-accent" : "hover:text-accent"}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
