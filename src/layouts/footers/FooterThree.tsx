
import Link from 'next/link';
import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const FooterThree = () => {
  return (
    <>
       <footer className="footer-section-3 fix">
            <div className="circle-shape">
                <img src="assets/img/footer/circle.png" alt="logocbscollegeOfNursing" />
            </div>
            <div className="vector-shape">
                <img src="assets/img/footer/Vector.png" alt="cross-icon" />
            </div>
            <div className="container">
                <div className="footer-widget-wrapper style-2">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link href="/">
                                        <img width={200} src="assets/img/logo/final-logo1.png" alt="cbs-collegeOfNursing-logo" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                    Empowering Minds, Shaping Futures – CBS College of Nursing.
                                    </p>
                                    <div className="social-icon">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                       
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
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="./courses-details">Courses</Link></li>
                                    <li><Link href="/">Events</Link></li>
                                    <li><Link href="/">About</Link></li>
                                    <li><Link href="/">Contact</Link></li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget style-left">
                                <div className="widget-head">
                                   <h3>Address Info</h3>
                                </div>
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
                        <div className="col-xl-4 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Hours of Operation</h3>
                                </div>
                                <div className="footer-content">
                                    <p>Mon: 09:00am-05:00pm</p>
                                    <p>Tue: 09:00am-05:00pm</p>
                                    <p>Wed: 09:00am-05:00pm</p>
                                    <p>Thu: 09:00am-05:00pm</p>
                                    <p>Fri: 09:00am-05:00pm</p>
                                    {/* <div className="footer-input">
                                        <div className="icon">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <input type="email" id="email2" placeholder="Email Address" />
                                        <button className="newsletter-btn" type="submit">
                                            Subscribe
                                        </button>
                                    </div> */}
                                    <p>Sat: 09:00am-05:00pm</p>
                                    <p>Sun: Closed</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style-3">
                <div className="container">
                    <div className="footer-bottom-wrapper">
                        <p>Copyright © <Link href="https://bigbyteworld.com/"> Big Byte Innovations Pvt. Ltd.</Link> all rights reserved.</p>
                        <ul className="footer-menu wow fadeInUp" data-wow-delay=".5s">
                           
                            <li>
                                <Link href="/">
                                    FAQs 
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};

export default FooterThree;