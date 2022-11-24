import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "./header.module.css";

const navItems = [
  {
    name: "About CB",
    link: "/about-us",
  },
  {
    name: "Life at CB",
    link: "/life-at-cb",
  },
  {
    name: "Services",
    sections: [
      {
        renderTitle: <div>Consulting</div>,
        renderDescription: (
          <div className={styles.underLinedLink}>
            <Link href="/technology-consulting">Technology Consulting</Link>
            <Link href="/product-consulting">Product Consulting</Link>
            <Link href="/process-consulting">Process Consulting</Link>
          </div>
        ),
      },
      {
        renderTitle: <div>Value Added Services</div>,
        renderDescription: (
          <div className={styles.underLinedLink}>
            <Link href="/quality-as-a-service">Quality as a Service</Link>
            <Link href="/edubeans">Training as a Service</Link>
            <Link href="/devops-as-a-service">DevOps as a Service</Link>
          </div>
        ),
      },
    ],
  },
  {
    name: "Resources",
    sections: [
      {
        title: "Blogs",
        link: "/blogs",
      },
      {
        title: "Case Studies",
        link: "/case-studies",
      },
    ],
  },
  {
    name: "Careers",
    link: "/careers",
  },
];
const Header = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const toggleMenuCB = () => {
    toggleMenu(!isMenuOpen);
  };

  return (
    <header className={styles.mainHeader}>
      <nav className={styles.navContainer}>
        <div>
          <Link href="/" passHref>
            <Image
              src="/images/home/cbLogoNew.svg"
              alt="coffeebeans logo"
              width="173"
              height="39"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
