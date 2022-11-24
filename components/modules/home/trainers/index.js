import Image from "next/image";
import React from "react";
import { trainerList } from "./helper";
import styles from "./trainers.module.css";
import linkedInIcon from "../../../../public/icons/linkedin.svg";
const Trainer = ({ name, linkedIn, designation, desc, src }) => {
  return (
    <div className={styles.trainerItem}>
      <div className={styles.imageContainer}>
        <Image src={src} layout="fill" alt={name} />
      </div>
      <div className={styles.descContainer}>
        <p className={styles.trainerName}>{name}</p>
        <div className={styles.iconDesignationwrap}>
          <p className={styles.trainerDesignation}>{designation}</p>
          <Image
            src={linkedInIcon}
            width={20}
            height={20}
            // layout="fill"
            alt={`linkedIn-${name}`}
            className={styles.linkedInIncon}
          />
        </div>
        <p className={styles.trainerDesc}>{desc}</p>
      </div>
    </div>
  );
};
const Trainers = () => {
  return (
    <div className={styles.trainersContainer}>
      <p className={styles.trainersTitle}>Know your trainers</p>
      <div className={styles.trainerCardContainer}>
        {trainerList.map((trainer) => (
          <Trainer key={trainer.id} {...trainer} />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
