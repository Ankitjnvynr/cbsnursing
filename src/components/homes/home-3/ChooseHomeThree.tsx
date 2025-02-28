"use client"
import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';
import { MdCastForEducation } from "react-icons/md";
import { FaBuildingShield } from "react-icons/fa6";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdGroups } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";

const ChooseHomeThree = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
       <section className="choose-us-section-3 fix section-padding pt-0">
           <div className="choose-us-wrapper-3">
                <div className="row g-0">
                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                        <div className="video-image wow img-custom-anim-left">
                            <img src="assets/img/feature/video.jpg" alt="img" style={{height:"67rem"}} />
                            <a 
                            onClick={() => setIsVideoOpen(true)}
                            style={{ cursor: "pointer" }}
                            className="video-btn ripple video-popup">
                                <i className="fas fa-play"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div style={{
                            background:'#09224b'
                        }} className="choose-content">
                            <div className="section-title">
                                {/* <h6 className="text-white wow fadeInUp">
                                    Why Choose Us
                                </h6> */}
                                <h2 className="text-white wow fadeInUp " data-wow-delay=".3s" style={{fontSize:"30px"}}>
                                    Why Choose Our CBS College of Nursing ?
                                </h2>
                            </div>
                            {/* <p className="mt-3 mt-md-0 text-white wow fadeInUp" data-wow-delay=".5s">
                                We offer a diverse range of programs designed to equip students with the knowledge, skills, and real-world experience needed.
                            </p> */}
                            <div className="row">
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            {/* <i className="flaticon-kayak"></i> */}
                                            <MdCastForEducation />
                                        </div>
                                        
                                        <h3>Nursing Programs</h3>
                                        <p>From GNM and B.Sc Nursing to specialized diploma courses,we offer a curriculum that meets international healthcare standards</p>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            {/* <i className="flaticon-violin"></i> */}
                                            <BsBuildingsFill />

                                        </div>
                                        <h3>Infrastructure</h3>
                                        <p>Modern classrooms, advanced simulation labs, and well-equipped hospital tie-ups for real-world experience.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            {/* <i className="flaticon-provision"></i> */}
                                            <LiaChalkboardTeacherSolid />
                                        </div>
                                        <h3>Experienced Faculty</h3>
                                        <p> Learn from seasoned professionals with years of experience in nursing and healthcare education.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            {/* <i className="flaticon-certificate"></i> */}
                                            <VscWorkspaceTrusted />
                                        </div>
                                        <h3>100% Placement </h3>
                                        <p>Strong industry connections to help students secure jobs in top hospitals and healthcare institutions. </p>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            {/* <i className="flaticon-certificate"></i> */}
                                            <MdGroups />
                                        </div>
                                        <h3>Training </h3>
                                        <p>Extensive clinical exposure to enhance skills and confidence.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            {/* <i className="flaticon-certificate"></i> */}
                                            <FaBuildingShield />
                                        </div>
                                        <h3>Safe Campus</h3>
                                        <p>Multi-cultural campus offering safest stay for the students .It is infact a home away from home. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="circle-shape">
                                <img src="assets/img/feature/circle-shape.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </section>

          {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
      {/* video modal end */}
    </>
  );
};

export default ChooseHomeThree;