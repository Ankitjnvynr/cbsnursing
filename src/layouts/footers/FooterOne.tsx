
import Link from 'next/link';
import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const FooterOne = ({style_2} : any) => {
  return (
    <>
       <footer className={`footer-section fix ${style_2 ? "" : "footer-bg"}`}>
            <div className="container">
                <div className={`footer-widget-wrapper ${style_2 ? "style-4" : ""}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link href="/">
                                        {style_2 ? <img src="assets/img/logo/black-logo-2.svg" alt="img" /> 
                                        :                                        
                                        <img src="assets/img/logo/final-logo1.png" alt="img" style={{height:"200px"}} />
                                        }
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                    Empowering Minds, Shaping Futures – CBS College of Nursing .
                                    </p>
                                    <div className="social-icon">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        {/* <a href="#"><i className="fab fa-dribbble"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a> */}
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/courses">Home</Link></li>
                                    <li><Link href="/courses">Courses</Link></li>
                                    <li><Link href="/courses">Events</Link></li>
                                    <li><Link href="/courses">About</Link></li>
                                    <li><Link href="/courses">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Address Info</h3>
                                </div>
                                {/* <ul className="list-area">
                                    <li><Link href="/about">About CBS College of Nursing</Link></li>
                                    <li><Link href="/instructor">Instructors</Link></li>
                                    <li><Link href="/courses">Best Courses</Link></li>
                                    <li><Link href="/contact">Student Reviews</Link></li>
                                    <li><Link href="/faq">FAQs</Link></li>
                                </ul> */}
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        
                                        <li>
                                            <div className="icon" style={{display:"flex",alignItems:"center",gap:"8px"}}>
                                            <i className="far fa-envelope"></i>                                    
                                            <a href="mailto:ceo@cbscolleges.com" className="link">contact@cbs-nursing.com</a>
                                          </div>
                                        </li>
                                        <li>
                                            <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                                            <IoCallOutline />
                                            <a href="tel:+91-8053111333-444">+91-8053111333-444</a>
                                            </div>
                                        </li>
                                        <li>
                                        <div style={{display:"flex",gap:"8px"}}>
                                        <div className='w-3rem'>
                                        <IoLocationOutline  />
                                        </div>
                                        8 KM. Mile Stone, Jhajjar-Kosli Road,
                                        Fatehpuri , Jhajjar Delhi-NCR (Haryana)
                                        </div>
                                        </li>
                                    </ul>
                                </div>                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Hours of Opnening</h3>
                                </div>
                                {/* <div className="footer-content">
                                    <ul className="contact-info">
                                        <li>
                                            55 Main Street, 2nd block
                                            Malborne, Australia
                                        </li>
                                        <li>
                                            55 Main Street, 2nd block
                                            Malborne, Australia
                                        </li>
                                        <li>
                                            <a href="mailto:info@example.com" className="link">info@example.com</a>
                                        </li>
                                        <li>
                                            <a href="tel:+0001238899">+000 (123) 88 99</a>
                                        </li>
                                    </ul>
                                </div> */}
                                 <div className="footer-content">
                                    <p>Mon: 09:00am-05:00pm</p>
                                    <p>Tue: 09:00am-05:00pm</p>
                                    <p>Wed: 09:00am-05:00pm</p>
                                    <p>Thu: 09:00am-05:00pm</p>
                                    <p>Fri: 09:00am-05:00pm</p>
                                    <p>Sat: 09:00am-05:00pm</p>
                                    <p>Sun: Closed</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`footer-bottom wow fadeInUp ${style_2 ? "style-4" : ""}`} data-wow-delay=".3s"  style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                    <p>Copyright © <Link href="/">Big Byte Innovations Pvt. Ltd</Link>, all rights reserved.</p>
                </div>
            </div>
            {/* <div className={`footer-name ${style_2 ? "style-2" : ""}`}>
                <h2>
                    CBS College of Nursing
                </h2>
            </div> */}
        </footer>
    </>
  );
};

export default FooterOne;