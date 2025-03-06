"use client";
import Link from 'next/link';
import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const HeroHomeThree = () => {
  return (
    <>
      <section className="hero-section-3 hero-3">
            <Swiper 
                    loop={true}
                    slidesPerView={1}
                    effect="fade"
                    speed={3000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".array-prev",
                        prevEl: ".array-next",
                    }}
                    pagination={{
                        el: ".dot",
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation, EffectFade, Autoplay]}
                    className="swiper hero-slider"> 
                    {/* <SwiperSlide className="swiper-slide ">
                        <div className="slider-bg bg-cover  " style={{background: `url(/assets/img/hero/hero-3.jpg)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`,
                                  backgroundRepeat: 'no-repeat',
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center'
                  
                            }}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.7s">welcome to CBS College of Nursing</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.9s" className='text-white '>
                                        Caring Hands – 
                                        Begin Your Nursing Journey Today .
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="2.1s">
                                        CBS College of Nursing offers the B.Sc Nursing program and GNM program that prepares students to become nurses.
                                        </p>
                                        <div className="hero-button" >
                                            <Link href="/courses-details" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn" >Reserve your seat</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover " style={{background: `url(/assets/img/hero/abc.jpg)`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                            
                        }}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                
                            }}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.7s">welcome to CBS College of Nursing</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.9s">
                                            Unlock Your Potential
                                            with CBS College of Nursing
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="2.1s">
                                            Education is the cornerstone of personal and societal development, providing
                                            individuals with the knowledge, skills, and tools needed
                                        </p>
                                        <div className="hero-button">
                                            <Link href="/courses-details" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">Reserve your seat</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover" style={{background: `url(/assets/img/hero/hero-51.png)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`,
                                  backgroundRepeat: 'no-repeat',
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center'
                  
                            }}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.7s">welcome to CBS College of Nursing</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.9s">
                                        Your Passport to an Exciting Global Nursing Career!
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="2.1s">
                                        Equips you with the qualifications to excel in global healthcare with recognized programs and overseas placement. 
                                        </p>
                                        <div className="hero-button">
                                            <Link href="/courses-details" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">Reserve your seat</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </SwiperSlide> 
                                
                <div className="array-button">
                    <button className="array-prev"><i className="far fa-chevron-left"></i></button>
                    <button className="array-next"><i className="far fa-chevron-right"></i></button>
                </div>
               
            </Swiper>
           
            <div className="feature-section-3 style-margin-top section-padding pb-0">
                <div className="container">
                    <div className="feature-wrapper-3">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="feature-card-items">
                                    <div className="icon">
                                        <i className="flaticon-graduation"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Scholarship Facility</h5>
                                        <p>
                                        Our Scholarship Program is designed to support deserving and meritorious students, ensuring that they have access to world-class nursing education.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="feature-card-items">
                                    <div className="icon">
                                        <i className="flaticon-instructor"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Expert Instructors</h5>
                                        <p>
                                        Our instructors bring a wealth of practical experience and academic expertise, ensuring that students receive comprehensive training in real-world medical scenarios. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="feature-card-items">
                                    <div className="icon">
                                        <i className="flaticon-certficate"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Certificate Program</h5>
                                        <p>
                                        CBS college of Nursing offers specialized certificate programs designed to equip students with focused skills and advanced training in key areas of healthcare.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="feature-card-items">
                                    <div className="icon">
                                        <i className="flaticon-school"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Graduate Admissions</h5>
                                        <p>
                                        Our admission process focuses on selecting highly skilled and dedicated candidates who are passionate about patient care , well being and professional growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default HeroHomeThree;