import './globals.css'

export const metadata = {
  title: 'Guilherme Delarry',
  description: 'Projeto next-js que contem meu portif',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-zinc-100 dark:bg-zinc-900'>{children}</body>
    </html>
  )
}
