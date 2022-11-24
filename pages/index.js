import Head from "next/head";
import Image from "next/image";
import Banner from "../components/modules/home/banner";
import styles from "../styles/Home.module.css";
import CourseTiles from "../components/modules/home/courseTiles";
import Trainers from "../components/modules/home/trainers";
import TrainingDetails from "../components/modules/home/trainingDetails";
import ContactForm from "../components/ui/contactForm";
import ContactUs from "../components/modules/home/contactUs";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Tech Lead Training | CoffeeBeans</title>
        <link rel="icon" href="/icons/CBColorIcon.svg" />
        <meta
          name="description"
          content="We empower organizations to transform their business through the use of advanced technologies. We build data-driven solutions that drive innovation and growth."
        />
      </Head>
      <Banner />
      <CourseTiles />
      <Trainers />
      <TrainingDetails />
      <ContactUs />
      <ContactForm />
    </main>
  );
}
