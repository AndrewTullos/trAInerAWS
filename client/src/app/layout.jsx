import dynamic from 'next/dynamic'
import React from 'react'

const StarsCanvasWithNoSSR = dynamic(
  () => import('../components/StarBackground'),
  {
    ssr: false,
  },
)

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'Tr-AI-ner',
    default: 'Artificial Inteligent Atheletic Trainer',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <StarsCanvasWithNoSSR />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
