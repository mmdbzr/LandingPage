import React from "react";
import Navbar from "../../Components/Layout/Navbar";
import HeroSections from "./Sections/HeroSections";
import Information from "../../Components/Ui/Information";
import Introduction from "./Sections/Introduction";
import Services from "./Sections/Services";

interface ComponentProps {
	className: string;
}
const LandingPage: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div className={`${className} space-y-20`}>
			<Navbar className="pt-6" />
			<HeroSections className="w-full" />
			<Information className="" />
			<Introduction className="" />
			<Services />
		</div>
	);
};

export default LandingPage;
