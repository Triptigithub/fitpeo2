import React from 'react';
import './Donate.css';

const Donate = () => {
  return (
    <section className="donationSection">
      <div className="donationContainer">
        <div className="donationGrid">

          <div className="donationSidebar">
            <div className="stickyTitle">
              <h2 className="sectionHeading">Donate to D!</h2>
            </div>
          </div>

          <div className="donationContentArea">
            <div className="donationTextBlock">
              <p className="donationDescription">
                Design Declares is a CIC and would not exist without our dedicated team of
                co-steers, volunteers, and our passionate community working towards change in the
                creative industry. Your support can go a long way, and helps us to continue the
                valuable work needed in tackling the climate crises. If you believe in the work we
                do, please consider a small donation to help us on our journey for a more equitable
                and just planet.
              </p>
              <div className="donationButtonGroup">
                <a href="https://wise.com/pay/r/uZ5h3pxRMmTE_pk" target="_blank" className="donationBtn">Donate £10</a>
                <a href="https://wise.com/pay/r/u2IiQNt2ebixruk" target="_blank" className="donationBtn">Donate £20</a>
                <a href="https://wise.com/pay/r/2vqUbqPfU9hvVLE" target="_blank" className="donationBtn">Donate £50</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Donate;
