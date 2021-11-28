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

void
function fnChannelFocusable() {
  // 左右切换频道
  fnSiblingsFocusable('channel', 'chann-')

  // 向下进入频道
  fnItemFocusable(aChannelItems[0], {
    'data-down': 'search-btn'
  })
  fnItemFocusable(aChannelItems[1], {
    'data-down': ''
  })
}()

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

void
function fnSearchFocusable() {
  // 搜索按钮
  fnItemFocusable(oSearchBtn, {
    'data-up': 'channel',
    'data-down': 'search-hot'
  })

  // 热搜词
  fnSiblingsFocusable('search-hot', 'word-')
  for (let item of aHotWords) {
    fnItemFocusable(item, {
      'data-up': 'search-btn',
      'data-down': 'recommend-0'
    })
  }
}()

// 排行榜
fnRankData({
  id: 'rank-recommend',
  ctx: [{
    tag: 'img',
    data: dTitleImg
  }]
}, {
  id: 'rank-hot',
  ctx: [{
    tag: 'img',
    data: dTitleImg,
    start: 1
  }]
}, {
  id: 'rank-collect',
  ctx: [{
    tag: 'img',
    data: dTitleImg
  }]
}, {
  id: 'rank-topic',
  ctx: [{
    tag: 'img',
    data: dTitleImg
  }]
}, {
  id: 'rank-actor',
  ctx: [{
    tag: 'img',
    data: dAvatar
  }, {
    tag: 'h2',
    data: dName
  }]
}, {
  id: 'rank-actress',
  ctx: [{
    tag: 'img',
    data: dAvatar
  }, {
    tag: 'h2',
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

    const aRankNum = oRank.getElementsByTagName('span')
    for (let i = 0; i < aRankNum.length; i++) {
      aRankNum[i].innerHTML = i + 1
    }

    for (let x of rank.ctx) {
      if (!x.start) {
        x.start = 0
      }
      const elems = oRank.getElementsByTagName(x.tag)
      fnFillData(elems, x.data, x.start)
    }
  }
}

void
function fnRankFocusable() {
  // 获取所有榜单
  let aRankId = new Array()

  const aRanks = document.getElementById('rank').getElementsByTagName('section')
  for (let rank of aRanks) {
    aRankId.push(rank.id)
  }

  // 添加切换属性
  for (let i = 0; i < aRankId.length; i++) {
    const oRank = document.getElementById(aRankId[i])

    // 纵向切换
    const sPrefix = aRankId[i].slice(5) + '-'
    fnSiblingsFocusable(aRankId[i], sPrefix, false)

    // 横向切换
    const aItems = oRank.getElementsByClassName('item')
    for (let item of aItems) {
      switch (i) {
        case 0:
          fnItemFocusable(item, {
            'data-right': aRankId[i + 1]
          })
          break
        case aRankId.length - 1:
          fnItemFocusable(item, {
            'data-left': aRankId[0]
          })
          break
        default:
          fnItemFocusable(item, {
            'data-right': aRankId[i + 1],
            'data-left': aRankId[i - 1]
          })
      }
    }

    // 榜单第一项
    const oFirstItem = oRank.getElementsByClassName('item')[0]
    fnItemFocusable(oFirstItem, {
      'data-up': 'chann-0'
    })
  }
}()

function fnRankToggle() {
  const oFocus = document.activeElement
  const oSearch = document.getElementById('search')

  // 切换时全屏展示
  if (!oFocus.closest('#rank')) {
    oSearch.classList.remove('fullscreen')
  } else {
    oSearch.classList.add('fullscreen')
  }
}

// 添加焦点事件
fnAddActions(null, function () {
  fnChannelSilder()
  fnRankToggle()
})