import React from "react";
import { learningList, pricingList } from "./helper";
import styles from "./trainingDetails.module.css";
import LearnSchedule from "./LearnSchedule";
import PriceItem from "./PriceItem";
const LearningItem = ({ desc = "" }) => {
  return <li className={styles.learnItem}>{desc}</li>;
};

const TrainingDetails = () => {
  return (
    <div className={styles.trainingDetailsContainer}>
      <div className={styles.learningWrap}>
        <div className={styles.detailsContainer}>
          <p className={styles.detailsTitle}>Know your trainers</p>
          <div className={styles.detailsDecsContainer}>
            <ul>
              {learningList.map((learn) => (
                <LearningItem key={learn.id} {...learn} />
              ))}
            </ul>
            <LearnSchedule />
          </div>
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.priceTitle}>Price</p>
          <div className={styles.priceItemWrap}>
            {pricingList.map((priceItem) => (
              <PriceItem key={priceItem.id} {...priceItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetails;
