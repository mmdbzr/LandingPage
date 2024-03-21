import React from "react";
import Article from "../../../Components/Ui/Article";
import simulation from "../../../assets/pexels-shvets-production-7561969 1.png";
import EDUCATION from "../../../assets/pexels-mikhail-nilov-7887140 1.png";
import selfCare from "../../../assets/pexels-rodnae-productions-8098263 1.png";
import outDoor from "../../../assets/pexels-mali-maeder-756439 1.png";

interface ComponentProps {
	className: string;
}

const Services: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div className={`${className}`}>
			<div className="flex justify-between">
				<div>
					<p className="text-white text-3xl font-bold">WHY BUILD</p>
					<p className="text-white text-2xl font-thin">WITH HYDRA?</p>
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

			<div className={`grid grid-cols-4 mt-28`}>
				<Article
					src={simulation}
					heading="SIMULATION"
					subHeading="Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae."
				/>
				<Article
					src={EDUCATION}
					heading="EDUCATION"
					subHeading="Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae."
				/>
				<Article
					src={selfCare}
					heading="SELF CARE"
					subHeading="Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae."
				/>
				<Article
					src={outDoor}
					heading="OUTDOOR"
					subHeading="Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae."
				/>
			</div>
		</div>
	);
};

export default Services;
