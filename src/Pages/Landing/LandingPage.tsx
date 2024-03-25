import React from "react";
import Navbar from "../../Components/Layout/Navbar";
import HeroSections from "./Sections/HeroSections";
import Information from "../../Components/Ui/Information";
import Introduction from "./Sections/Introduction";
import Services from "./Sections/Services";
import Tech from "./Sections/Tech";
import Process from "./Sections/Process";
import vGroup from "../../assets/vGroup.svg";
interface ComponentProps {
	className: string;
}
const LandingPage: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div
			className={`${className} space-y-20 justify-center flex flex-col items-center`}
		>
			{" "}
			<div
				className="space-y-20 "
				style={{ backgroundImage: `url(${vGroup})` }}
			>
				<Navbar className="pt-6" />
				<HeroSections className="w-full" />
				<Information className="" />
			</div>
			<Introduction className="" />
			<Services />
			<Tech />
			<Process />
		</div>
	);
};

export default LandingPage;
