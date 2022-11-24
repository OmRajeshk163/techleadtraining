import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import styles from "./banner.module.css";
import BannerImage from "../../../../public/images/home/homeBanner.svg";

const Banner = (props) => {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroBannerTextContainer}>
        <p className={styles.heading}>Edubeans presents</p>
        <h1 className={styles.heroBannerText}>Tech Lead Training</h1>
      </div>
      <div className={styles.banner}>
        <Image src={BannerImage} alt="Home banner" />
      </div>
    </section>
  );
};

Banner.propTypes = {};

export default Banner;
