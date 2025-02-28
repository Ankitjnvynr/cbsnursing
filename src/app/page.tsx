import HomeTwo from "@/components/homes/home-2";
import Homethree from "@/components/homes/home-3"; 
// import Hometwo from "@/components/homes/home-2"; 
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";
// meta data

export const metadata: Metadata = {
	title: "CBS College of Nursing",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};

const index = () => {
	return (
		<Wrapper>
			<Homethree />    
		</Wrapper>
	);
};

export default index;
