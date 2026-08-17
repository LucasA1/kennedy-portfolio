import { Text, type TextProps } from '@chakra-ui/react'

export default function Eyebrow({ color = 'brand.400', fontSize = 'lg', letterSpacing = 'wide', ...rest }: TextProps) {
  return (
    <Text
      color={color}
      fontWeight="bold"
      fontSize={fontSize}
      textTransform="uppercase"
      letterSpacing={letterSpacing}
      {...rest}
    />
  )
}
