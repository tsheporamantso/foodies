"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-links.module.css";

const NavLinks = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path?.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLinks;
