import React from "react";

function Team() {
  return (
    <div className="container mb-5">
      <h1 className="text-center">People</h1>
      <div className="row">
        <div className="col-6 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            style={{ borderRadius: "50%", width: "50%" }}
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <p style={{ color: "gray" }}>Founder, CEO</p>
        </div>
        <div className="col-6 text-right pt-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <br></br>
            <br></br>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).<br></br>
            <br></br>
            Playing basketball is his zen.<br></br><br></br>
             Connect on Homepage / TradingQnA /
            Twitter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
