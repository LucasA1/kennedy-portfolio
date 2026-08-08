import { createSystem, defaultConfig, defineConfig, defineRecipe } from '@chakra-ui/react'

const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      solid: {
        bg: "brand.500",
        color: "white",
        _hover: {
          bg: "brand.600",
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
                50: {value: '#ffe5f0'},
                100: {value: '#ffb3d1'},
                200: {value: '#ff80b3'},
                300: {value: '#ff4d94'},
                400: {value: '#ff1a75'},
                500: {value: '#d81b60'},
                600: {value: '#b21854'},
                700: {value: '#871644'},
                800: {value: '#5a102f'},
                900: {value: '#2f081a'}
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
                900: {value: '#111827'}
                },
                coral: {
                50: {value: '#fff1ec'},
                100: {value: '#ffd6c7'},
                200: {value: '#ffb8a3'},
                300: {value: '#ff9a7f'},
                400: {value: '#ff8a6b'},
                500: {value: '#ff7a59'},
                600: {value: '#e35f42'},
                700: {value: '#b84a34'},
                800: {value: '#8c3627'},
                900: {value: '#5f2419'}
                }
            },
            fonts: {
                body: {value: 'Poppins, system-ui, sans-serif'},
                heading: {value: 'Poppins, system-ui, sans-serif'}
            }
        },
        recipes: {
            button: buttonRecipe
        }
    }
})

export const system = createSystem(config, defaultConfig)
