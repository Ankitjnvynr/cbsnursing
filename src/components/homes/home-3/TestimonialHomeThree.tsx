"use client";
import Count from '@/common/Count';
import { useState, useEffect } from 'react';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaBookMedical } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHospitalUser } from "react-icons/fa";



const setting = {
  spaceBetween: 30,
  speed: 2000,
  loop: true,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".dot",
      clickable: true,
  },
  breakpoints: {
      1199: {
          slidesPerView: 3,
      },
      991: {
          slidesPerView: 2,
      },
      767: {
          slidesPerView: 1,
      },
      575: {
          slidesPerView: 1,
      },
      0: {
          slidesPerView: 1,
      },
  },
}




const TestimonialHomeThree = () => {

    
        const [isMobile, setIsMobile] = useState(false);
      
        useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Detect when screen width is ≤ 768px
          };
      
          window.addEventListener('resize', handleResize);
          handleResize(); // Call initially to set the correct state
      
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        const containerStyle = {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        //   flexDirection:isMobile?"column":"row",
        };
      
        const boxStyle = {
          flex: isMobile ? "1 1 100%" : "1 1 calc(33.33% - 20px)", // Change layout for mobile
          minWidth: "300px",
          textAlign: "center",
          padding: "20px",
          color: "white",
          borderRadius: "10px",
        };
  return (
    <>
      <section className="testimonial-section-3 fix pt-0 section-padding bg-cover" style={{background: `url(/assets/img/testimonial/bg2.png)`, backgroundAttachment: "fixed"}}>
            <div className="counter-section-2 section-padding pt-0">
                <div className="container custom-container">
                    <div className="counter-wrapper-2 bg-cover" style={{background: `url(/assets/img/counter-bg.jpg)`}}>
                    <div className='flex justify-center'>
                    <div className='medical-resources-heading  ' style={boxStyle}>
                        <h2 className='text-white '>Medical Resources</h2>
                    </div>
                    <div className='medical-resources ' style={containerStyle}>
                        <div className="counter-items wow fadeInUp mb-4 center " data-wow-delay=".2s" style={boxStyle}>
                            <div className="icon ">
                                {/* <i className="flaticon-success"></i> */}
                                <FaHospitalUser />

                            </div>
                            {/* <div className="content">
                                <h2><span className="odometer" data-count="150"> <Count number={150} text='+'  /> </span></h2>
                                <p>Student Enrolled </p>
                            </div> */}
                            <div className='content'>
                            <h3 className='text-white'>Nursing Foundation Lab</h3>
                            <p>Used for practicing basic nursing procedures and patient care skills.
                            </p>
                            </div>
                        </div>
                        <div className="counter-items wow fadeInUp mb-4 center  w-full md:w-1/3" data-wow-delay=".4s" style={boxStyle}>
                            <div className="icon">
                                {/* <i className="flaticon-medal"></i> */}
                                <FaUserDoctor />
                            </div>
                            <div className="content">
                                {/* <h2><span className="odometer" data-count="100"> <Count number={100} text='%'  /> </span></h2>
                                <p>Practical Training</p> */}
                                <h3 className='text-white'>Anatomy & Physiology Lab</h3>
                                <p>Helps students understand the human body’s structure and function.
                                </p>
                            </div>
                        </div>
                        <div className="counter-items wow fadeInUp mb-4 center  w-full md:w-1/3" data-wow-delay=".6s" style={boxStyle}>
                            <div className="icon">
                                {/* <i className="flaticon-satisfaction"></i> */}
                                <FaBookMedical />
                            </div>
                            <div className="content">
                                {/* <h2><span className="odometer" data-count="99"> <Count number={99} text='%'  /> </span></h2>
                                <p>Satisfaction Rate</p> */}
                                <h3 className='text-white'>Community Health Nursing Lab</h3>
                                <p>Prepares students for healthcare in rural and community settings.
                                </p>
                            </div>
                        </div>
                        {/* <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
                            <div className="icon">
                                <i className="flaticon-instructor"></i>
                            </div>
                            <div className="content">
                                <h2><span className="odometer" data-count="10"> <Count number={10} text='+'  /> </span></h2>
                                <p>Expert Instructors</p>
                            </div>
                        </div> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="text-white wow fadeInUp">
                        Students Reviews
                    </h6>
                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                        258+ Students Say About <br />
                        Our University
                    </h2>
                </div>
                <Swiper
                    spaceBetween={30}
                    speed={2000}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,  
                    }}
                    pagination={{
                        el: ".dot",
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    slidesPerView={isMobile ? 1 : 3} 
                    breakpoints={{
                      1199: {
                          slidesPerView: 3,
                      },
                      991: {
                          slidesPerView: 2,
                      },
                      767: {
                          slidesPerView: 1,
                      },
                      575: {
                          slidesPerView: 1,
                      },
                      0: {
                          slidesPerView: 1,
                      },
                  }}
                 className="swiper testimonial-slider-3">
               
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>Arti Sharma</h3>
                                    <span>Bsc Nursing</span>
                                </div>
                                {/* <div className="client-img bg-cover" style={{background: `url(/assets/img/testimonial/client-1.png)`}}></div> */}
                                <p>
                                    "CBS College of Nursing provided excellent practical training with supportive faculty, making my learning experience smooth and enriching. "
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>Isha Sukla</h3>
                                    <span>GNM</span>
                                </div>
                                {/* <div className="client-img bg-cover" style={{background: `url(/assets/img/testimonial/client-2.png)`}}></div> */}
                                <p>
                                "CBS College of Nursing offers excellent faculty, well-equipped labs, and great clinical exposure, making it a perfect place for nursing education."
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>Adarsh </h3>
                                    <span>GNM</span>
                                </div>
                                {/* <div className="client-img bg-cover" style={{background: `url(/assets/img/testimonial/client-3.png)`}}></div> */}
                                <p>
                                "The supportive environment and highly experienced teachers at CBS College of Nursing helped me build confidence for my nursing career."
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>Himani</h3>
                                    <span>Bsc Nursing</span>
                                </div>
                                {/* <div className="client-img bg-cover" style={{background: `url(/assets/img/testimonial/client-2.png)`}}></div> */}
                                <p>
                                "CBS College of Nursing ensures quality education with a perfect balance of theory and practical learning, preparing students for challenges."
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                   
                    <div className="swiper-dot white-color text-center mt-5">
                        <div className="dot"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    </>
  );
};

export default TestimonialHomeThree;