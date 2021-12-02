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
  fnRandomArray
} from './demo-basic.js'

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
const aHotWords = document.getElementById('search-hot').children

;
(function fnFillSearch(n) {
  fnCloneItem('search-hot', n)

  const aRandom = fnRandomArray(n)
  for (let [i, word] of Object.entries(aHotWords)) {
    const id = aRandom[i] + 100

    word.setAttribute('data-id', id)
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
const oRankBg = document.getElementById('rank-bg')

fnFillRank({
  id: 'rank-recommend',
  data: dSource,
  range: [100, 100 + 12],
  fill: {
    '.title': ['assets', 'title']
  }
}, {
  id: 'rank-hot',
  data: dSource,
  range: [100, 100 + 12],
  fill: {
    '.title': ['assets', 'title']
  }
}, {
  id: 'rank-collect',
  data: dSource,
  range: [100, 100 + 12],
  fill: {
    '.title': ['assets', 'title']
  }
}, {
  id: 'rank-topic',
  data: dSource,
  range: [100, 100 + 12],
  fill: {
    '.title': ['assets', 'title']
  }
}, {
  id: 'rank-actor',
  data: dArtist,
  range: [200, 200 + 12],
  fill: {
    '.avatar': ['assets', 'avatar'],
    '.name': []
  }
}, {
  id: 'rank-actress',
  data: dArtist,
  range: [200, 200 + 12],
  fill: {
    '.avatar': ['assets', 'avatar'],
    '.name': ['name']
  }
})

function fnFillRank(...ranks) {
  for (let rank of ranks) {
    const oRank = document.getElementById(rank.id)

    // 克隆内容
    const n = rank.n || 10
    fnCloneItem(rank.id, n)

    // 填充序号
    const aNums = oRank.getElementsByClassName('num')
    for (let i = 0; i < aNums.length; i++) {
      aNums[i].innerHTML = i + 1
    }

    // 填充内容
    const random = rank.random || true
    let aIds = []

    if (random) {
      aIds = fnRandomArray(n, rank.range[1], rank.range[0])
    } else {
      for (let i = rank.range[0]; i < rank.range[1]; i++) {
        aIds.push(i)
      }
    }

    const aItems = oRank.getElementsByClassName('item')
    for (let [i, item] of Object.entries(aItems)) {
      const j = i % aIds.length
      const ctxid = aIds[j]
      item.setAttribute('data-id', ctxid)

      for (let [selector, path] of Object.entries(rank.fill)) {
        let asset = rank.data.get(ctxid)

        for (let part of path) {
          asset = asset[part]
        }

        const elem = item.querySelector(selector)
        switch (elem.tagName) {
          case 'IMG':
            elem.src = asset
            break
          default:
            elem.innerHTML = asset
        }
      }
    }

    // 添加指示器
    const oGuider = document.createElement('span')
    oRankGuider.appendChild(oGuider)
  }
}

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

  if (!oFocus.closest('#rank')) {
    // 模糊
    oSearch.classList.remove('fullscreen')
    fnInitSearchBg()
  } else {
    // 全屏
    oSearch.classList.add('fullscreen')
    const ctxid = parseInt(oFocus.getAttribute('data-id'))

    // 切换海报和片花
    const oPoster = oRankBg.getElementsByTagName('img')[0]
    const oVideo = oRankBg.getElementsByTagName('video')[0]

    if (ctxid < 200) {
      oPoster.src = dSource.get(ctxid).assets.poster
      oVideo.src = dSource.get(ctxid).assets.trailer
    } else if (ctxid < 300) {
      oPoster.src = dSource.get(ctxid).assets.poster
    }
  }
}

function fnInitSearchBg() {
  const oChannelSearch = document.getElementById('chann-0')
  const oItemFirst = document.getElementById('rank-recommend').getElementsByClassName('item')[0]

  const ctxid = parseInt(oItemFirst.getAttribute('data-id'))
  oChannelSearch.setAttribute('data-id', ctxid)

  const oPoster = oRankBg.getElementsByTagName('img')[0]
  oPoster.src = dSource.get(ctxid).assets.poster
}

// 添加焦点事件
fnAddActions(null, function () {
  fnChannelSilder()
  fnRankToggle()
})