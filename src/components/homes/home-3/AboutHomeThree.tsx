
import Count from '@/common/Count';
import Link from 'next/link';
import React from 'react';

const AboutHomeThree = () => {
  return (
    <>
      <div className="about-section-3 section-padding">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4 justify-content-between">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h6 className="text-white wow fadeInUp">
                                        Who we are
                                    </h6>
                                    <h3 className="text-white wow fadeInUp " data-wow-delay=".3s">
                                    "CBS College of Nursing – A Premier Institution Shaping Future Healthcare Leaders with Global Excellence and Compassionate Care."
                                    </h3>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp " data-wow-delay=".5s" style={{fontSize:"16px"}}>
                                CBS College of Nursing is an institution dedicated to excellence in nursing education and global healthcare training. We nurture future healthcare professionals with a strong foundation in clinical expertise, ethical care, and international standards. With state-of-the-art facilities, experienced faculty, and strong overseas opportunities, CBS College empowers students to build successful careers in nursing, both locally and globally.
                                </p>
                                <Link href="/" className="theme-btn red-btn wow fadeInUp" data-wow-delay=".3s">Learn About Us</Link>
                                <div className="about-counter-items">
                                    <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                        <h3><span className="odometer" data-count="23">
                                          <Count number={24} text='/7'  />
                                          </span></h3>
                                        <p>Student Support</p>
                                    </div>
                                    <div className="counter-content wow fadeInUp" data-wow-delay=".5s">
                                        <h3><span className="odometer" data-count="99">
                                          <Count number={99} text='%' />
                                          </span></h3>
                                        <p>Happy Students</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-image" >
                                <img src="assets/img/about/004.png" alt="img" className="wow img-custom-anim-left " />
                                {/* <div className="bg-shape" >
                                    <img src="assets/img/about/bg-shape.png" alt="img" />
                                </div> */}
                                <div className="counter-box">
                                    {/* <p>More then</p> */}
                                    <h2><span className="odometer" data-count="2800">
                                      <Count number={99} text='%' />
                                      </span></h2>
                                    <p>Placement Guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default AboutHomeThree;