import { CloseButton, Dialog, Image, Portal } from '@chakra-ui/react'

interface ImageLightboxProps {
  src: string | null
  alt: string
  onClose: () => void
}

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  return (
    <Dialog.Root
      open={src !== null}
      onOpenChange={(details) => {
        if (!details.open) onClose()
      }}
      placement="center"
    >
      <Portal>
        <Dialog.Backdrop bg="blackAlpha.800" />
        <Dialog.Positioner padding={4}>
          <Dialog.Content
            bg="transparent"
            boxShadow="none"
            maxWidth="90vw"
            maxHeight="90vh"
            width="fit-content"
          >
            <Dialog.CloseTrigger asChild>
              <CloseButton
                position="absolute"
                top={2}
                right={2}
                color="white"
                bg="blackAlpha.600"
                borderRadius="full"
                size={{ base: 'sm', md: 'lg' }}
                _hover={{ bg: 'blackAlpha.800' }}
              />
            </Dialog.CloseTrigger>
            {src && (
              <Image
                src={src}
                alt={alt}
                maxWidth="90vw"
                maxHeight="90vh"
                objectFit="contain"
                borderRadius="md"
              />
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
