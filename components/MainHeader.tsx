import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";

const MainHeader = () => {
  return (
    <header>
      <Link href={"/"}>
        <Image src={logoImg} alt="A plate with food in it" />
        NextLevel Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={"/meals"}>Browse Meals</Link>
          </li>
          <li>
            <Link href={"/community"}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
