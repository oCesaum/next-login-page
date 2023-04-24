import './globals.css'

export const metadata = {
  title: 'Next Login Page',
  description: 'Criando uma página de login utilizando o Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
