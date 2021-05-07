module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#282f6d',
        DEFAULT: '#1fb6ff',
        dark: '#11142e',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#c7d2ef',
        lightest: '#f9fafc',
      },
      yellow: {
        light: '#f6ba50'
      },
      orange: {
        light: '#f7d395',
        dark: '#f6ba50'
      },
      white: '#ffffff',
      black: '#000000',
      off: {
        white: '#f9fafb'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
