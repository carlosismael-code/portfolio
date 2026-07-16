/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        cream: {
          50: '#FBFAF7',
          100: '#F4F4F4',
          200: '#EBEBE8',
          300: '#DEDEDA',
        },
        black: {
          900: '#191818',
          800: '#2A2929',
          700: '#3A3939',
        },
        blue: {
          50: '#EAF1FE',
          100: '#D4E3FD',
          200: '#A9C7FB',
          400: '#4F86F2',
          500: '#1B5DEF',
          600: '#0F49C7',
          wash: 'rgba(27, 93, 239, 0.12)',
        },
        orange: {
          400: '#EE7A52',
          500: '#E25327',
          600: '#B83D17',
        },
        fg: {
          DEFAULT: '#191818',
          secondary: '#525252',
          tertiary: '#737373',
          inverse: '#F4F4F4',
        },
        border: {
          DEFAULT: '#191818',
          subtle: 'rgba(25, 24, 24, 0.12)',
          ghost: 'rgba(25, 24, 24, 0.06)',
        },
        surface: {
          ghost: 'rgba(25, 24, 24, 0.03)',
          subtle: 'rgba(25, 24, 24, 0.04)',
        },
        accent: {
          DEFAULT: '#1B5DEF',
          hover: '#0F49C7',
        },
        status: {
          ok: '#22C55E',
          warn: '#E25327',
        },
      },
      maxWidth: {
        container: '1280px',
        prose: '640px',
      },
      letterSpacing: {
        tightish: '-0.02em',
        tighter2: '-0.04em',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '640px',
            color: '#191818',
            a: {
              color: theme('colors.accent.DEFAULT'),
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            },
            'h2, h3, h4': {
              fontFamily: theme('fontFamily.display').join(', '),
              fontWeight: '600',
              letterSpacing: '-0.02em',
            },
            h2: { fontSize: '1.875rem', marginTop: '3rem', marginBottom: '1rem' },
            h3: { fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.75rem' },
            p: { lineHeight: '1.75' },
            code: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontSize: '0.875em',
              backgroundColor: 'rgba(25,24,24,0.05)',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.25rem',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            pre: {
              backgroundColor: '#0d1117',
              color: '#e6edf3',
              padding: '1rem 1.25rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              fontSize: '0.875rem',
              lineHeight: '1.6',
            },
            'pre code': { backgroundColor: 'transparent', padding: '0', color: 'inherit' },
            blockquote: {
              borderLeftColor: theme('colors.accent.DEFAULT'),
              fontStyle: 'normal',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
