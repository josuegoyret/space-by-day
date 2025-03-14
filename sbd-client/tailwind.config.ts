import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'nasa-blue': '#0032a0',
        'nasa-red': '#e4002b',
        'nasa-red-dark': '#b50909',
        'nasa-black': '#000000',
        'nasa-white': '#ffffff',
        'nasa-gray': '#959599'
      },
      height: {
        '128': '32rem',
        '160': '40rem'
      }
    },
    fontFamily: {
      display: [
        '"Inter", sans-serif',
        {
          fontFeatureSettings: '"hern"'
        }
      ],
      body: [
        '"Public Sans", sans-serif',
        {
          fontFeatureSettings: '"hern"'
        }
      ],
      label: [
        '"DM MONO", monospace',
        {
          fontFeatureSettings: '"hern"'
        }
      ]
    }
  },
  plugins: []
};
export default config;
