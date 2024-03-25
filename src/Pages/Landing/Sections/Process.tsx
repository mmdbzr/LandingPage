import React from "react";
import Steps from "../../../Components/Ui/Steps";
import vector from "../../../assets/Vector1.svg";

interface ComponentProps {
	className: string;
}

const Process: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div className={` w-full  space-y-28 ${className}`}>
			<div className="flex justify-between">
				<div>
					<p className="text-white text-3xl font-bold">
						HOW WE BUILD
					</p>
					<p className="text-white text-2xl font-thin">
						WITH HYDRA VR?
					</p>
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
			<div
				className="flex px-20 justify-between items-center bg-no-repeat"
				style={{ backgroundImage: `url(${vector})` }}
			>
				<Steps step="01">3D Conception & Design</Steps>
				<Steps step="02">Interaction Design</Steps>
				<Steps step="03">VR World User Testing</Steps>
				<Steps step="04">Hydra VR Deploy</Steps>
			</div>
		</div>
	);
};

export default Process;
