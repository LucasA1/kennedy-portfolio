import { createSystem, defaultConfig, defineConfig, defineRecipe } from '@chakra-ui/react'

const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      solid: {
        bg: "brand.400",
        color: "white",
        _hover: {
          bg: "brand.700",
        },
      },
      outline: {
        bg: "transparent",
        color: "white",
        borderWidth: "2px",
        borderColor: "white",
        _hover: {
          bg: "whiteAlpha.200",
        },
      },
    },
  },
})

const config = defineConfig({
    theme: {
        tokens:{
            colors: {
                brand: {
                50: {value: '#ffeef6'},
                100: {value: '#ffd2e4'},
                200: {value: '#ffabc9'},
                300: {value: '#ff82ac'},
                400: {value: '#ff5c8c'},
                500: {value: '#e83070'},
                600: {value: '#c4165a'},
                700: {value: '#aa0247'},
                800: {value: '#7a0334'},
                900: {value: '#4a0220'}
                },
                slate: {
                50: {value: '#f8fafc'},
                100: {value: '#f1f5f9'},
                200: {value: '#e2e8f0'},
                300: {value: '#cbd5e1'},
                400: {value: '#94a3b8'},
                500: {value: '#64748b'},
                600: {value: '#475569'},
                700: {value: '#334155'},
                800: {value: '#1e293b'},
                900: {value: '#2b2b2b'}
                },
                coral: {
                50: {value: '#fff5f3'},
                100: {value: '#ffd4d4'},
                300: {value: '#fea99f'},
                400: {value: '#fc847e'},
                500: {value: '#f2695f'},
                600: {value: '#d1503f'},
                700: {value: '#a83c2e'},
                800: {value: '#7c2b21'},
                900: {value: '#501c16'}
                }
            },
            fonts: {
                body: {value: 'Roboto, system-ui, sans-serif'},
                heading: {value: 'Roboto, system-ui, sans-serif'}
            }
        },
        recipes: {
            button: buttonRecipe
        }
    }
})

export const system = createSystem(config, defaultConfig)
