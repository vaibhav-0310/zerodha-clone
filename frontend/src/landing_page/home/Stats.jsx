import React from 'react';
import './stats.css';

function Stats() {
    return (  
        <div className="container mt-5 p-5 mb-5">
            <div className="row">
                <div className="col-6 p-5">
                    <h1>Trust with confidence</h1>
                    <h3>Customer-first always</h3>
                    <p className='p'>That's why 1.5+ crore customers trust Zerodha with<br></br>
                        ₹4.5+ lakh crores of equity investments and contribute to
                        <br></br> 15% of daily retail exchange volumes in India.</p>
                    <h3>No spam or gimmicks</h3>
                    <p className='p'>No gimmicks, spam, "gamification", or annoying push<br></br>
                        notifications. High quality apps that you use at your
                        <br></br> pace, the way you like.</p>
                    <h3>The Zerodha universe</h3>
                    <p className='p'>Not just an app, but a whole ecosystem. Our investments<br></br>
                        in 30+ fintech startups offer you tailored services
                        <br></br> specific to your needs.</p>
                    <h3>Do better with money</h3>
                    <p className='p'>With initiatives like Nudge and Kill Switch, we don't just<br></br>
                        facilitate transactions, but actively help you do better
                        <br></br> with your money.</p>
                </div>
                <div className="col-6 pt-5">
                <img src="/media/images/ecosystem.png" style={{width:"100%"}}/>
                <div className='text-center'>
                    <a href="" className='mx-4'>Explore Our Products <i class="fa-solid fa-arrow-right"></i></a>
                    <a href=''>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                </div>
            </div>
            <div className="text-center">
            <img src="/media/images/pressLogos.png" className='mt-4 mb-5 ' style={{width:"60%"}}/>
            </div>
        </div>
    );
}

export default Stats;