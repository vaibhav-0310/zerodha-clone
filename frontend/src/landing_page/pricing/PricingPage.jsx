import React from 'react';
import Navbar from "../Navbar.jsx";
import Hero from "./Hero.jsx";
import Brokerage from "./Brokerage.jsx";
import OpenAccount from "../OpenAccount.jsx";
import Footer from "../Footer.jsx";

function PricingPage() {
    return ( 
        <>
        <Hero/>
        <Brokerage/>
        <OpenAccount/>
  
        </>
     );
}

export default PricingPage;