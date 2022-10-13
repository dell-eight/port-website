/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    letterSpacing: {
      tightest: '-.17em',
    },
    screens: {
      sMobile: '0px',

      mobile: '340px',

      tablet: '550px',

      laptop: '900px',

      desktop: '1280px',
    },
    extend: {
      colors: {
        badgeBackground: '#e2e2e5',
        backgroundGlass: 'rgba(238, 239, 253, 0.01)',
        backTransparent: 'rgba(0, 0, 0, 0.05)',
        backgroundColor: '#eeeffd',
        primaryColor: '#262534',
        secondaryColor: '#8fbdf5',
      },
      transformOrigin: {
        fromRight: '100% 50%',
      },
    },
  },
  plugins: [],
};
