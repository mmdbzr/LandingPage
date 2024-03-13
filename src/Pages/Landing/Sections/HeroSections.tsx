import React from "react";

interface ComponentProps {
	className: string;
}

const HeroSections: React.FC<ComponentProps> = ({ className }) => {
	return <div className={`${className}`}>HeroSections</div>;
};

export default HeroSections;
