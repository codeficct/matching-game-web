import Navigation from '@/Navigation'
import '../styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        {/* <script dangerouslySetInnerHTML={{
          __html: `
            !function () { try { var d = document.documentElement, n = 'data-theme', s = 'setAttribute'; var e = localStorage.getItem('theme'); if ('system' === e || (!e && true)) { var t = '(prefers-color-scheme: dark)', m = window.matchMedia(t); if (m.media !== t || m.matches) { d.style.colorScheme = 'dark'; d[s](n, 'dark') } else { d.style.colorScheme = 'light'; d[s](n, 'light') } } else if (e) { d[s](n, e || '') } if (e === 'light' || e === 'dark') d.style.colorScheme = e } catch (e) { } }()`
        }}
        /> */}
        <Navigation />
        {children}
      </body>
    </html>
  )
}
