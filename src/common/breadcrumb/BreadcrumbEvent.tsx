import Link from "next/link";
import React from "react";

const BreadcrumbEvent = ({title, subtitle} : any) => {
	return (
		<>
			<section className="breadcrumb-wrapper">
				<div className="shape-1">
					<img src="assets/img/breadcrumb/shape-1.png" alt="img" />
				</div>
				<div className="shape-2">
					<img src="assets/img/breadcrumb/shape-2.png" alt="img" />
				</div>
				{/* <div className="shape-3">
					<img src="assets/img/breadcrumb/shape-3.png" alt="img" />
				</div> */}
				{/* <div className="dot-shape">
					<img src="assets/img/breadcrumb/dot-shape.png" alt="img" />
				</div> */}
				{/* <div className="vector-shape">
					<img src="assets/img/breadcrumb/Vector.png" alt="img" />
				</div> */}
				<div className="container">
					<div className="row">
						<div className="page-heading">
							<h1>{title}</h1>
							<h3 className="text-white">{subtitle}</h3>
							<div className="breadcrumb-image">
  <div className="image" style={{display:"flex", justifyContent:"center"}}>
    <img src="assets/img/about/nursing.jpg" alt="Nursing " style={{width:"90%",height:"70%"}}/>
    {/* <img src="assets/img/about/nursing1.jpg" alt="Nursing 2" style={{width:"20vw",height:"35vh"}}/>
    <img src="assets/img/about/nursing2.jpg" alt="Nursing 3" style={{width:"20vw",height:"35vh"}}/>
    <img src="assets/img/about/nursing3.jpg" alt="Nursing 4" style={{width:"20vw",height:"35vh"}}/> */}
  </div>
</div>

						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BreadcrumbEvent;
