
import Count from '@/common/Count';
import React from 'react';

const AboutArea = () => {
  return (
    <>
    <section className="about-section fix">
            <div className="about-wrapper-5">
                <div className="container">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-6">
                            <div className="section-title mb-0 mt-2">
                                <h6 className="wow fadeInUp" style={{fontSize:"30px"}}>Our Vision</h6>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Shaping Skilled <br />
                                 Hands and Caring Hearts for <br />
                                 Global Healthcare
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content ">
                                <p className="wow fadeInUp" data-wow-delay=".3s">
                                We aspire to be a leading institution in nursing education, fostering excellence in healthcare through 
                                innovative learning, research, and compassionate care. 
                                Our goal is to prepare future nursing professionals dedicated to improving global health standards and
                                 making a meaningful impact on society.
                                </p>
                                <p>
                                With a strong commitment to academic excellence and professional integrity, 
                                we strive to cultivate skilled, ethical, and empathetic nurses. 
                                Through cutting-edge education, hands-on training, and interdisciplinary
                                collaboration, we empower students to become leaders, innovators, and advocates
                                 in the field of healthcare.

                                </p>
                                <div className="counter-box-items">
                                    <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                        {/* <h2><span className="odometer" data-count="23">
                                          <Count number={23} text='+' />
                                          </span></h2>
                                        <p>Years Of Experience</p> */}
                                    </div>
                                    {/* <p className="text wow fadeInUp" data-wow-delay=".5s">
                                        Education not only empowers people pursue their career goals
                                        also encourages responsible.
                                    </p> */}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content ">
                                
                                <p className="wow fadeInUp" data-wow-delay=".3s">
                                The mission of CBS Group of Institutions is to deliver world-class education
                                 and hands-on training, nurturing students into competent engineers, 
                                 visionary managers, and compassionate nursing professionals capable of 
                                 addressing the evolving challenges of a global society.

                                In our nursing program, we are dedicated to cultivating a generation of 
                                nursing professionals who embody clinical excellence, compassionate care 
                             and innovative thinking. Through cutting-edge education
                                 and a strong emphasis on holistic development,
                                we empower our students to become adaptable and skilled 
                                caregivers ready to make a lasting impact on global healthcare.
                                Our mission is to instill a lifelong passion for learning, leadership qualities,
                                and a sense of social responsibility.</p>
                                </div>
                        </div>  
                        <div className="col-lg-6" >
                            <div className="section-title mb-0">
                                <h6 className="wow fadeInUp" style={{fontSize:"30px"}}>Our Mission</h6>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Empowering Nurses to Lead with Knowledge and Compassion.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    </>
  );
};

export default AboutArea;