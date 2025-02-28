"use client";
import Link from "next/link";
import React, { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import { MdCastForEducation } from "react-icons/md";

const CoursesDetailsTwoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
      {/* video modal end */}
      <section className="courses-details-section section-padding pt-0">
        <div className="container">
          <div className="courses-details-wrapper">
            <div className="courses-image">
              <img src="assets/img/courses/details-4.jpg" alt="img" />
              <a
                onClick={() => setIsVideoOpen(true)}
                style={{ cursor: "pointer" }}
                className="video-btn ripple video-popup"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="courses-details-items sticky-style">
                  <div className="breadcrumb-content">
                    <h1>BSc Nursing</h1>
                    {/* <div className="courses-breadcrumb-items">
                                        <div className="client-image-items">
                                            <img src="assets/img/courses/client-4.png" alt="img" />
                                            <div className="client-content">
                                                <span>Instructor</span>
                                                <h5>Patrick C. Amore</h5>
                                            </div>
                                        </div>
                                        <div className="client-image-items">
                                            <div className="client-content">
                                                <span>Instructor</span>
                                                <h5>Web Design</h5>
                                            </div>
                                        </div>
                                        <div className="client-image-items">
                                            <div className="client-content">
                                                <span>Price</span>
                                                <h5>$100.00</h5>
                                            </div>
                                        </div>
                                        <div className="client-image-items">
                                            <div className="client-content">
                                                <span>Reviews</span>
                                                <div className="star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <b>(15)</b>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                  </div>
                  <div className="courses-details-content mt-0">
                    <ul className="nav">
                      <li
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <a
                          href="#Course"
                          data-bs-toggle="tab"
                          className="nav-link active"
                        >
                          Course Info
                        </a>
                      </li>
                      <li
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        {/* <a href="#Curriculum" data-bs-toggle="tab" className="nav-link">
                                                Curriculum
                                            </a> */}
                      </li>
                      <li
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        {/* <a href="#Instructors" data-bs-toggle="tab" className="nav-link">
                                                Instructors
                                            </a> */}
                      </li>
                      <li
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        {/* <a href="#Reviews" data-bs-toggle="tab" className="nav-link bb-none">
                                                Reviews
                                            </a> */}
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="Course" className="tab-pane fade show active">
                        <div className="description-content">
                          <h3>Description</h3>
                          <p className="mb-3">
                          Bachelor of Science in Nursing (B.Sc. Nursing) – Overview
                          B.Sc. Nursing is a four-year undergraduate program that focuses on developing students into skilled nursing professionals. The course is designed to provide in-depth knowledge of nursing, healthcare, and medical sciences, preparing graduates to work in hospitals, clinics, and community healthcare settings.
                          </p>
                          <p>
                          Eligibility Criteria
                          Educational Qualification: 10+2 with Physics, Chemistry, and Biology (PCB) as mandatory subjects.
                          Minimum Marks: Typically 45-50% aggregate (varies by institution).
                          Age Limit: Minimum 17 years at the time of admission.
                          Entrance Exams: Some universities conduct entrance exams like NEET, AIIMS Nursing, JIPMER Nursing, or state-level exams.
                          </p>
                          <h3 className="mt-5">
                            What you'll learn in this course?
                          </h3>
                          <p className="mb-4">
                          The B.Sc. Nursing course provides in-depth knowledge of nursing, medical sciences, and healthcare management. Throughout the four years, you will learn:
                          </p>
                          <div className="row g-4 mb-5">
                            <div className="col-lg-6">
                              <ul className="list-item">
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Fundamental Nursing Skills

                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Medical & Biological Sciences

                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Specialized Nursing Fields

                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Advanced Nursing Procedures

                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Healthcare Management & Research

                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6">
                              <ul className="list-item">
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Hands-on Clinical Training (Internship)

                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  ICU & Critical Care Nursing
                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Mental Health & Psychiatric Nursing
                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  First aid & emergency response

                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Patient Rehabilitation & Palliative Care
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h3>How to Benefit from this Course</h3>
                          <p>
                            This BSc Nursing program prepares students for a
                            professional career in healthcare by providing
                            comprehensive knowledge and hands-on experience in
                            nursing. Graduates can work in hospitals, clinics,
                            public health organizations, and research
                            institutions, contributing to the well-being of
                            individuals and communities through high-quality
                            nursing care.
                          </p>
                        </div>
                      </div>
                      <div id="Curriculum" className="tab-pane fade">
                        <div className="course-curriculum-items">
                          <h3>Course Curriculum</h3>
                          <div className="courses-faq-items">
                            <div className="accordion" id="accordionExample">
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="headingOne"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >
                                    Intro to UX/UI Design
                                  </button>
                                </h2>
                                <div
                                  id="collapseOne"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      <li>
                                        <span>
                                          <i className="fas fa-file-alt"></i>
                                          Lesson 1 : Introduction to UX/UI
                                          Design
                                        </span>
                                        <span>
                                          <i className="far fa-lock"></i> (45:00
                                          m)
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-file-alt"></i>
                                          Lesson 2 : Design Thinking & User
                                          Research
                                        </span>
                                        <span>
                                          <i className="far fa-lock"></i> (45:00
                                          m)
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-file-alt"></i>
                                          Lesson 3 : Wireframing & Prototyping
                                        </span>
                                        <span>
                                          <i className="far fa-lock"></i> (45:00
                                          m)
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-file-alt"></i>
                                          Lesson 4 : Visual Design Principles
                                        </span>
                                        <span>
                                          <i className="far fa-lock"></i> (45:00
                                          m)
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="headingTwo"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                  >
                                    Q. How do I get started with CRM software?
                                  </button>
                                </h2>
                                <div
                                  id="collapseTwo"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingTwo"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      <li>
                                        <span>
                                          <i className="fas fa-file-alt"></i>
                                          Lesson 1 : Introduction to UX/UI
                                          Design
                                        </span>
                                        <span>
                                          <i className="far fa-lock"></i> (45:00
                                          m)
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-file-alt"></i>
                                          Lesson 2 : Design Thinking & User
                                          Research
                                        </span>
                                        <span>
                                          <i className="far fa-lock"></i> (45:00
                                          m)
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-file-alt"></i>
                                          Lesson 3 : Wireframing & Prototyping
                                        </span>
                                        <span>
                                          <i className="far fa-lock"></i> (45:00
                                          m)
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-file-alt"></i>
                                          Lesson 4 : Visual Design Principles
                                        </span>
                                        <span>
                                          <i className="far fa-lock"></i> (45:00
                                          m)
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mb-0">
                                <h2
                                  className="accordion-header"
                                  id="headingthree"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapsethree"
                                    aria-expanded="false"
                                    aria-controls="collapsethree"
                                  >
                                    Q. Can I customize CRM software my business
                                    needs?
                                  </button>
                                </h2>
                                <div
                                  id="collapsethree"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingthree"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      <li>
                                        <span>
                                          <i className="fas fa-file-alt"></i>
                                          Lesson 1 : Introduction to UX/UI
                                          Design
                                        </span>
                                        <span>
                                          <i className="far fa-lock"></i> (45:00
                                          m)
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-file-alt"></i>
                                          Lesson 2 : Design Thinking & User
                                          Research
                                        </span>
                                        <span>
                                          <i className="far fa-lock"></i> (45:00
                                          m)
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-file-alt"></i>
                                          Lesson 3 : Wireframing & Prototyping
                                        </span>
                                        <span>
                                          <i className="far fa-lock"></i> (45:00
                                          m)
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-file-alt"></i>
                                          Lesson 4 : Visual Design Principles
                                        </span>
                                        <span>
                                          <i className="far fa-lock"></i> (45:00
                                          m)
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="Instructors" className="tab-pane fade">
                        <div className="instructors-items">
                          <h3>Instructors</h3>
                          <div className="instructors-box-items">
                            <div className="thumb">
                              <img
                                src="assets/img/courses/instructors-1.png"
                                alt="img"
                              />
                            </div>
                            <div className="content">
                              <h4>Norman K. Zapata</h4>
                              <span>Lead UX/UI Designer</span>
                              <p>
                                UX/UI design courses offer a comprehensive
                                introduction to the world of user experience and
                                user interface design
                              </p>
                              <div className="social-icon">
                                <a href="#">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-dribbble"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-behance"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="instructors-box-items style-2">
                            <div className="thumb">
                              <img
                                src="assets/img/courses/instructors-2.png"
                                alt="img"
                              />
                            </div>
                            <div className="content">
                              <h4>Ryan M. Carmichael</h4>
                              <span>Product Designer</span>
                              <p>
                                UX/UI design courses offer a comprehensive
                                introduction to the world of user experience and
                                user interface design
                              </p>
                              <div className="social-icon">
                                <a href="#">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-dribbble"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-behance"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="Reviews" className="tab-pane fade">
                        <div className="courses-reviews-items">
                          <h3>Course Reviews</h3>
                          <div className="courses-reviews-box-items">
                            <div className="courses-reviews-box">
                              <div className="reviews-box">
                                <h2>
                                  <span className="count">4.8</span>
                                </h2>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <p>856+ Reviews</p>
                              </div>
                              <div className="reviews-ratting-right">
                                <div className="reviews-ratting-item">
                                  <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </div>
                                  <div className="progress">
                                    <div className="progress-value style-two"></div>
                                  </div>
                                  <span>(10)</span>
                                </div>
                                <div className="reviews-ratting-item">
                                  <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star color-2"></i>
                                  </div>
                                  <div className="progress">
                                    <div className="progress-value style-three"></div>
                                  </div>
                                  <span>(08)</span>
                                </div>
                                <div className="reviews-ratting-item">
                                  <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star color-2"></i>
                                    <i className="fas fa-star color-2"></i>
                                  </div>
                                  <div className="progress">
                                    <div className="progress-value style-three"></div>
                                  </div>
                                  <span>(08)</span>
                                </div>
                                <div className="reviews-ratting-item">
                                  <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star color-2"></i>
                                    <i className="fas fa-star color-2"></i>
                                    <i className="fas fa-star color-2"></i>
                                  </div>
                                  <div className="progress">
                                    <div className="progress-value style-four"></div>
                                  </div>
                                  <span>(01)</span>
                                </div>
                                <div className="reviews-ratting-item">
                                  <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star color-2"></i>
                                    <i className="fas fa-star color-2"></i>
                                    <i className="fas fa-star color-2"></i>
                                    <i className="fas fa-star color-2"></i>
                                  </div>
                                  <div className="progress">
                                    <div className="progress-value style-five"></div>
                                  </div>
                                  <span>(00)</span>
                                </div>
                              </div>
                            </div>
                            <div className="instructors-box-items">
                              <div className="thumb">
                                <img
                                  src="assets/img/courses/instructors-3.png"
                                  alt="img"
                                />
                              </div>
                              <div className="content">
                                <h4>Maria L</h4>
                                <span>Junior UX Designer</span>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <p>
                                  "I enrolled in this UX/UI design course with
                                  minimal knowledge the field, and it completely
                                  transformed my understanding."
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="courses-sidebar-area">
                  <div className="courses-items">
                    <div className="courses-image">
                      <img src="assets/img/courses/23.jpg" alt="img" />
                      <h3 className="courses-title">BSc Nursing</h3>
                      <h4 className="topic-title"></h4>
                      <div className="arrow-items">
                        <div className="GlidingArrow">
                          <img src="assets/img/courses/a1.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay1">
                          <img src="assets/img/courses/a2.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay2">
                          <img src="assets/img/courses/a3.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay3">
                          <img src="assets/img/courses/a4.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay4">
                          <img src="assets/img/courses/a5.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay5">
                          <img src="assets/img/courses/a6.png" alt="img" />
                        </div>
                      </div>
                    </div>
                    {/* <div className="courses-content">
                      <h3>$156.00</h3>
                      <p>
                        UX (User Experience) Design the involves understanding
                        needs, behaviors.
                      </p>
                      <div className="courses-btn">
                        <Link href="/courses-details" className="theme-btn">
                          Add to Cart
                        </Link>
                        <Link
                          href="/courses-details"
                          className="theme-btn style-2"
                        >
                          Buy Course
                        </Link>
                      </div>
                    </div> */}
                  </div>
                  <div className="courses-category-items">
                    <h5>Course Includes:</h5>
                    <ul>
                      {/* <li>
                        <span>
                          <i className="far fa-chalkboard-teacher"></i>
                          Instructor
                        </span>
                        <span className="text">Dr. Shyam</span>
                      </li> */}
                      {/* <li>
                        <span>
                          <i className="far fa-user"></i>
                          Lesson
                        </span>
                        <span className="text">15</span>
                      </li> */}
                      <li>
                        <span>
                          <i className="far fa-clock"></i>
                          Duration
                        </span>
                        <span className="text">4 Year</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-user"></i>
                          Students
                        </span>
                        <span className="text">50+</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-globe"></i>
                          Language
                        </span>
                        <span className="text">English</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt"></i>
                          Starting Date
                        </span>
                        <span className="text">To Be Announced</span>
                      </li>
                       <li>
                                                <span>
                                                  {/* <i className="far fa-map-marker-alt"></i> */}
                                                 <div style={{display:"flex"}}>
                                                    <div style={{padding:"2px"}}>
                                                  <MdCastForEducation />
                                                  </div>
                                                  <div style={{padding:"3px"}}>
                                                  Eligibility
                                                  </div>
                                                  </div>
                                                  
                                                </span> 
                                                <span className="text" style={{width:"190px"}}>
                                                    10+2(Science or any stream) with atleast 40-50% marks 
                                                </span>
                                            </li>
                      <li>
                        {/* <span>
                          <i className="far fa-signal-alt"></i>
                          Skill Level
                        </span> */}
                        {/* <span className="text">All Level</span> */}
                      </li>
                      <li>
                        {/* <span>
                          <i className="fal fa-medal"></i>
                          Certifications
                        </span> */}
                        {/* <span className="text">Yes</span> */}
                      </li>
                    </ul>
                    {/* <Link href="/courses-details" className="share-btn">
                      <i className="fas fa-share"></i> Share this courses
                    </Link> */}
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

export default CoursesDetailsTwoArea;
