import React from 'react';

function Awards() {
    return ( 
        <div className="container ">
            <div className="row">
                <div className="col-6 mt-2 p-5">
                    <img src="/media/images/largestBroker.svg"/>
                </div>
                <div className="col-6 mt-2 p-5">
                   <h1 style={{fontWeight:"500",fontSize:"45px"}} className='mb-3'>Largest stock broker in India</h1>
                   <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order
                    volumes in India daily by trading and investing in: 
                   </p>
                   <div className="row">
                    <div className="col-6">
                   <ul>
                    <li>
                        <p>Futures and Options</p>
                    </li>
                    <li>
                        <p>Commodity derivates</p>
                    </li>
                    <li>
                        <p>Currency derivative</p>
                    </li>
                   </ul>
                   </div>
                   <div className="col-6">
                    <ul>
                    <li>
                        <p>Stocks & IPOs</p>
                    </li>
                    <li>
                        <p>Direct mutual funds</p>
                    </li>
                    <li>
                        <p>Bonds and Govt. security</p>
                    </li>
                    </ul>
                   </div>
                   </div>
                   <img src="/media/images/pressLogos.png" className='mt-4 mb-5' style={{width:"95%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;