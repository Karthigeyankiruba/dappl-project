import BussinesBenefits from "./components/BussinesBenefits";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductsToORder from "./components/ProductsToORder";
import Review from "./components/Review";
import Sectors from "./components/Sectors";
import Subscription from "./components/Subscription";
import Testimonial from "./components/Testimonial";
import User2 from "./components/User2";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Home />
    <Cards />
    <User2 />
    <Review />
    <BussinesBenefits />
    <Sectors />
    <ProductsToORder />
    <Subscription />
    <Testimonial />
    <Footer />
    </div>
  );
}

export default App;
