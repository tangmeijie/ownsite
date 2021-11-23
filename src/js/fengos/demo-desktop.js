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

// 数据整理
let dTitle = new Array()
let dTitleImg = new Array()
let dName = new Array()
let dAvatar = new Array()
for (let value of dSource.values()) {
  dTitle.push(value.title)
  dTitleImg.push(value.assets.title)
}
for (let value of dArtist.values()) {
  dName.push(value.name)
  dAvatar.push(value.assets.avatar)
}

// 频道栏
const oChannel = document.getElementById('channel')
const aChannelItems = oChannel.getElementsByClassName('item')

fnSiblingsFocusable(oChannel, 'chann-')
fnItemFocusable(aChannelItems[0], {
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
const oHot = document.getElementById('search-word')
const aHotWords = oHot.getElementsByClassName('item')

fnCloneItem('search-word', 7)
fnFillData(aHotWords, dTitle, 'txt')

fnItemFocusable(oSearchBtn, {
  'data-up': 'channel',
  'data-down': 'search-word'
})
fnSiblingsFocusable(oHot, 'word-')
for (let item of aHotWords) {
  fnItemFocusable(item, {
    'data-up': 'btn-search',
    'data-down': 'rank-recommend'
  })
}

// 排行榜
fnRankContent({
  id: 'rank-recommend',
  ctx: [{
    selector: 'img',
    data: dTitleImg,
    type: 'img'
  }]
},{
  id: 'rank-hot',
  ctx: [{
    selector: 'img',
    data: dTitleImg,
    type: 'img'
  }]
},{
  id: 'rank-collect',
  ctx: [{
    selector: 'img',
    data: dTitleImg,
    type: 'img'
  }]
},{
  id: 'rank-topic',
  ctx: [{
    selector: 'img',
    data: dTitleImg,
    type: 'img'
  }]
},{
  id: 'rank-actor',
  ctx: [{
    selector: 'img',
    data: dAvatar,
    type: 'img'
  },{
    selector: 'h2',
    data: dName,
    type: 'txt'
  }]
},{
  id: 'rank-actress',
  ctx: [{
    selector: 'img',
    data: dAvatar,
    type: 'img'
  },{
    selector: 'h2',
    data: dName,
    type: 'txt'
  }]
})

function fnRankContent(...ranks) {
  for (let rank of ranks) {
    const oRank = document.getElementById(rank.id)

    if (!rank.len) {
      rank.len = 10
    }
    fnCloneItem(rank.id, rank.len)

    const aRankNum = oRank.getElementsByClassName('num')
    for (let i = 0; i < aRankNum.length; i++) {
      aRankNum[i].innerHTML = i + 1
    }

    for (let x of rank.ctx) {
      if (!x.start) {
        x.start = 0
      }
      const elems = oRank.querySelectorAll(x.selector)
      fnFillData(elems, x.data, x.type, x.start)
    }
  }
}

// fnSiblingsFocusable(oRankRecom, 'recom-', false)
// fnSiblingsFocusable(oRankHot, 'hot-', false)

// 添加焦点事件
fnInitFocus(function () {
  fnChannelSilder()
})
fnAddActions(null, function () {
  fnChannelSilder()
})