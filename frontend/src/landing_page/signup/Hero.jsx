import React from 'react';

function Hero() {
    return ( 
        <>
        <div className="container  mt-5 mb-5 c">
            <div className="co text-center">
            <h1 className='top' style={{fontSize:"45px"}}>Open a free demat and trading account online</h1>
            <p>Start investing brokerage free and join a community of 1.5+ crore investors and traders</p>
            </div>
            <div className="row mt-5" style={{marginTop:"15 px !important"}}>
                <div className="col-6 p-5">
                    <img src="/media/images/signup.png"  style={{width:"100%"}}/>
                </div>
                <div className="col-6 p-5" >
                    <form>
                        <h2 className='mt-5'>Signup now</h2>
                        <p>Or track your existing application</p>
                        <span className='india' ><img src="/media/images/india-flag.svg"/> 91</span>
                        <input type='number' placeholder='Enter your mobile number' className='p-3' style={{width:"300px"}} autoFocus min={1000000000} max={9999999999}/><br></br><br></br>
                        <button className='btn btn-primary p-2 mb-3'>Get OTP</button>
                        <p className='agree'>By proceeding, you agree to the Zerodha terms & privacy policy</p>
                    </form>
                </div>
            </div>
        </div>
        </>
     );
}

export default Hero;