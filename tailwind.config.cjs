module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f1724', // deep dark
        accent: '#D4AF37' // golden accent
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.6))'
      }
    }
  },
  plugins: []
}
