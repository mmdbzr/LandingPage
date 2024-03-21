import React from "react";
import Navbar from "../../Components/Layout/Navbar";
import HeroSections from "./Sections/HeroSections";
import Information from "../../Components/Ui/Information";
import Introduction from "./Sections/Introduction";

interface ComponentProps {
	className: string;
}
const LandingPage: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div className={`${className} `}>
			<Navbar className="pt-6" />
			<HeroSections className="w-full mt-28" />
			<Information className="mt-24" />
			<Introduction className="mt-24" />
		</div>
	);
};

export default LandingPage;
