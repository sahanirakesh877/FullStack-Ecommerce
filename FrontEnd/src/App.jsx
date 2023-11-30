import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./componentsEcomm.jsx/Footer";
import Navbar from "./componentsEcomm.jsx/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Blogs from "./Pages/Blogs";
import Pages from "./Pages/Pages";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import PageNotFound from "./Pages/PageNotFound";
import Top from "./componentsEcomm.jsx/Top";

function App() {
  return (
    <>
      <Top />
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products" Component={Products} />
        <Route path="/products/:id" Component={ProductDetails} />
        <Route path="/blogs" Component={Blogs} />
        <Route path="/pages" Component={Pages} />
        <Route path="/contact" Component={Contact} />
        <Route path="/cart" Component={Cart} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={SignIn} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
      <Footer />
      <ScrollToTop
        smooth
        color="white"
        width="40px"
        style={{ background: "blue" }}
      />
    </>
  );
}

export default App;
