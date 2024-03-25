import React from "react";
import PrimaryButton from "../../../Components/Ui/PrimaryButton";
import Image from "../../../assets/pexels-shvets-production-7562014 1.png";
import vGroup2 from "../../../assets/vGroup2.svg";

interface ComponentProps {
	className: string;
}

const Introduction: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div
			className={`space-y-28 bg-no-repeat ${className}`}
			style={{ backgroundImage: `url(${vGroup2})` }}
		>
			<div className="flex justify-between">
				<div>
					<p className="text-white text-3xl font-bold">
						INTRODUCTION
					</p>
					<p className="text-white text-2xl font-thin">TO HYDRA VR</p>
				</div>
				<p className="text-white w-[40em]">
					Vitae sapien pellentesque habitant morbi tristique senectus
					et netus et. Feugiat nibh sed pulvinar proin gravida
					hendrerit lectus. Mi sit amet mauris commodo quis imperdiet
					massa tincidunt nunc. Viverra aliquet eget sit amet tellus.
					Ornare lectus sit amet est placerat in. Lectus magna
					fringilla urna porttitor rhoncus vitae.
				</p>
			</div>
			<div className="flex space-x-52 ">
				<img
					src={Image}
					className="rounded-[73px] rounded-tl-[220px] rounded-br-[220px] shadow-xl shadow-black"
				/>
				<div className="pt-10">
					<p className="text-white font-bold text-4xl">ABOUT</p>
					<p className="text-white font-thin text-3xl">HYDRA VR</p>
					<p className="text-white mt-10">
						Eget mi proin sed libero enim sed faucibus turpis. Nisl
						rhoncus mattis rhoncus urna neque viverra justo. Vivamus
						at augue eget arcu dictum. Ultrices gravida dictum fusce
						ut placerat orci. Aenean et tortor at risus viverra
						adipiscing at in. Mattis aliquam faucibus purus in
						massa. Est placerat in egestas erat imperdiet sed.
						Consequat semper viverra nam libero justo laoreet sit
						amet. Aliquam etiam erat velit scelerisque in dictum non
						consectetur a. Laoreet sit amet cursus sit amet. Vel
						eros donec ac odio tempor orci dapibus. Sem nulla pha
						retra diam sit amet nisl suscipit adipiscing bibendum.
						Leo a diam sollicitudi n tempor.
					</p>
					<PrimaryButton className="p-2 text-sm mt-20">
						LET’S GET IN TOUCH
					</PrimaryButton>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
