
import React from 'react';

const ContactArea = () => {
  return (
    <>
      <section className="contact-section section-padding pt-0 fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">Get In Touch</h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Need More Information?
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="contact-box-items">
                            <div className="icon">
                                <i className="flaticon-map"></i>
                            </div>
                            <h5>
                                Academic Location
                            </h5>
                            <div className="image">
                                <img src="assets/img/small-line.png" alt="img" />
                            </div>
                            <h4>
                                {/* 70 Washington Square <br />
                                South New York, NY 10012, <br />
                                 United States */}
                                 8 KM. Mile Stone, Jhajjar-Kosli Road, Fatehpuri , Jhajjar Delhi-NCR (Haryana)
                            </h4>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="contact-box-items">
                            <div className="icon">
                                <i className="flaticon-send-data"></i>
                            </div>
                            <h5>
                                Email Address
                            </h5>
                            <div className="image">
                                <img src="assets/img/small-line.png" alt="img" />
                            </div>
                            <p style={{fontWeight: "bold", fontSize: "21px", color: "black", margin: "10px 0" }}>
                                <a href="contact@cbs-nursing.com">contact@cbs-nursing.com</a> <br />
                                {/* <a href="mailto:www.eduspace.com">www.eduspace.com</a> */}
                                </p>   
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="contact-box-items">
                            <div className="icon">
                                <img src="assets/img/call.png" alt="img" />
                            </div>
                            <h5>
                                Emergency
                            </h5>
                            <div className="image">
                                <img src="assets/img/small-line.png" alt="img" />
                            </div>
                            <h4>
                                <a href="tel:+91-8053111333"> +91-8053111333</a> <br />
                                <a href="tel:+91-8053111444">+91-8053111444</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ContactArea;