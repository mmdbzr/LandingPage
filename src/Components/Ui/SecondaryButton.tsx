import React from "react";
interface ComponentProps {
	className: string;
	children: string;
}
const SecondaryButton: React.FC<ComponentProps> = ({ className, children }) => {
	return (
		<div
			className={`${className}  bg-transparent text-white font-Oswald rounded-3xl w-[155px] h-[48px] flex justify-center items-center hover:shadow-xl hover:cursor-pointer `}
		>
			{children}
		</div>
	);
};

export default SecondaryButton;
