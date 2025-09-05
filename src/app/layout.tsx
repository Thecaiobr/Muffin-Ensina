import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muffin Ensina',
  description: 'Tudo o que você precisa saber para cuidar do seu coelho e pets exóticos com amor e expertise. Guias completos, dicas de manejo e consultoria veterinária especializada.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Muffin Ensina',
    description: 'Tudo o que você precisa saber para cuidar do seu coelho e pets exóticos com amor e expertise. Guias completos, dicas de manejo e consultoria veterinária especializada.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Logo Muffin Ensina',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muffin Ensina',
    description: 'Tudo o que você precisa saber para cuidar do seu coelho e pets exóticos com amor e expertise. Guias completos, dicas de manejo e consultoria veterinária especializada.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/pequeno.png" sizes="64x64" />
        
        {/* Fontes do Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Ícones Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        {/* Animate.css */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}