/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    maxWidth: {
      '1/2': '50%',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/dist/img/businesspeople-meeting-plan-analysis-graph-company-finance-strat-scaled.jpg')",
        'office': "url('/public/dist/img/a36ed8a10d8b7e071e6c9ab2f60098e3.jpg')",
      }
    },
    fontFamily: {
      'Merriweather' : ['Merriweather', 'sans-serif'],
      'Quicksand' : ['Quicksand', 'sans-serif'],
    }
  },
  plugins: [],
}
