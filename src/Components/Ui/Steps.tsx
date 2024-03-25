import React from "react";
import RightArrow from "../Icons/RightArrow";

interface ComponentProps {
	className: string;
	children: string;
	step: string;
}

const Steps: React.FC<ComponentProps> = ({ className, children, step }) => {
	return (
		<div
			className={`w-[200px] flex flex-col justify-between items-center space-y-5 ${className}`}
		>
			<div className="rounded-full w-[10em] h-[10em] bg-gradient-to-tr from-[#8176AF] to-[#C0B7E8] text-[#343045] flex  items-center text-center justify-center   ring-[16px] ring-black  ring-opacity-40">
				<p className="text-7xl font-bold">{step}</p>
			</div>
			<div className="flex space-x-3 items-center justify-center">
				<RightArrow />
				<p className=" text-white font-bold text-2xl">{children}</p>
			</div>
		</div>
	);
};

export default Steps;
