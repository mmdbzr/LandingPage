import React from "react";

interface ComponentProps {
	className: string;
	children: string;
	title: string;
}

const Input: React.FC<ComponentProps> = ({ className, children, title }) => {
	return (
		<div
			className={`w-[33em] h-[4.5em] border-white border-2 rounded-full text-white flex space-x-2 items-center px-6 ${className}`}
		>
			<p className="font-thin w-fit">{title}</p>
			<input className="bg-transparent w-[80%] h-[90%] no-underline font-thin   focus:outline-none overflow-visible" />
		</div>
	);
};

export default Input;
