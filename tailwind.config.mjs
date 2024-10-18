/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			window: {
        2: '2'
      },
		},
	},
	plugins: [
		function ({ addUtilities }) {
      addUtilities({
        '.widows-2': {
          widows: '2'
        }
      })
    }
	],
}
