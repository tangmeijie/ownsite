import '../../styles/fengos/demo-desktop.scss'

import {
  fnGetTime,
  fnNodeIndex
} from '../../js/fengos/demo-basic.js'
import anime from 'animejs/lib/anime.es.js'

// 状态栏时间走动
const oTime = document.getElementById('time')
oTime.innerHTML = fnGetTime()
setInterval(function () {
  oTime.innerHTML = fnGetTime()
}, 1000 * 30)


const oChannel = document.getElementById('channel')
const aChannelCells = oChannel.getElementsByClassName('cell')