import React from "react";
import PropTypes from "prop-types";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ title, src, desc }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image src={src} layout="fill" alt={title} />
      </div>
      <div className={styles.titleWrap}>
        <label className={styles.imageTitle}>{title}</label>
      </div>
      <p>{desc}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: "",
  desc: "",
  src: "",
};

export default Card;
