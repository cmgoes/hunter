import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './router'
import { ThemeProvider } from './contexts/ThemeContext'
import { SessionProvider } from './contexts/SessionContext'
import { WebStrategy } from './webStrategy'

import theme from './theme.json'

/**
 * Theme images
 */
import logo from './assets/images/logo.png'
import footerLogo from './assets/images/footer-logo.png'

theme.images = {
  logo,
  footerLogo
}

theme.icons = {

}

const webStrategy = new WebStrategy()

const RouteApp = () => {
  return (
    <SessionProvider strategy={webStrategy}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SessionProvider>
  )
}

const wrapper = document.getElementById('root')
ReactDOM.render(<RouteApp />, wrapper)
