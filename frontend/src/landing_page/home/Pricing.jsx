import React from 'react';

function Pricing() {
    return (  
        <div className="container">
            <div className="row">
            <div className="col-5 p-5">
                <h1 style={{marginBottom:"30px"}}>Unbeatable pricing</h1>
                <p className='text-muted mb-3'>We pioneered the concept of discount broking and price<br></br> transparency in India. Flat fees and no hidden charges.
                </p>
                    <a href="">See Pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col-7 pt-5">
            <div className="row">
               <div className="col-4 d-flex align-items-center" style={{ fontSize: "10px" }}>
                  <img src="/media/images/zero.svg" style={{ width: "50%" }} />
                  <span>Free account opening</span>
                </div>
                <div className="col-4 d-flex align-items-center" style={{ fontSize: "10px" }}>
                  <img src="/media/images/zero.svg" style={{ width: "50%" }} />
                  <span>Free equity delivery and direct mutual funds</span>
                </div>
                <div className="col-4 d-flex align-items-center" style={{ fontSize: "10px" }}>
                    <img src="/media/images/twenty.svg" style={{ width: "50%"}} />
                    <span>Intraday and F&O</span>
                </div>
            </div>
            </div>
            </div>
            </div>
    );
}

export default Pricing;