import { HStack, Link, Stack, Text } from '@chakra-ui/react'
import type { StackProps } from '@chakra-ui/react'
import { FaRegEnvelope, FaAt, FaPhone } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import { siteConfig } from '../data'

interface ContactRow {
  icon: IconType
  label: string
  href?: string
}

interface ContactListProps {
  color?: string
  includePhone?: boolean
  direction?: StackProps['direction']
  align?: StackProps['align']
}

export default function ContactList({
  color = 'inherit',
  includePhone = true,
  direction = 'column',
  align = 'start',
}: ContactListProps) {
  const { contact } = siteConfig

  const rows: ContactRow[] = [
    { icon: FaRegEnvelope, label: contact.email, href: `mailto:${contact.email}` },
    { icon: FaAt, label: contact.handle },
    ...(includePhone ? [{ icon: FaPhone, label: contact.phone, href: `tel:${contact.phone}` }] : []),
  ]

  return (
    <Stack direction={direction} align={align} gap={4}>
      {rows.map((row) => (
        <HStack key={row.label} gap={2} color={color}>
          <row.icon aria-hidden="true" />
          {row.href ? (
            <Link href={row.href} color="slate.900" _hover={{ textDecoration: 'underline' }}>
              {row.label}
            </Link>
          ) : (
            <Text color="slate.900">{row.label}</Text>
          )}
        </HStack>
      ))}
    </Stack>
  )
}
