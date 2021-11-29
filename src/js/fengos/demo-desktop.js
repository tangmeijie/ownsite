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
  fnFillData,
  fnRandomArray
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
const aSourceID = [...dSource]

// 频道栏
const oChannel = document.getElementById('channel')
const aChannelItems = oChannel.getElementsByClassName('item')

;
(function fnChannelFocusable() {
  // 左右切换频道
  fnSiblingsFocusable('channel', 'chann-')

  // 向下进入频道
  fnItemFocusable(aChannelItems[0], {
    'data-down': 'search-btn'
  })
  fnItemFocusable(aChannelItems[1], {
    'data-down': ''
  })
})()

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
const oSearch = document.getElementById('page-search')
const oSearchBtn = document.getElementById('search-btn')
const aHotWords = document.getElementById('search-hot').getElementsByClassName('item')

;
(function fnFillSearch(n) {
  fnCloneItem('search-hot', n)

  const aRandom = fnRandomArray(n)
  for (let [i, word] of Object.entries(aHotWords)) {
    const j = aRandom[i] % dSource.size
    const id = aSourceID[j][0]

    word.setAttribute('data-enter', id)
    word.innerHTML = dSource.get(id).title
  }
})(7)

;
(function fnSearchFocusable() {
  // 搜索按钮
  fnItemFocusable(oSearchBtn, {
    'data-up': 'chann-0',
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
})()

// 排行榜
const oRank = document.getElementById('rank')
const oRankGuider = document.getElementById('rank-guider')

fnRankData({
  id: 'rank-recommend',
  ctx: [{
    class: 'title',
    data: dTitleImg
  }]
}, {
  id: 'rank-hot',
  ctx: [{
    class: 'title',
    data: dTitleImg
  }]
}, {
  id: 'rank-collect',
  ctx: [{
    class: 'title',
    data: dTitleImg
  }]
}, {
  id: 'rank-topic',
  ctx: [{
    class: 'title',
    data: dTitleImg
  }]
}, {
  id: 'rank-actor',
  ctx: [{
    class: 'avatar',
    data: dAvatar
  }, {
    class: 'name',
    data: dName
  }]
}, {
  id: 'rank-actress',
  ctx: [{
    class: 'avatar',
    data: dAvatar
  }, {
    class: 'name',
    data: dName
  }]
})

function fnRankData(...ranks) {
  for (let rankctx of ranks) {
    const rank = document.getElementById(rankctx.id)

    // 克隆内容
    const amount = rankctx.amount || 10
    fnCloneItem(rankctx.id, amount)

    // 填充序号
    const aRankNum = rank.getElementsByClassName('num')
    for (let i = 0; i < aRankNum.length; i++) {
      aRankNum[i].innerHTML = i + 1
    }

    // 填充内容
    for (let x of rankctx.ctx) {
      const elems = rank.getElementsByClassName(x.class)
      // fnFillData(elems, x.data)
    }

    // 添加指示器
    const oGuider = document.createElement('span')
    oRankGuider.appendChild(oGuider)
  }
}

;(function fnFillRank(n = 10) {
  const aRecoms = document.getElementById('rank-recommend').getElementsByClassName('item')
  const aRandom = fnRandomArray(n)
  for (let [i, item] of Object.entries(aRecoms)) {
    const j = aRandom[i] % dSource.size
    const id = aSourceID[j][0]

    item.setAttribute('data-enter', id)
  }

  const aHots = document.getElementById('rank-hot').getElementsByClassName('item')
  // const aOrder = []
})()

;
(function fnRankFocusable() {
  // 获取所有榜单id
  let aRankId = new Array()
  const sections = oRank.getElementsByTagName('section')
  for (let rank of sections) {
    aRankId.push(rank.id)
  }

  // 添加切换属性
  for (let [i, id] of aRankId.entries()) {
    const rank = document.getElementById(id)

    // 纵向切换
    const sPrefix = id.slice(5) + '-'
    fnSiblingsFocusable(id, sPrefix, false)

    // 横向切换
    const aItems = rank.getElementsByClassName('item')
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
    const oFirstItem = rank.getElementsByClassName('item')[0]
    fnItemFocusable(oFirstItem, {
      'data-up': 'chann-0'
    })
  }
})()

function fnRankToggle() {
  const oFocus = document.activeElement

  // 全屏展示
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