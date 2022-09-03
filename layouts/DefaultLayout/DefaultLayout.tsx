import { useState } from 'react'

import { AppShell, useMantineTheme } from '@mantine/core'

import MarketingFooter from 'src/components/organisms/MarketingFooter'
import MarketingHeader from 'src/components/organisms/MarketingHeader'
import MarketingNavbar from 'src/components/organisms/MarketingNavbar'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const links = [
  {
    link: '/about',
    label: 'Features',
  },
  {
    link: '#1',
    label: 'Learn',
    links: [
      {
        link: '/docs',
        label: 'Documentation',
      },
      {
        link: '/resources',
        label: 'Resources',
      },
      {
        link: '/community',
        label: 'Community',
      },
      {
        link: '/blog',
        label: 'Blog',
      },
    ],
  },
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/pricing',
    label: 'Pricing',
  },
  {
    link: '#2',
    label: 'Support',
    links: [
      {
        link: '/faq',
        label: 'FAQ',
      },
      {
        link: '/demo',
        label: 'Book a demo',
      },
      {
        link: '/forums',
        label: 'Forums',
      },
    ],
  },
]

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<MarketingNavbar links={links} opened={opened} />}
      footer={<MarketingFooter />}
      header={
        <MarketingHeader links={links} opened={opened} setOpened={setOpened} />
      }
    >
      {children}
    </AppShell>
  )
}
export default DefaultLayout
