/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: [
          'Inter',
          'sans-serif'
        ],
        synonym: [
          'Synonym',
          'sans-serif'
        ],
        OpenSans: [
          'Open Sans',
          'sans-serif'
        ],
        zodiak: [
          'Zodiak',
          'sans-serif'
        ],
        author: [
          'Author',
          'sans-serif'
        ]
      },
    },
  },
  plugins: [],
}