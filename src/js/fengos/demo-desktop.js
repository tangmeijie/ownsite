import '../../styles/fengos/demo-desktop.scss'

import anime from 'animejs/lib/anime.es.js'
import {
  aMovies
} from './demo-data.js'
import {
  fnFocusable,
  fnSiblingsFocusable,
  fnAddActions,
  fnInitFocus
} from './demo-basic.js'

// 频道栏

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
  const oChannel = document.getElementById('channel')
  fnSiblingsFocusable(oChannel, 'chann-')

  const aItems = oChannel.getElementsByClassName('item')
  fnFocusable(aItems[0], {
    'iddown': 'btn-search'
  })
}

// 搜索区
function fnSearchFocusable() {
  const oBtnSearch = document.getElementById('btn-search')
  const oHotWord = document.getElementById('hot-words')

  fnFocusable(oBtnSearch, {
    'idup': 'chann-0'
  })
  fnSiblingsFocusable(oHotWord, 'word-')
}

// 添加焦点事件
fnChannalFocusable()
fnSearchFocusable()

fnInitFocus(function () {
  fnChannelSilder()
})
fnAddActions(null, function () {
  fnChannelSilder()
})