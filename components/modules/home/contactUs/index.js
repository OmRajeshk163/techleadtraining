import React from "react";
import styles from "./contactUs.module.css";
import contactUs from "../../../../public/images/home/contactUs.svg";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className={styles.contactUsContainer}>
      <div className={styles.imageContainer}>
        <Image src={contactUs} layout="fill" alt={"name"} />
      </div>
      <div className={styles.contactInfoWrap}>
        <label className={styles.contactInfolbl}>Contact Us:</label>
        <p className={styles.contacts}>9578678677</p>
        <p className={styles.contacts}>faiza@coffeebeans.io</p>
      </div>
    </div>
  );
};

export default ContactUs;
