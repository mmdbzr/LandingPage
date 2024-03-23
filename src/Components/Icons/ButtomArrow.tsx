import React from "react";

interface ComponentProps {
	className: string;
}

const ButtomArrow: React.FC<ComponentProps> = ({ className }) => {
	return (
		<svg width="60" height="60" className={`fill-transparent ${className}`}>
			<path
				d="M17.5 25L30 37.5L42.5 25"
				stroke="#433D60"
				stroke-width="3"
			/>
		</svg>
	);
};

export default ButtomArrow;
