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
const aChannelItems = document.getElementById('channel').getElementsByClassName('item')

fnSiblingsFocusable('channel', 'chann-')
fnItemFocusable(aChannelItems[0], {
  'data-down': 'search-btn'
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
const oSearchBtn = document.getElementById('search-btn')
const aHotWords = document.getElementById('search-hot').getElementsByClassName('item')

fnCloneItem('search-hot', 7)
fnFillData(aHotWords, dTitle)

fnItemFocusable(oSearchBtn, {
  'data-up': 'channel',
  'data-down': 'search-hot'
})
fnSiblingsFocusable('search-hot', 'word-')
for (let item of aHotWords) {
  fnItemFocusable(item, {
    'data-up': 'search-btn',
    'data-down': 'rank-recommend'
  })
}

// 排行榜
fnRankData({
  id: 'rank-recommend',
  ctx: [{
    selector: 'img',
    data: dTitleImg
  }]
}, {
  id: 'rank-hot',
  ctx: [{
    selector: 'img',
    data: dTitleImg,
    start: 1
  }]
}, {
  id: 'rank-collect',
  ctx: [{
    selector: 'img',
    data: dTitleImg
  }]
}, {
  id: 'rank-topic',
  ctx: [{
    selector: 'img',
    data: dTitleImg
  }]
}, {
  id: 'rank-actor',
  ctx: [{
    selector: 'img',
    data: dAvatar
  }, {
    selector: 'h2',
    data: dName
  }]
}, {
  id: 'rank-actress',
  ctx: [{
    selector: 'img',
    data: dAvatar
  }, {
    selector: 'h2',
    data: dName
  }]
})

function fnRankData(...ranks) {
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
      fnFillData(elems, x.data, x.start)
    }
  }
}

fnSiblingsFocusable('rank-recommend', 'recom-', false)
fnSiblingsFocusable('rank-hot', 'hot-', false)
fnSiblingsFocusable('rank-collect', 'collect-', false)
fnSiblingsFocusable('rank-topic', 'topic-', false)
fnSiblingsFocusable('rank-actor', 'actor-', false)
fnSiblingsFocusable('rank-actress', 'actress-', false)

function fnRankFullscreen() {
  const oFocus = document.activeElement
  const oSearch = document.getElementById('search')

  if (!oFocus.closest('#rank')) {
    oSearch.classList.remove('fullscreen')
    return false
  } else {
    oSearch.classList.add('fullsreen')
  }
}

// 添加焦点事件
fnAddActions(null, function () {
  fnChannelSilder()
  fnRankFullscreen()
})