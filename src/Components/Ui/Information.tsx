import React from "react";
import LocationIcon from "../Icons/LocationIcon";
import PhoneCall from "../Icons/PhoneCall";
import Mailicon from "../Icons/Mailicon";

interface ComponentProps {
	className: string;
}

const Information: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div
			className={` w-full h-36 bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E]  border-gray-400  rounded-full grid grid-cols-3 items-center  ${className}`}
		>
			<div className="border-r-2 border-[#C0B7E8] h-[80%] flex items-center pl-8 space-x-8">
				<LocationIcon />
				<div>
					<p className="font-bold text-white text-2xl">
						Pay Us a Visit
					</p>
					<p className="text-white">
						Union St, Seattle, WA 98101, United States
					</p>
				</div>
			</div>
			<div className="h-[80%] flex items-center pl-8 space-x-8">
				<PhoneCall className="fill-none" />
				<div>
					<p className="font-bold text-white text-2xl">
						Give Us a Call{" "}
					</p>
					<p className="text-white">(110) 1111-1010 </p>
				</div>
			</div>
			<div className="border-l-2 border-[#C0B7E8] h-[80%] flex items-center pl-8 space-x-8">
				<Mailicon className="fill-none" />
				<div>
					<p className="font-bold text-white text-2xl">
						Send Us a Message{" "}
					</p>
					<p className="text-white">Contact@HydraVTech.com </p>
				</div>
			</div>
		</div>
	);
};

export default Information;
