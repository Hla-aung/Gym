import "./App.css";
import LandingPage from "./components/LandingPage";
import Heading from "./components/Heading";
import AboutUs from "./components/AboutUs";
import Package from "./components/Package";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return( 
  <main>
    <Heading />
    <LandingPage />
    <AboutUs />
    <Package />
    <ContactUs />
    <Footer />
  </main>
  );
};

export default App;
