import React from "react";
import PrimaryButton from "../Components/Ui/PrimaryButton";

interface ComponentProps {
	className: string;
}
const LandingPage: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div className={`${className}`}>
			<PrimaryButton>test</PrimaryButton>
		</div>
	);
};

export default LandingPage;
