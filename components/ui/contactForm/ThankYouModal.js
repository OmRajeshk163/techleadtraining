import React from "react";
import styles from "./contactForm.module.css";
import Image from "next/image";

const ThankYouModal = (props) => {
  const {
    status = false,
    message = "",
    amount = "",
    orderId = "",
    paymentId = "",
    purchase = "",
  } = props.orderDetails;

  return (
    <div className={styles.thankyouContainer}>
      <div className={styles.imageContainer}>
        <Image src={`/images/home/cbLogoNew.svg`} layout="fill" alt={message} />
      </div>
      <div className={styles.closeBtn} onClick={props.onClose}>
        &#x2717;
      </div>
      <div className={styles.tickIconWrap}>
        {status ? (
          <div className={`${styles.tickIcon} ${styles.greenIcon}`}>
            &#x2713;
          </div>
        ) : (
          <div className={`${styles.tickIcon} ${styles.redIcon}`}>&#x2717;</div>
        )}
      </div>
      <div className={styles.titleWrap}>
        <div
          className={`${styles.title} ${
            status ? styles.greenIcon : styles.redIcon
          }`}
        >
          {message}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={styles.orderDesc}>{`Purchase : ${purchase}`}</div>
        <div className={styles.orderDesc}>
          <span>Amount : </span>
          <span style={{ whiteSpace: "nowrap" }}>&#8377; {` ${amount}`}</span>
        </div>
      </div>
      {!status && (
        <div className={styles.orderDescWrap}>
          <div className={styles.orderDesc}>
            <span>Order Id :</span>
            <span>{`${orderId}`}</span>
          </div>
          <div className={styles.orderDesc}>
            <span>Payment Id : </span>
            <span>{`${paymentId}`}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThankYouModal;
