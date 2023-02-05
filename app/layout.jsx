import '../styles/globals.css'
import Navigation from '@/Navigation'
import Foorter from '@/Footer'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Navigation />
        {children}
        <Foorter />
      </body>
    </html>
  )
}
