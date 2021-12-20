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
  fnRandomArray,
  fnFindIndex,
  fnChangeBg,
  fnVideoPlay,
  fnVideoPlayEnd,
  fnBoxScroll,
} from './demo-basic.js'

// 全局变量
let autoplay, videoSwitch = false

// css变量
const iRankW = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--rank-w'))


// 手机端弹窗选择
;
(function fnIsMobilePortrait() {
  if (window.screen.width < 500) {
    const popup = document.getElementById('mobile')
    popup.style.display = 'block'
  }
})()


// 搜索区
const oSearch = document.getElementById('page-search')
const oSearchBtn = document.getElementById('search-btn')
const aHotWords = document.getElementById('search-hot').children

;
(function fnFillSearch(n) {
  fnCloneItem('search-hot', n)

  const aRandom = fnRandomArray(n, dSource.size)
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

;
(function fnFillRank(...ranks) {
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
    const aItems = oRank.getElementsByClassName('item')
    const random = rank.random || true
    let data, aIds = []

    if (rank.start < 200) {
      data = dSource
    } else if (rank.start < 300) {
      data = dArtist
    }

    if (random) {
      aIds = fnRandomArray(n, rank.start + data.size, rank.start)
    } else {
      for (let i = rank.start; i < n; i++) {
        aIds.push(i)
      }
    }

    for (let [i, item] of Object.entries(aItems)) {
      // const j = i % aIds.length
      const dataID = aIds[i]
      item.setAttribute('data-id', dataID)

      for (let [selector, path] of Object.entries(rank.fill)) {
        let asset = data.get(dataID)

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
})({
  id: 'rank-recommend',
  start: 100,
  fill: {
    '.title': ['assets', 'title']
  }
}, {
  id: 'rank-hot',
  start: 100,
  fill: {
    '.title': ['assets', 'title']
  }
}, {
  id: 'rank-collect',
  start: 100,
  fill: {
    '.title': ['assets', 'title']
  }
}, {
  id: 'rank-topic',
  start: 100,
  fill: {
    '.title': ['assets', 'title']
  }
}, {
  id: 'rank-actor',
  start: 200,
  fill: {
    '.avatar': ['assets', 'avatar'],
    '.name': ['name']
  }
}, {
  id: 'rank-actress',
  start: 200,
  fill: {
    '.avatar': ['assets', 'avatar'],
    '.name': ['name']
  }
})

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
            'data-left': aRankId[i - 1]
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

function fnRankToggle(isBro) {
  const oFocus = document.activeElement

  if (oFocus.closest('#rank')) {
    // 全屏
    oSearch.classList.add('fullscreen')

    fnChangeBg('rank-bg')
    fnChangeGuider('rank-guider')

    if (isBro) {
      if (oFocus.querySelector('.title')) {
        fnBoxScroll('.item', 'y-center', 110, 170, 25)
      } else if (oFocus.querySelector('.avatar')) {
        fnBoxScroll('.item', 'y-center', 140, 230, 25)
      }
    } else {
      fnBoxScroll('section', 'x-start', iRankW)
    }

    if (videoSwitch) {
      fnVideoPlay('page-search', false, autoplay)

      autoplay = setTimeout(function () {
        fnVideoPlay('page-search')
      }, 2000)
    }

  } else if (oFocus.closest('#channel')) {
    // 模糊
    oSearch.classList.remove('fullscreen')

    fnChangeBg('rank-bg')
    fnBoxScroll('rank', 'x-reset')
    fnBoxScroll('rank', 'y-reset')

    if (videoSwitch) {
      fnVideoPlay('page-search', false, autoplay)
    }

  } else {
    return false
  }
}

function fnChangeGuider(id) {
  const aDots = document.getElementById(id).getElementsByTagName('span')
  for (let dot of aDots) {
    dot.classList.remove('highlight')
  }

  const focusbox = document.activeElement.closest('section')
  const boxes = document.getElementById('rank').getElementsByTagName('section')
  const index = fnFindIndex(focusbox, boxes)
  aDots[index].classList.add('highlight')
}

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

// 添加焦点事件
fnAddActions(function (isBro) {
  fnChannelSilder()
  fnRankToggle(isBro)
})

;
(function fnInitChannel(aBoxIds) {
  for (let i = 0; i < aBoxIds.length; i++) {
    const oItem = document.getElementById(aBoxIds[i]).getElementsByClassName('item')[0]
    const dataID = parseInt(oItem.getAttribute('data-id'))
    aChannelItems[i].setAttribute('data-id', dataID)

    switch (i) {
      case 0:
        fnChangeBg('rank-bg')
        break
      default:
        return
    }
  }
})(['rank'])

// 片花播完
fnVideoPlayEnd()