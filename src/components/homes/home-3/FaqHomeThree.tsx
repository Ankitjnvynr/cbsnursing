import Link from "next/link";
import React from 'react';

const FaqHomeThree = () => {
  return (
    <>
      <section className="faq-section fix section-padding pt-0">
            <div className="container">
                <div className="faq-wrapper style-2">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <div className="section-title color-red">
                                    <h6 className="wow fadeInUp pt-4">
                                        Asked Questions
                                    </h6>
                                    <h2 className="wow fadeInUp " data-wow-delay=".3s">
                                        Frequently Asked
                                        Questions   
                                    </h2>
                                </div>
                                <div className="faq-items mt-4 mt-md-0 mb-0">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What nursing programs are offered at CBS College of Nursing?

                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body h-[300px] overflow-y-auto pl-4 pt-2">
                                                
                                                   <p> CBS College of Nursing offers:</p>
                                                   <p> o	General Nursing & Midwifery (GNM) – 3-year diploma program</p>
                                                   <p> o	Bachelor of Science in Nursing (B.Sc Nursing) – 4-year degree program</p>
                                                    {/* <p>o	Post Basic B.Sc Nursing – 2-year program for GNM graduates</p>
                                                   <p> o	Diploma & Certificate Courses – Specialized training in critical care, midwifery, pediatric nursing, and more</p> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".4s">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Is CBS College of Nursing affiliated and recognized?

                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body h-[300px] overflow-y-auto pl-4 pt-2 ">
                                                    <p>
                                                    Yes, CBS College of Nursing is affiliated with a recognized university and approved by the respective Nursing Council, ensuring high-quality education and credibility.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                                            <h2 className="accordion-header" id="headingthree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsethree" aria-expanded="false"
                                                    aria-controls="collapsethree">
                                                  Where is CBS College of Nursing located?

                                                </button>
                                            </h2>
                                            <div id="collapsethree" className="accordion-collapse collapse"
                                                aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body pl-4 pt-2">
                                                    <p>
                                                    CBS College of Nursing is located at 8 KM. Mile Stone, Jhajjar-Kosli Road, Fatehpuri , Jhajjar Delhi-NCR (Haryana). For directions, visit our official website.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-0 wow fadeInUp" data-wow-delay=".8s">
                                            <h2 className="accordion-header" id="headingfour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsefour" aria-expanded="false"
                                                    aria-controls="collapsefour">
                                                 What are the eligibility criteria for nursing programs?

                                                </button>
                                            </h2>
                                            <div id="collapsefour" className="accordion-collapse collapse"
                                                aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body pl-4 pt-2">
                                                    
                                                <p> o	GNM: 10+2 (Science/Arts) with a minimum of 40% marks.</p>
                                                 <p>o	B.Sc Nursing: 10+2 (Science with PCB) with at least 45% marks.</p>
                                                 {/* <p>o	Post Basic B.Sc Nursing: Must have completed GNM and be a registered nurse.</p> */}
                                                 {/* <p>o	Diploma/Certificate Courses: Varies by course; most require a nursing background.</p> */}
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-4 align-items-center justify-content-center">
                                        <div className="hero-button text-center pt-4">
                                            <Link href="/courses-details" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">see more</Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="faq-image-2">
                                <img src="assets/img/faq/3.jpg" alt="img" className="wow img-custom-anim-left" />
                                <div className="bg-shape">
                                    <img src="assets/img/faq/bg-shape.png" alt="img" />
                                </div>
                                {/* <div className="quote-shape float-bob-x">
                                    <img src="assets/img/faq/quote-shape.png" alt="img" />
                                </div> */}
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default FaqHomeThree;