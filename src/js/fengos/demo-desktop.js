import '../../styles/fengos/demo-desktop.scss'

import anime from 'animejs/lib/anime.es.js'
import {
  aMovies
} from './demo-data.js'
import {
  fnSiblingsFocusable,
  fnSetAttr,
  fnAddActions,
  fnInitFocus
} from './demo-basic.js'

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

  aItems[0].setAttribute('elemid-down', 'btn-search')
}

// 搜索区
const oBtnSearch = document.getElementById('btn-search')
const oHotWord = document.getElementById('hot-words')

function fnSearchFocusable() {
  fnSetAttr(oBtnSearch, {
    'elemid-up': 'chann-0'
  })
}

// 添加焦点事件
fnSiblingsFocusable(oChannel, 'chann-')
fnSiblingsFocusable(oHotWord, 'word-')
fnChannalFocusable()
fnSearchFocusable()

fnInitFocus(function () {
  fnChannelSilder()
})
fnAddActions(null, function () {
  fnChannelSilder()
})