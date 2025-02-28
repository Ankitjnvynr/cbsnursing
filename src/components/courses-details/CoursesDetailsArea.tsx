"use client";
import VideoPopup from "@/modals/VideoPopup";
import Link from "next/link";
import React, { useState } from "react";
import { MdCastForEducation } from "react-icons/md";

const CoursesDetailsArea = () => {
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
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="courses-details-items">
                  <div className="courses-image">
                    <img src="assets/img/courses/detail-3.jpg" alt="img" />
                    <a
                      onClick={() => setIsVideoOpen(true)}
                      style={{ cursor: "pointer" }}
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                  <div className="courses-details-content">
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
                        {/* <a
                          href="#Curriculum"
                          data-bs-toggle="tab"
                          className="nav-link"
                        >
                          Curriculum
                        </a> */}
                      </li>
                      <li
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        {/* <a
                          href="#Instructors"
                          data-bs-toggle="tab"
                          className="nav-link"
                        >
                          Instructors
                        </a> */}
                      </li>
                      <li
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        {/* <a
                          href="#Reviews"
                          data-bs-toggle="tab"
                          className="nav-link bb-none"
                        >
                          Reviews
                        </a> */}
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="Course" className="tab-pane fade show active">
                        <div className="description-content">
                          <h3>Description</h3>
                          <p className="mb-3">
                          The General Nursing and Midwifery (GNM) course is a three-year diploma program in the field of nursing, designed to prepare students to become professional nurses capable of working in hospitals, clinics, and healthcare institutions. This course also includes a six-month internship, allowing students to gain hands-on clinical experience.
                          </p>
                          <p>
                            The curriculum emphasizes both theoretical and
                            practical aspects of nursing, covering patient care
                            techniques, anatomy, physiology, pharmacology, and
                            maternal health, ensuring that graduates are
                            well-prepared to work in hospitals, clinics, and
                            community healthcare settings.
                          </p>
                          <h3 className="mt-5">
                            What you'll learn in this course?
                          </h3>
                          <p className="mb-4">
                            The GNM course provides comprehensive training in
                            healthcare, patient management, and midwifery,
                            enabling students to deliver effective nursing care
                            and support maternal and child health.
                          </p>
                          <div className="row g-4 mb-5">
                            <div className="col-lg-6">
                              <ul className="list-item">
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Introduction to Nursing & Healthcare
                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Anatomy, Physiology & Microbiology
                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Nursing Fundamentals & Patient Care
                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Pharmacology & Drug Administration
                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Community Health & Nutrition
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6">
                              <ul className="list-item">
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Midwifery & Obstetric Nursing
                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Pediatric & Geriatric Nursing
                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Mental Health & Psychiatric Nursing
                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Emergency & Critical Care Nursing
                                </li>
                                <li>
                                  <i className="fas fa-check-circle"></i>
                                  Clinical Internship & Practical Training
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h3>How to Benefit from this Course</h3>
                          <p>
                            This course prepares students for a fulfilling
                            career in nursing and midwifery by providing
                            essential skills in patient care, medical
                            procedures, and healthcare management. With a strong
                            foundation in both practical and theoretical
                            knowledge, graduates can pursue opportunities in
                            hospitals, maternity clinics, public health
                            organizations, and community healthcare settings.
                          </p>
                        </div>
                      </div>
                      {/* <div id="Curriculum" className="tab-pane fade">
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
                      </div> */}
                      {/* <div id="Instructors" className="tab-pane fade">
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
                      </div> */}
                      {/* <div id="Reviews" className="tab-pane fade">
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
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="courses-sidebar-area sticky-style">
                  <div className="courses-items">
                    <div className="courses-image">
                      <img src="assets/img/courses/23.jpg" alt="img" />
                      <h3 className="courses-title">Gnm</h3>
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
                                            UX (User Experience) Design the involves understanding needs, behaviors.
                                        </p>
                                        <div className="courses-btn">
                                            <Link href="/courses-details" className="theme-btn">Add to Cart</Link>
                                            <Link href="/courses-details" className="theme-btn style-2">Buy Course</Link>
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
                        <span className="text">Dr. Ram</span>
                      </li> */}
                      {/* <li>
                        <span>
                          <i className="far fa-user"></i>
                          Lessons
                        </span>
                        <span className="text">30</span>
                      </li> */}
                      <li>
                        <span>
                          <i className="far fa-clock"></i>
                          Duration
                        </span>
                        <span className="text">3-3.5 Years</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-user"></i>
                          Students
                        </span>
                        <span className="text">60+</span>
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
                          Batch Start Date
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
                        </span>
                        {/* <span className="text">Beginner to Advanced</span> */}
                      </li>
                      <li>
                        {/* <span>
                          <i className="fal fa-medal"></i>
                          Certifications
                        </span> */}
                        {/* <span className="text">Yes, Upon Completion</span> */}
                      </li>
                    </ul>
                    {/* <Link href="/courses-details" className="share-btn">
                      <i className="fas fa-share"></i> Share this course
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

export default CoursesDetailsArea;
