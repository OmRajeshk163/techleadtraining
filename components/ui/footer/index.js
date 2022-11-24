import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.copyRightBlock}>
      <p>Copyright © coffeebeans.io 2022</p>
      {/* <div className={styles.privacyPolicy}>
        <Link href="/privacy-policy" passHref>
          <p>Privacy Policy</p>
        </Link>
        <Link href="/site-map" passHref>
          <p>Sitemap</p>
        </Link>
        <Link href="/terms-of-uses" passHref>
          <p>Terms of Use</p>
        </Link>
      </div> */}
    </div>
  );
};

export default Footer;
