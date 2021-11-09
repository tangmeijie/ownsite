import '../../styles/fengos/demo-desktop.scss'

import anime from 'animejs/lib/anime.es.js'
import {
  fnGetTime,
  fnAddActions,
  fnInitFocus
} from '../../js/fengos/demo-basic.js'

// 添加焦点事件
fnChannalFocusable()

fnInitFocus(function () {
  fnChannelSilder()
})

fnAddActions(null, function () {
  fnChannelSilder()
})

// 状态栏时间
const oTime = document.getElementById('time')
oTime.innerHTML = fnGetTime()
setInterval(function () {
  oTime.innerHTML = fnGetTime()
}, 1000 * 30)

// 频道栏
const oChannel = document.getElementById('channel')

function fnChannalFocusable() {
  const aItems = oChannel.getElementsByClassName('item')
  for (let i = 0; i < aItems.length; i++) {
    aItems[i].id = 'chann-' + i
    aItems[i].tabIndex = '-1'

    switch (i) {
      case 0:
        aItems[i].setAttribute('id-r', 'chann-' + (i + 1))
        break
      case aItems.length - 1:
        aItems[i].setAttribute('id-l', 'chann-' + (i - 1))
        break
      default:
        aItems[i].setAttribute('id-r', 'chann-' + (i + 1))
        aItems[i].setAttribute('id-l', 'chann-' + (i - 1))
    }
  }
}

function fnChannelSilder() {
  const oFocus = document.activeElement
  if (!oFocus.closest('#channel')) {
    return false
  }

  const oSilder = document.getElementById('channel-slider')
  const oBar = oSilder.parentNode

  const iLeft = oFocus.offsetLeft
  const iRight = oBar.offsetWidth - iLeft - oFocus.offsetWidth

  const sliderAnime = anime({
    targets: oSilder,
    left: iLeft,
    right: iRight,
    easing: 'spring(0.5, 100, 36, 24)',
    autoplay: false
  })
  sliderAnime.play()
}
