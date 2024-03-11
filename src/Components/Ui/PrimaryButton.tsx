import React from "react";

interface ComponentProps {
	children: string;
	className: string;
}

const PrimaryButton: React.FC<ComponentProps> = ({ children, className }) => {
	return (
		<button
			className={` bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] ${className} w-[155px] h-[48px] text-black rounded-3xl flex justify-center items-center hover:shadow-xl  `}
		>
			<p className="font-Oswald  font-bold text-[#302C42]">{children}</p>
		</button>
	);
};

export default PrimaryButton;
