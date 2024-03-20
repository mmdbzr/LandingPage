import React from "react";
import PrimaryButton from "../../Components/Ui/PrimaryButton";
import Navbar from "../../Components/Layout/Navbar";
import HeroSections from "./Sections/HeroSections";
import Information from "../../Components/Ui/Information";

interface ComponentProps {
	className: string;
}
const LandingPage: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div className={`${className} `}>
			<Navbar className="pt-6" />
			<HeroSections className="w-full mt-28" />
			<Information className="mt-24" />
		</div>
	);
};

export default LandingPage;
