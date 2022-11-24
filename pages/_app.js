import Footer from "../components/ui/footer";
import "../styles/globals.css";
import Header from "../components/ui/header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
