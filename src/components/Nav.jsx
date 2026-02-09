"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"; // Update path if needed

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

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        const isOffer = link.name.toLowerCase() === "offers";

        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize font-medium transition-all px-3 py-1 rounded 
              ${isActive ? "text-accent border-b-2 border-accent" : ""}
              ${isOffer ? "border border-accent text-accent" : "hover:text-accent"}
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;