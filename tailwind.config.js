/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width:{
        container: '1440px'
      },
      fontSize:{
        'h1': '2.25rem',
        'h2': '1.5rem',
        'h3': '1.25rem',
        'h4': '1.25rem',
        'regular': '1rem',
        'caption': '0.875rem',
        'small': '0.75rem',
        'very-small': '0.625rem',
        'counter': '0.5rem',
      },
      colors:{
        'blue': '#5C6AFF',
        'blue-hover': '#7E89FF',
        'blue-active': '#4A58EF',
        'blue-dark': '#1F255A',
          'blue-pale': '#F2F4FF',
          'blue-light': '#E9ECFF',
          'black': '#333333',
          'black-light': '#F5F6FA',
          'pink': '#ff49db',
          'orange': '#FC7D00',
          'orange-light': 'rgba(255,158,81,0.77)',
          'orange-pale': '#FFE7CF',
          'green': '#5BCD8A',
          'green-hover': '#21B5C2',
          'green-pale': '#E2FFEE',
          'gray-dark': '#4F4F4F',
          'gray': '#828282',
          'gray-light': '#BDBDBD',
          'gray-thin': '#E0E0E0',
          'gray-pale': '#f2f2f2',
          'white': '#ffffff',
          'white-dark': '#f5f5f5',
          'red': '#EB5757',
          'red-pale': '#FFECF0',
          'blue-hover': '#7E89FF',
          'orange-hover': '#FF942B',
          'red-hover': '#FA6E6E',
          'orange-active': '#EC7908',
          'red-active': '#E44C4C',
          'green-active': '#55CC86',
          'transparent': '#00000000',
          'main': '#4F4F4F',
          'yellow-pale': '#FEF7E3',
          'violet-pale': '#F8F4FE'
      }
      
    },
  },
  plugins: [
        plugin(({  addComponents, theme }) => {
            
            addComponents({
                '.g-container': {
                    width: theme('width.container'),
                    padding: '0 24px',
                    margin: '0 auto'
                },
                '.g-button': {
                    padding: '8px 32px',
                    backgroundColor: theme('colors.blue'),
                    color: theme('colors.white'),
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: theme('colors.blue-hover'),
                    },
                    '&:active': {
                      backgroundColor: theme('colors.blue-active')
                    }
                },
                '.g-button-red': {
                    backgroundColor: theme('colors.red'),
                    '&:hover': {
                      backgroundColor: theme('colors.red-hover'),
                    },
                    '&:active': {
                      backgroundColor: theme('colors.red-active')
                    }
                },
                '.g-button-green': {
                    backgroundColor: theme('colors.green'),
                    '&:hover': {
                      backgroundColor: theme('colors.green-hover'),
                    },
                    '&:active': {
                      backgroundColor: theme('colors.green-active')
                    }
                },
                '.g-text-area': {
                  borderWidth:'1px',
                  borderRadius:'8px',
                  borderColor: theme('colors.gray-light'),
                  minHeight: '40px',
                  padding:'4px 16px',
                  
                }
                
            })
        })
    ],
}

