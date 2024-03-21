import React from "react";
import PrimaryButton from "./PrimaryButton";
interface ComponentProps {
	className: string;
	src: string;
	heading: string;
	subHeading: string;
}
const Article: React.FC<ComponentProps> = ({
	className,
	src,
	heading,
	subHeading,
}) => {
	return (
		<div
			className={`flex flex-col items-center text-white rounded-[50px]  w-[20em] h-[32em] bg-gradient-to-l from-[#211E2E] via-[#3A3456] to-[#211E2E] space-y-5 pt-10 ${className}`}
		>
			<img
				src={src}
				className="rounded-full border-8 border-[#262233] h-[190px] w-[190px] "
			/>
			<p className="border-b-2 border-[#262233] font-bold text-3xl px-4  pb-4">
				{heading}
			</p>
			<p className="w-[250px] text-sm  text-center">{subHeading}</p>
			<PrimaryButton>TRY IT NOW</PrimaryButton>
		</div>
	);
};

export default Article;
