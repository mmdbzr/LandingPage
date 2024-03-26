import React from "react";
import Logo from "../../../Components/Ui/Logo";
import vGroup2 from "../../../assets/vGroup2.svg";
import PrimaryButton from "../../../Components/Ui/PrimaryButton";
import Linkedin from "../../../Components/Icons/Linkedin";
import Facebook from "../../../Components/Icons/Facebook";
import Insta from "../../../Components/Icons/Insta";
import Twitter from "../../../Components/Icons/Twitter";

interface ComponentProps {
	className: string;
}

const Footer: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div
			className={`w-full h-[21em] divide-y-2 divide-[#C0B7E8]  ${className}`}
			style={{ backgroundImage: `url(${vGroup2})` }}
		>
			<div className="divide-x-2 flex justify-between pb-20 divide-[#C0B7E8]">
				<div>
					<Logo className="!h-[12em] !w-[12em]" />
				</div>
				<div className="flex flex-col space-y-3 justify-center  pl-28">
					<p className="text-white font-bold">ABOUT</p>
					<p className="text-white font-bold">SERVICES</p>
					<p className="text-white font-bold">TECHNOLOGIES</p>
					<p className="text-white font-bold">HOW TO</p>
					<p className="text-white font-bold">JOIN HYDRA</p>
				</div>
				<div className="pl-28 flex flex-col space-y-3  ">
					<p className="text-white font-bold">F.A.Q</p>
					<p className="text-white font-bold">SITEMAP</p>
					<p className="text-white font-bold">CONDITIONS</p>
					<p className="text-white font-bold">LICENSES</p>
				</div>
				<div className="pl-28 space-y-10">
					<p className="text-white font-bold">SOCIALIZE WITH HYDRA</p>
					<div className="flex justify-between">
						<Linkedin />
						<Facebook />
						<Insta />
						<Twitter />
					</div>
					<PrimaryButton className=" px-2 text-sm">
						BUILD YOUR WORLD
					</PrimaryButton>
				</div>
			</div>
			<div className="text-center pt-5">
				<p className="text-white">
					2023 © HYDRA LANDING PAGE - BY M.BOZORGMEHR - ALL RIGHTS
					RESERVED{" "}
				</p>
			</div>
		</div>
	);
};

export default Footer;
