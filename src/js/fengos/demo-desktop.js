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
let dNames = new Array()
let dImgTitle = new Array()
for (let value of dSource.values()) {
  dNames.push(value.name)
  dImgTitle.push(value.assets.title)
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
fnCloneItem('rank-hot', 25)

const oRankRecom = document.getElementById('rank-recommend')
const aRecomImgs = oRankRecom.getElementsByTagName('img')
fnFillData(aRecomImgs, dImgTitle, 'img')

const oRankHot = document.getElementById('rank-hot')
const aHotNums = oRankHot.getElementsByClassName('num')
const aHotImgs = oRankHot.getElementsByTagName('img')
fnFillData(aHotImgs, dImgTitle, 'img', 1)
for (let i = 0; i < aHotNums.length; i++) {
  aHotNums[i].innerHTML = i + 1
}

// 添加焦点事件
fnInitFocus(function () {
  fnChannelSilder()
})
fnAddActions(null, function () {
  fnChannelSilder()
})