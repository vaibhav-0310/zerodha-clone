import React from 'react';
 
function Hero() {
    return ( 
        <div className="container-fluid p-5 mb-5 mt-5 c">
            <div className="row text-center"> 
            <div className="d-flex justify-content-center">
                <img src="media/images/homeHero.png" className="image-fluid " alt='Hero Image' style={{width:"53%",height:"100%"}}/>
                </div>
                <h1 className='mt-5 mb-4'>Invest in everything</h1>
                <p className='mb-5' style={{fontSize:"larger"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary p-2 fs-5 mb-5' type='button' style={{width:"15%", margin:"0 auto"}}>SignUp For Free</button>
            </div>
        </div>
     );
}

export default Hero;