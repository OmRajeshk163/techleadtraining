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

const ContactForm = () => {
  const [formState, setFormState] = useState("unSubmitted");

  const formStates = {
    unSubmitted: "Submit",
    submitting: "Submitting...",
    submitted: "Submitted",
  };
  const contactFormLink = "/api/contactForm";

  const { values, errors, handleChange, setValues, handleSubmit, setErrors } =
    useForm(submit, validationGeneral, formState);

  async function submit() {
    alert();
    setFormState("submitting");
    try {
      console.log("values", values);
      //const res = await axios.post(contactFormLink, { ...values });
      // if (res && res.data.success) {
      //   setFormState("submitted");
      //   setValues({});
      //   logSuccess();
      // }
    } catch (err) {
      console.error("contactForm submit Error", err);
    }
  }

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
              {errors.yearsOfExp && (
                <p className={styles.enquiryFormErrorMassage}>
                  {errors.yearsOfExp}
                </p>
              )}
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
              <button type="submit" className={styles.enquiryFormSubmitBtn}>
                Pay Now
              </button>
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
    </>
  );
};

export default ContactForm;
