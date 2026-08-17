import { Box } from '@chakra-ui/react'

export default function PortfolioBackdrop() {
  return (
    <Box
      aria-hidden="true"
      position="absolute"
      inset={0}
      backgroundImage="url(/images/home/home-portfolio.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="85%"
      zIndex={0}
    />
  )
}
