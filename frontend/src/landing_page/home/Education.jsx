import React from 'react';

function Education() {
    return (  
        <div className="container mb-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="/media/images/education.svg"/>
                </div>
                <div className="col-6 p-5">
                    <h1>Free and open market education</h1>
                    <p className='mb-3  '>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                     <a href=''>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-5 mb-3 '>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href=''>Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;