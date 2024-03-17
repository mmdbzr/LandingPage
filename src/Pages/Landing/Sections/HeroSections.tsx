import React from "react";
import PrimaryButton from "../../../Components/Ui/PrimaryButton";
import Image from "../../../assets/pexels-michelangelo-buonarroti-8728382 1.png";

interface ComponentProps {
	className: string;
}

const HeroSections: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div
			className={`${className} flex space-x-56 justify-center items-center pt-12`}
		>
			<div className="space-y-10">
				<div className="text-6xl font-bold ">
					<div className="flex">
						<p className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]  bg-clip-text  inline-block text-transparent">
							Dive
						</p>
						<p className="text-white ml-3"> Into The Depths Of</p>
					</div>
					<p className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]  bg-clip-text  inline-block text-transparent">
						Virtual Reality
					</p>
				</div>
				<p className="text-white w-[26rem]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore nisl
					tincidunt eget. Lectus mauris eros in vitae .
				</p>
				<PrimaryButton className="text-sm">
					BUILD YOUR WORLD
				</PrimaryButton>
			</div>
			<div>
				<img
					src={Image}
					className="rounded-bl-[190px] rounded-[70px] shadow-xl hover:shadow-[#5C5C5C]"
				></img>
			</div>
		</div>
	);
};

export default HeroSections;
