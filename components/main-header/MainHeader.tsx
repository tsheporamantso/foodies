import Image from "next/image";
import Link from "next/link";

import MainHeaderBackground from "./MainHeaderBackground";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLinks from "./NavLinks";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={`${classes.header} mb-28`}>
        <Link href={"/"} className={classes.logo}>
          <Image src={logoImg} alt="A plate with food in it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLinks href="/meals">Browse Meals</NavLinks>
            </li>
            <li>
              <NavLinks href="/community">Foodies Community</NavLinks>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
