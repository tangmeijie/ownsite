import '../../styles/fengos/demo-desktop.scss'

import {
  fnGetTime,
  fnNodeIndex,
  fnActions
} from '../../js/fengos/demo-basic.js'

import anime from 'animejs/lib/anime.es.js'

// 状态栏时间
const oTime = document.getElementById('time')
oTime.innerHTML = fnGetTime()
setInterval(function () {
  oTime.innerHTML = fnGetTime()
}, 1000 * 30)

// 频道栏切换
const oChannel = document.getElementById('channel')

function fnToggleChannel(direction) {
  const aChannelCells = oChannel.getElementsByClassName('cell')
  let oFocus = document.getElementById('focus')
  let index = fnNodeIndex(aChannelCells, oFocus)

  switch (direction) {
    case 'right':
      if (index < aChannelCells.length) {
        oFocus.id = ''
        aChannelCells[index + 1].id = 'focus'
      }
      break
    case 'left':
      if (index > 0) {
        oFocus.id = ''
        aChannelCells[index - 1].id = 'focus'
      }
      break
  }
}

fnActions()
