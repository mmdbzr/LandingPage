import React from "react";

interface ComponentProps {
	className: string;
}

const RightArrow: React.FC<ComponentProps> = ({ className }) => {
	return (
		<svg
			width="33"
			height="27"
			viewBox="0 0 33 27"
			className={` ${className}`}
		>
			<path
				d="M30.4583 13.4999L2.54166 13.4999M30.4583 13.4999L19.2917 24.6666M30.4583 13.4999L19.2917 2.33325"
				stroke="#C0B7E8"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default RightArrow;
