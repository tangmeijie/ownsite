import '../styles/portfolio.scss'
import {
  fnLoadComponent,
  fnScrollHeader
} from './global.js'

document.addEventListener('DOMContentLoaded', () => {
  fnLoadComponent('/kits.html', 'temp-nav', 'header')
  fnLoadComponent('/kits.html', 'temp-foot', 'footer')
})

fnScrollHeader()