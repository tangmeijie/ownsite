import '../../styles/fengos/demo-desktop.scss'

import anime from 'animejs/lib/anime.es.js'
import {
  aMovies
} from './demo-data.js'
import {
  fnGetTime,
  fnSiblingsFocusable,
  fnAddActions,
  fnInitFocus
} from './demo-basic.js'

// 状态栏时间
const oTime = document.getElementById('time')
oTime.innerHTML = fnGetTime()
setInterval(function () {
  oTime.innerHTML = fnGetTime()
}, 1000 * 30)

// 频道栏
const oChannel = document.getElementById('channel')

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

function fnChannalFocusable() {
  const aItems = oChannel.getElementsByClassName('item')

  aItems[0].setAttribute('id-d', 'btn-search')
}

function fnSearchFocusable() {
  const oBtnSearch = document.getElementById('btn-search')
  oBtnSearch.setAttribute('id-u', 'chann-0')
}

// 添加焦点事件
fnSiblingsFocusable(oChannel, 'chann-')
fnChannalFocusable()
fnSearchFocusable()

fnInitFocus(function () {
  fnChannelSilder()
})
fnAddActions(null, function () {
  fnChannelSilder()
})