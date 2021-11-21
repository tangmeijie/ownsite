import '../../styles/fengos/demo-desktop.scss'

import anime from 'animejs/lib/anime.es.js'
import {
  dSource,
  dArtist
} from './demo-data.js'
import {
  fnItemFocusable,
  fnSiblingsFocusable,
  fnAddActions,
  fnInitFocus,
  fnCloneItem,
  fnFillData
} from './demo-basic.js'

// 所需数据
let dNames = new Array(), dTitleImg = new Array()

for (let source of dSource) {
  dNames.push(source[1].name)
  dTitleImg.push(source[1].assets.title)
}

// 频道栏
const oChannel = document.getElementById('channel')
const aItems = oChannel.getElementsByClassName('item')

fnSiblingsFocusable(oChannel, 'chann-')
fnItemFocusable(aItems[0], {
  'data-down': 'btn-search'
})

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

// 搜索区
const oSearchBtn = document.getElementById('btn-search')
const oHot = document.getElementById('hot-word')
const aHotWords = oHot.getElementsByClassName('item')

fnCloneItem('hot-word', 7)
fnFillData(aHotWords, dNames, 'txt')

fnItemFocusable(oSearchBtn, {
  'data-up': 'channel',
  'data-down': 'hot-word'
})
fnSiblingsFocusable(oHot, 'word-')
for (let item of aHotWords) {
  fnItemFocusable(item, {
    'data-up': 'btn-search'
  })
}

// 排行榜
fnCloneItem('rank-recommend', 25)

const oRankRecom = document.getElementById('rank-recommend')
const aRecomItems = oRankRecom.getElementsByTagName('img')
fnFillData(aRecomItems, dTitleImg, 'img')

// 添加焦点事件
fnInitFocus(function () {
  fnChannelSilder()
})
fnAddActions(null, function () {
  fnChannelSilder()
})