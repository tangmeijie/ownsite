import '../styles/works.scss'
import {
  fnLoadComponent
} from './global.js'

document.addEventListener('DOMContentLoaded', () => {
  fnLoadComponent('/kits/nav.html', 'nav', 'header', 'works')
})