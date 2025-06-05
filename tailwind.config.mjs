/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// Your brand colors
				"electric-indigo": "#5D55F1",
				"vibrant-teal": "#00C6AE",
				"sunset-coral": "#FF5757",
				"deep-charcoal": "#1A1A1A",
				"soft-ice": "#F7F9FC",

				// Existing colors
				background: "var(--color-background)",
				foreground: "var(--color-foreground)",
			},
			fontFamily: {
				sans: ["var(--font-sans)"],
				mono: ["var(--font-mono)"],
			},
			animation: {
				"gradient-x": "gradient-x 15s ease infinite",
				float: "float 6s ease-in-out infinite",
				"pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			keyframes: {
				"gradient-x": {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
			boxShadow: {
				brand: "0 4px 20px rgba(93, 85, 241, 0.15)",
				"brand-lg": "0 10px 40px rgba(93, 85, 241, 0.2)",
				teal: "0 4px 20px rgba(0, 198, 174, 0.15)",
				coral: "0 4px 20px rgba(255, 87, 87, 0.15)",
			},
			backgroundImage: {
				"gradient-brand": "linear-gradient(135deg, #5D55F1 0%, #00C6AE 100%)",
				"gradient-brand-reverse":
					"linear-gradient(135deg, #00C6AE 0%, #5D55F1 100%)",
				"gradient-coral": "linear-gradient(135deg, #FF5757 0%, #5D55F1 100%)",
			},
		},
	},
	plugins: [],
};

export default config;
