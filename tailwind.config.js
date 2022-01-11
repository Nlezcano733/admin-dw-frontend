const production = !process.env.ROLLUP_WATCH;

module.exports = {
	content: ["./src/**/*.svelte"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				zen: ["Zen Dots", "sans-serif"],
				source: ["Source Code Pro", "sans-serif"],
			},
			colors: {
				olive: "#84cc16",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwindcss"), require("autoprefixer"), require("postcss-import")],
};
