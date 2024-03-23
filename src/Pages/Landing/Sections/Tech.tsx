import React from "react";
import Image from "../../../assets/tech1.svg";
import ButtomArrow from "../../../Components/Icons/ButtomArrow";
interface ComponentProps {
	className: string;
}
const Tech: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div
			style={{ backgroundImage: `url(${Image})` }}
			className={`w-[80em] h-[19em] text-white rounded-full flex flex-col justify-center text-center items-center shadow-2xl shadow-black relative ${className}`}
		>
			<p className="text-4xl font-bold">TECHNOLOGIES & HARDWARE</p>
			<p className="text-3xl font-thin">USED BY HYDRA VR.</p>
			<button className="w-[70px] h-[70px] bg-gradient-to-tr from-[#8176AF] to-[#C0B7E8] rounded-full flex justify-center items-center absolute -bottom-8  ">
				<ButtomArrow />
			</button>
		</div>
	);
};

export default Tech;
