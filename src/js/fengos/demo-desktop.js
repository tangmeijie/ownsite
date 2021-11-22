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
const oRankRecom = document.getElementById('rank-recommend')
const oRankHot = document.getElementById('rank-hot')
const oRankCollect = document.getElementById('rank-collect')

fnCloneRank({
  'rank-recommend': 10,
  'rank-hot': 10,
  'rank-collect': 10
})

fnFillRankOrder(['rank-hot', 'rank-collect'])

fnFillRankData([{
  elems: oRankRecom.getElementsByTagName('img'),
  data: dImgTitle,
  type: 'img'
}, {
  elems: oRankHot.getElementsByTagName('img'),
  data: dImgTitle,
  type: 'img',
  start: 1
},{
  elems: oRankCollect.getElementsByTagName('img'),
  data: dImgTitle,
  type: 'img',
  start: 0
}])

function fnCloneRank(oRankLength) {
  for (let [id, length] of Object.entries(oRankLength)) {
    fnCloneItem(id, length)
  }
}

function fnFillRankOrder(aRankID) {
  for (let id of aRankID) {
    const oRank = document.getElementById(id)
    const aRankOrder = oRank.getElementsByClassName('num')
    for (let i = 0; i < aRankOrder.length; i++) {
      aRankOrder[i].innerHTML = i + 1
    }
  }
}

function fnFillRankData(aElemData) {
  for (let x of aElemData) {
    if (!x.start) {
      x.start = 0
    }
    fnFillData(x.elems, x.data, x.type, x.start)
  }
}

// 添加焦点事件
fnInitFocus(function () {
  fnChannelSilder()
})
fnAddActions(null, function () {
  fnChannelSilder()
})