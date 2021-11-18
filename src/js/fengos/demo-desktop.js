import '../../styles/fengos/demo-desktop.scss'

import anime from 'animejs/lib/anime.es.js'
import {
  dSource,
  dArtist
} from './demo-data.js'
import {
  fnFocusable,
  fnSiblingsFocusable,
  fnAddActions,
  fnInitFocus,
  fnCloneItem
} from './demo-basic.js'

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
const oSearchBtn = document.getElementById('btn-search')
const oHot = document.getElementById('hot-word')
const aHotWords = oHot.getElementsByClassName('item')

fnCloneItem('hot-word', 7)
fnFillHot()

function fnFillHot(start = 0) {
  let dWords = new Array()

  for (let hot of dSource) {
    dWords.push(hot[1].name)
  }

  for (let i of Object.keys(aHotWords)) {
    let j = (i + start) % dWords.length
    aHotWords[i].innerHTML = dWords[j]
  }
}

function fnSearchFocusable() {
  fnFocusable(oSearchBtn, {
    'idup': 'chann-0',
    'iddown': 'word-0'
  })

  fnSiblingsFocusable(oHot, 'word-')
  for (let item of aHotWords) {
    fnFocusable(item, {
      'idup': 'btn-search'
    })
  }
}

// 排行榜
const oRankRecom = document.getElementById('rank-recommend')
fnCloneItem('rank-recommend', 25)
fnFillRankRecom()

function fnFillRankRecom(start = 0) {
  const aRecomItems = oRankRecom.getElementsByClassName('item')
  let dTitle = new Array()

  for (let title of dSource) {
    dTitle.push(title[1].assets.title)
  }

  for (let i of Object.keys(aRecomItems)) {
    let j = (i + start) % dTitle.length
    aRecomItems[i].getElementsByTagName('img')[0].src = dTitle[j]
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