import React from "react";
import PrimaryButton from "../../Components/Ui/PrimaryButton";
import Navbar from "../../Components/Layout/Navbar";

interface ComponentProps {
	className: string;
}
const LandingPage: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div className={`${className} `}>
			<Navbar className="pt-6" />
		</div>
	);
};

export default LandingPage;
