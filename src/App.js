import BussinesBenefits from "./components/BussinesBenefits";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Review from "./components/Review";
import Sectors from "./components/Sectors";
import Subscription from "./components/Subscription";
import Testimonial from "./components/Testimonial";
import User3 from "./components/User3";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Home />
    <Cards />
    <User3 />
    <Review />
    <BussinesBenefits />
    <Sectors />
    <Products />
    <Subscription />
    <Testimonial />
    <Footer />
    </div>
  );
}

export default App;
