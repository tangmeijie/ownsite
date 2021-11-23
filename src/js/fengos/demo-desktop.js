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
const aHotWords = document.getElementById('search-word').getElementsByClassName('item')

fnCloneItem('search-word', 7)
fnFillData(aHotWords, dTitle)

fnItemFocusable(oSearchBtn, {
  'data-up': 'channel',
  'data-down': 'search-word'
})
fnSiblingsFocusable('search-word', 'word-')
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
    data: dTitleImg
  }]
}, {
  id: 'rank-hot',
  ctx: [{
    selector: 'img',
    data: dTitleImg
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
      fnFillData(elems, x.data, x.start)
    }
  }
}

fnSiblingsFocusable('rank-recommend', 'recom-', false)
fnSiblingsFocusable('rank-hot', 'hot-', false)
fnSiblingsFocusable('rank-collect', 'collect-', false)
fnSiblingsFocusable('rank-topic', 'collect-', false)
fnSiblingsFocusable('rank-actor', 'collect-', false)
fnSiblingsFocusable('rank-actress', 'collect-', false)

// 添加焦点事件
fnAddActions(null, function () {
  fnChannelSilder()
})