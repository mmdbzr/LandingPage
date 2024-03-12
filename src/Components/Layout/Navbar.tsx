import React from "react";
import PrimaryButton from "../Ui/PrimaryButton";
import SecondaryButton from "../Ui/SecondaryButton";
import Logo from "../Ui/Logo";
interface ComponentProps {
	className: string;
}

const Navbar: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div className={`${className} flex justify-between items-center`}>
			<div className="flex justify-between items-center space-x-4">
				<Logo />
				<p className=" font-thin bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]  bg-clip-text text-5xl font-Rajdhani inline-block text-transparent">
					HYDRA
				</p>
			</div>

			<div className="flex justify-between items-center">
				<SecondaryButton className="hover:border-white hover:border-2">
					ABOUT
				</SecondaryButton>
				<SecondaryButton className="hover:border-white hover:border-2">
					SERVICES
				</SecondaryButton>
				<SecondaryButton className="hover:border-white hover:border-2">
					TECHNOLOGIES
				</SecondaryButton>
				<SecondaryButton className="hover:border-white hover:border-2">
					HOW TO
				</SecondaryButton>
			</div>
			<div className="flex items-center justify-between space-x-5">
				<SecondaryButton className=" border-white border-2">
					CONTACT US
				</SecondaryButton>
				<PrimaryButton>JOIN HYDRA</PrimaryButton>
			</div>
		</div>
	);
};

export default Navbar;
