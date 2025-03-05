"use client"
import Count from '@/common/Count';
import React from 'react';

const AboutCounter = () => {
  return (
    <>
    <div style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", margin: "20px 0", paddingTop:"50px"}}>
  <h2>"Preparing Compassionate Caregivers, Inspiring Healthcare Leaders!"</h2>
</div>
<div style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", margin: "20px 90px 0 90px", paddingBottom:""}}>
    <p>CBS College of Nursing is dedicated to shaping the future of healthcare by providing high-quality education, hands-on training, and compassionate care.</p>
</div>

    <div className="counter-section-23 section-padding pt-0" style={{width:"90%",display:"flex",justifyContent:"center",marginLeft:"5.5vw"}} >
            <div className="container custom-container" style={{paddingTop:"3rem"}}>
                <div className="counter-wrapper-2 bg-cover" style={{background: `url(/assets/img/counter-bg.jpg)`}}>
                    <div className="counter-items">
                        <div className="icon">
                            <i className="flaticon-success"></i>
                        </div>
                        <div className="content">
                            <h2><span className="odometer" data-count="100"> <Count number={100} text='+' /> </span></h2>
                            <p>Student Enrolled</p>
                        </div>
                    </div>
                    <div className="counter-items">
                        <div className="icon">
                            <i className="flaticon-medal"></i>
                        </div>
                        <div className="content">
                            <h2><span className="odometer" data-count="100"> <Count number={24} text='/7' /> </span></h2>
                            <p>Student Support</p>
                        </div>
                    </div>
                    <div className="counter-items">
                        <div className="icon">
                            <i className="flaticon-satisfaction"></i>
                        </div>
                        <div className="content">
                            <h2><span className="odometer" data-count="90"><Count number={90} text='%' /></span></h2>
                            <p>Happy Students</p>
                        </div>
                    </div>
                    <div className="counter-items">
                        <div className="icon">
                            <i className="flaticon-instructor"></i>
                        </div>
                        <div className="content">
                            <h2><span className="odometer" data-count="15"><Count number={15} text='+' /></span></h2>
                            <p>Instructors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  );
};

export default AboutCounter;