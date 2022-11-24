import React from "react";
import Card from "../../../ui/card";
import styles from "./courseTiles.module.css";
import { courseList } from "./helper";

const CourseItem = ({ title, src, desc }) => {
  return (
    <div className={styles.courseItem}>
      <Card title={title} src={src} desc={desc} />
    </div>
  );
};
const CourseTiles = () => {
  return (
    <div className={styles.courseTilescontainer}>
      <p className={styles.subheading}>What does the course cover?</p>
      <div className={styles.cardContainer}>
        {courseList.map((course) => (
          <CourseItem key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseTiles;
