import React from "react";
import { learningScheduleObj } from "./helper";
import styles from "./trainingDetails.module.css";

const LearnSchedule = () => {
  return (
    <div className={styles.learnSchedulecontainer}>
      <p>
        Duration: <span> {learningScheduleObj.duration} Days</span>
      </p>
      <p>
        Mode: <span> {learningScheduleObj.mode}</span>
      </p>
      <p>
        Date: <span> {learningScheduleObj.date}</span>
      </p>
    </div>
  );
};

export default LearnSchedule;
