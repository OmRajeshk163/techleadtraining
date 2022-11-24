import React from "react";
import PropTypes from "prop-types";
import styles from "./trainingDetails.module.css";
import Image from "next/image";

const PriceItem = ({ price, src, title }) => {
  return (
    <div className={styles.priceItemContainer}>
      <div className={styles.perkCard}>
        <div className={styles.perkCardBody}>
          <div className={styles.cardContent}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Image src={src} height="48px" width="48px" alt={title} />
              {/* <div>
                <input
                  type="radio"
                  value={title}
                  name="price"
                  style={{ height: "2rem", width: "2rem" }}
                />
              </div> */}
            </div>
            <h4 className={styles.priceItemTitle}>{title}</h4>
            <p className={styles.priceItemAmount}>
              <sup style={{ fontSize: "1.7rem" }}>&#8377;</sup>
              {price}
            </p>
            <p className={styles.personText}>/person</p>
          </div>
        </div>
      </div>
    </div>
  );
};

PriceItem.propTypes = {};

export default PriceItem;
