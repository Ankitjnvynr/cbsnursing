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
							<ul className="breadcrumb-items">
								{/* <li>
									<Link href="/">Home</Link>
								</li> */}
								<p style={{ color: "white", fontSize: "23px", fontWeight: "bold", textAlign: "center",marginTop:"22px"}}>Have questions or need assistance? Contact us—we’d love to hear from you!</p>
								{/* <li className="style-2">{subtitle}</li> */}
							</ul>
							<div className="breadcrumb-image">
								<img src="assets/img/breadcrumb/bimg.jpg" alt="img" style={{ width: "900px", height: "400px" }} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BreadcrumbEvent;
