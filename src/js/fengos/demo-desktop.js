import '../../styles/fengos/demo-desktop.scss'

import {
  fnGetTime
} from '../../js/fengos/demo-basic.js'
import anime from 'animejs/lib/anime.es.js'

const oTime = document.getElementById('time')
oTime.innerHTML = fnGetTime()
setInterval(function () {
  oTime.innerHTML = fnGetTime()
}, 1000 * 30)