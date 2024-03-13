/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Oswald: ["OswaldFont", "sans"],
				Rajdhani: ["Rajdhani", "Arial", "sans-serif"],
			},
			colors: {
				custom_gradient: {
					start: "#8176AF",
					end: "#C0B7E8",
				},
			},
		},
	},
	plugins: [],
};
