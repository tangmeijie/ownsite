import '../../styles/fengos/demo-desktop.scss'

import anime from 'animejs/lib/anime.es.js'
import {
  aMovies,
  test
} from './demo-data.js'
import {
  fnFocusable,
  fnSiblingsFocusable,
  fnAddActions,
  fnInitFocus,
  fnCloneItem
} from './demo-basic.js'

console.log(test.keys())

// 频道栏
const oChannel = document.getElementById('channel')
const aItems = oChannel.getElementsByClassName('item')

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
  fnSiblingsFocusable(oChannel, 'chann-')

  fnFocusable(aItems[0], {
    'iddown': 'btn-search'
  })
}

// 搜索区
const oBtnSearch = document.getElementById('btn-search')
const oHotWord = document.getElementById('hot-words')
const aHotWords = oHotWord.getElementsByClassName('item')

fnCloneItem('hot-words', 7)
fnFillHotWords()

function fnFillHotWords() {
  let start = 0
  for (let i of Object.keys(aHotWords)) {
    let j = (i + start) % aMovies.length
    aHotWords[i].innerHTML = aMovies[j].name
  }
}

function fnSearchFocusable() {
  fnFocusable(oBtnSearch, {
    'idup': 'chann-0',
    'iddown': 'word-0'
  })

  fnSiblingsFocusable(oHotWord, 'word-')
  for (let item of aHotWords) {
    fnFocusable(item, {
      'idup': 'btn-search'
    })
  }
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