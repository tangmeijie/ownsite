import '../styles/home.scss'
import {
  fnLoadComponent
} from './global.js'

document.addEventListener('DOMContentLoaded', () => {
  fnLoadComponent('/kits/nav.html', 'temp-nav', 'header')
})