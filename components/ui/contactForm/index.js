import Link from "next/link";
import Image from "next/image";
// import ReCAPTCHA from "react-google-recaptcha";
// import axios from "axios";
import { useState } from "react";
import useForm from "./useForm";
import {
  logError,
  logSuccess,
  validationGeneral,
} from "../../../helpers/formValidation";

import styles from "./contactForm.module.css";
import { initializeRazorpay, optionObj, verifyOrder } from "./helper";
import ThankYouModal from "./ThankYouModal";
import ModalPopUp from "../Modal/Modal";

const ContactForm = () => {
  const [formState, setFormState] = useState("paynow");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    orderId: "",
    paymentId: "",
    amount: 24999,
    message: "Payment Failed",
    status: false,
    orderId: "wertyuifghjk678ghj",
    purchase: "Regular Seat",
    paymentId: "wertyuifghjk678ghj",
  });
  const formStates = {
    paynow: "Pay Now",
    paying: "Payment Inprogress...",
    paymentComplete: "Payment Complete",
  };

  const { values, errors, handleChange, setValues, handleSubmit, setErrors } =
    useForm(submit, validationGeneral, formState);

  async function submit() {
    setFormState("paying");
    //makePayment(values);
    try {
      setFormState("paymentComplete");
      //const res = await axios.post(contactFormLink, { ...values });
      // if (res && res.data.success) {
      //   setValues({});
      //   logSuccess();
      // }
    } catch (err) {
      console.error("contactForm submit Error", err);
    }
  }

  const makePayment = async (state) => {
    const { name = "", phoneNumber = "", email, seatType = 1 } = state;
    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    try {
      // Make API call to the serverless API
      const orderApi = `/api/razorpay?seatType=${seatType}`;
      const orderResponse = await fetch(orderApi, { method: "POST" }).then(
        (res) => res.json()
      );

      const handler = async (response) => {
        const verifyRes = await verifyOrder(response);
        setOrderDetails((prev) => ({
          ...prev,
          orderId: orderResponse.id,
          amount: orderResponse.amount,
          purchase: seatType == 1 ? "Early Bird" : "Regular Seat",
          paymentId: response.razorpay_payment_id,
        }));

        console.log("orderReverifyRessponse", verifyRes);

        if (verifyRes?.status) {
          // alert(verifyRes?.message);
          setOrderDetails((prev) => ({
            ...prev,
            status: verifyRes.status,
            message: verifyRes?.message,
          }));
          setIsModalOpen(true);
        } else {
          setOrderDetails((prev) => ({
            ...prev,
            status: verifyRes.status,
            message: verifyRes?.message,
          }));
          setIsModalOpen(true);
        }
      };
      const prefills = { name: name, email: email, contact: phoneNumber };
      const options = { ...optionObj(orderResponse, prefills, handler) };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log("OrderCreationError", error);
      alert("Payment was not Successful");
    }
  };

  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };
  const handleCaptcha = (value) => {
    setValues((prevvalues) => ({
      ...prevvalues,
      // reCaptcha: value,
    }));
  };
  return (
    <>
      <section className={styles.contactFormContainer} id="contact-form">
        <div className={styles.formTriangleWrap} />
        <div className={styles.getInTouchContainer}>
          <div className={styles.headingBlock}>
            <div className={styles.eyeImage}>
              <Image
                src="/icons/formIcon1.svg"
                height={92}
                width={202}
                alt="form Icon"
              />
            </div>
            <div className={styles.formHeading}>Personal Information</div>
          </div>
          <div className={styles.stairsImage}>
            <Image
              src="/icons/stairs.svg"
              width={402}
              height={316}
              alt="staircase design "
            />
          </div>
        </div>
        <div className={styles.enquiryContainer}>
          <form
            className={styles.enquiryForm}
            onSubmit={handleSubmit}
            noValidate
          >
            <label className={styles.enquiryFormLabel} htmlFor="name">
              Name*
              <input
                id="name"
                name="username"
                onChange={handleChange}
                value={values.username || ""}
                type="text"
                placeholder="Full Name"
                className={styles.enquiryFormInput}
              />
              {errors.username && (
                <p className={styles.enquiryFormErrorMassage}>
                  {errors.username}
                </p>
              )}
            </label>
            <label className={styles.enquiryFormLabel} htmlFor="email">
              Email*
              <input
                id="email"
                name="email"
                onChange={handleChange}
                value={values.email || ""}
                placeholder="abc@gmail.com"
                className={styles.enquiryFormInput}
                required
              />
              {errors.email && (
                <p className={styles.enquiryFormErrorMassage}>{errors.email}</p>
              )}
            </label>
            <label className={styles.enquiryFormLabel} htmlFor="phoneNumber">
              Phone Number*
              <input
                id="phoneNumber"
                name="phoneNumber"
                onChange={handleChange}
                value={values.phoneNumber || ""}
                placeholder="Phone Number"
                className={styles.enquiryFormInput}
              />
              {errors.phoneNumber && (
                <p className={styles.enquiryFormErrorMassage}>
                  {errors.phoneNumber}
                </p>
              )}
            </label>
            <label className={styles.enquiryFormLabel} htmlFor="yearsOfExp">
              Years of Experience
              <input
                id="yearsOfExp"
                name="yearsOfExp"
                onChange={handleChange}
                value={values.yearsOfExp || ""}
                type="number"
                placeholder="years Of Experience"
                className={styles.enquiryFormInput}
              />
              {/* {errors.yearsOfExp && (
                <p className={styles.enquiryFormErrorMassage}>
                  {errors.yearsOfExp}
                </p>
              )} */}
            </label>
            <label className={styles.enquiryFormLabel} htmlFor="location">
              Location
              <input
                name="location"
                onChange={handleChange}
                value={values.location || ""}
                type="text"
                placeholder="Location"
                className={styles.enquiryFormInput}
              />
            </label>
            <label className={styles.enquiryFormLabel} htmlFor="companyName">
              Company
              <input
                name="companyName"
                id="companyName"
                onChange={handleChange}
                value={values.companyName || ""}
                type="text"
                placeholder="Company"
                className={styles.enquiryFormInput}
              />
            </label>
            <label className={styles.enquiryFormRadioLabel}>
              <input
                type="radio"
                // value="earlyBirdSeats"
                value="1"
                name="seatType"
                onChange={handleChange}
                checked={values.seatType === "1"}
                required
              />
              Early Bird
            </label>
            <label className={styles.enquiryFormRadioLabel}>
              <input
                type="radio"
                // value="regularSeats"
                value="2"
                name="seatType"
                onChange={handleChange}
                checked={values.seatType === "2"}
                required
              />
              Regular Seats
            </label>
            <label className={styles.enquiryFormRadioLabel} htmlFor="seatType">
              {errors.seatType && (
                <p className={styles.enquiryFormErrorMassage}>
                  {errors.seatType}
                </p>
              )}
            </label>
            <div className={styles.submitBtnContainer}>
              {/* <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
              theme="light"
              name="reCaptcha"
              className={styles.gRecaptcha}
              onChange={handleCaptcha}
            />
            {errors.reCaptcha && (
              <p className={styles.enquiryFormErrorMassage}>
                {errors.reCaptcha}
              </p>
            )} */}
              {/* <button type="submit" className={styles.enquiryFormSubmitBtn}>
                Pay Now
              </button> */}
            </div>
          </form>
          {/* <div className={styles.websiteTermAndPolicy}>
          By submitting, you consent to CoffeeBeans processing your information
          in accordance with our{" "}
          <Link href="/privacy-policy">Privacy policy</Link>. Please read our{" "}
          <Link href="/terms-of-uses">Terms of Service</Link>
        </div> */}
        </div>
      </section>
      {isModalOpen && (
        <ModalPopUp isOpen={isModalOpen}>
          <ThankYouModal
            orderDetails={orderDetails}
            onClose={modalCloseHandler}
          />
        </ModalPopUp>
      )}
    </>
  );
};

export default ContactForm;
