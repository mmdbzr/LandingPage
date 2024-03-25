import React from "react";
import Input from "../../../Components/Ui/Input";
import PrimaryButton from "../../../Components/Ui/PrimaryButton";

interface ComponentProps {
	className: string;
}

const JoinSection: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div
			className={`w-full h-[62em] bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E] rounded-[100px] text-center  flex flex-col items-center text-white pt-28 ${className}`}
		>
			<p className="text-3xl font-bold  border-b-2 w-fit border-[#C0B7E8] px-8 pb-8">
				JOIN HYDRA
			</p>
			<p className="text-3xl font-thin mt-4">
				Let’s Build Your VR Experience
			</p>
			<div className="grid grid-cols-2 grid-rows-5 gap-12 mt-14">
				<Input title="first name" />
				<Input title="Last Name" />
				<Input title="Email" />
				<Input title="Phone Number" />
				<Input
					className="col-start-1 col-end-3 w-full"
					title="Subject"
				/>
				<div className="row-start-4  row-end-6 col-start-1 col-end-3 w-full h-full rounded-[32px] flex border-2 border-white pt-3 px-4 space-x-3">
					<p className="w-fit font-thin">Tell Us Something...</p>
					<textarea className="bg-transparent w-[80%] h-full outline-none" />
				</div>
			</div>
			<PrimaryButton className="mt-10">SEND TO HYDRA</PrimaryButton>
		</div>
	);
};

export default JoinSection;
