import React from 'react';
import HomePage from "./landing_page/home/HomePage.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./landing_page/signup/SignUp.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import ProductsPage from "./landing_page/products/ProductsPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import Footer from "./landing_page/Footer.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import NotFound from "./landing_page/NotFound.jsx";

function App() {
  return ( 
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/product" element={<ProductsPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
   );
}

export default App;