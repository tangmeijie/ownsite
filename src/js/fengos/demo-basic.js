import scssVars from '../../styles/fengos/demo-vars.scss'
import {
  dArtist,
  dSource
} from './demo-data'

export {
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
}

// css变量
const iPageWidth = Number.parseInt(scssVars.pageWidth)
const iPageHeight = Number.parseInt(scssVars.pageHeight)

// 对所有页面执行：
fnFitScreen()
window.onresize = fnFitScreen
fnShowTime(30)

// 自适应屏幕大小
function fnFitScreen() {
  const iScreenWidth = document.body.clientWidth
  const iScreenHeight = document.body.clientHeight

  const iWidth = iScreenWidth / iPageWidth
  const iHeight = iScreenHeight / iPageHeight

  const oPage = document.getElementsByClassName('page')[0]
  let iScale, iOffset, sTransform

  if (iWidth < iHeight) {
    // 宽撑满
    iScale = iWidth
    iOffset = (iScreenHeight - iPageHeight * iScale) / 2
    sTransform = `translateY(${ iOffset }px)`
  } else {
    // 高撑满
    iScale = iHeight
    iOffset = (iScreenWidth - iPageWidth * iScale) / 2
    sTransform = `translateX(${ iOffset }px)`
  }

  sTransform += ` scale(${ iScale })`
  oPage.style.transform = sTransform
}

// 状态栏时间
function fnGetTime() {
  const d = new Date()
  let h = d.getHours()
  let m = d.getMinutes()
  let s = d.getSeconds()
  if (h < 10) {
    h = '0' + h
  }
  if (m < 10) {
    m = '0' + m
  }
  return h + ':' + m
}

function fnShowTime(interval) {
  if (!document.getElementById('time')) {
    return false
  }

  const time = document.getElementById('time')
  time.innerHTML = fnGetTime()
  setInterval(function () {
    time.innerHTML = fnGetTime()
  }, 1000 * interval)
}

// 焦点事件
window.onmousedown = function (e) {
  e.preventDefault()
  return false
}

function fnSiblingsFocusable(id, prefix, isX = true, isLoop = false) {
  const parent = document.getElementById(id)
  const siblings = parent.getElementsByClassName('item')
  let lastid, nextid

  if (isX) {
    lastid = 'data-left'
    nextid = 'data-right'
  } else {
    lastid = 'data-up'
    nextid = 'data-down'
  }

  for (let i = 0; i < siblings.length; i++) {
    siblings[i].id = prefix + i

    switch (i) {
      case 0:
        fnItemFocusable(siblings[i], {
          [nextid]: prefix + (i + 1)
        })
        break
      case siblings.length - 1:
        fnItemFocusable(siblings[i], {
          [lastid]: prefix + (i - 1)
        })
        break
      default:
        fnItemFocusable(siblings[i], {
          [nextid]: prefix + (i + 1),
          [lastid]: prefix + (i - 1)
        })
    }
  }

  if (isLoop) {
    fnItemFocusable(siblings[0], {
      [lastid]: prefix + (siblings.length - 1)
    })
    fnItemFocusable(siblings[siblings.length - 1], {
      [nextid]: prefix + 0
    })
  }
}

function fnItemFocusable(obj, attrs) {
  obj.setAttribute('tabindex', -1)
  obj.classList.add('item')

  for (let key of Object.keys(attrs)) {
    obj.setAttribute(key, attrs[key])
  }
}

function fnAddActions(fnAfter, fnNoChange) {
  // 初始化焦点
  fnInitFocus(fnAfter)

  // 键盘事件
  document.addEventListener('keydown', function (e) {
    const focus = document.activeElement
    const dataKey = focus.dataset

    switch (e.code) {
      // →
      case 'ArrowRight':
        fnGetFocus(dataKey.right)
        break

        // ←
      case 'ArrowLeft':
        fnGetFocus(dataKey.left)
        break

        // ↓
      case 'ArrowDown':
        fnGetFocus(dataKey.down)
        break

        // ↑
      case 'ArrowUp':
        fnGetFocus(dataKey.up)
        break

        // OK
      case 'Enter':
        console.log(dataKey.enter)
        break

        // Back
      case 'Space':
        fnGetFocus(dataKey.back)
        break

      default:
        return
    }

    if (document.activeElement === focus) {
      if (fnNoChange) {
        fnNoChange()
      }
    } else {
      if (fnAfter) {
        fnAfter()
      }
    }

  })

  // 鼠标事件
  const aItems = document.getElementsByClassName('item')
  for (let item of aItems) {
    item.addEventListener('click', function () {
      fnGetFocus(this.id)

      if (document.activeElement === focus) {
        if (fnNoChange) {
          fnNoChange()
        }
      } else {
        if (fnAfter) {
          fnAfter()
        }
      }
    })
  }
}

function fnInitFocus(fnAfter) {
  const autoFocus = document.querySelector('[autofocus]')
  fnGetFocus(autoFocus.id)

  if (fnAfter) {
    fnAfter()
  }
}

function fnGetFocus(id) {
  if (!document.getElementById(id)) {
    return false
  }

  let lastfocus, nextfocus

  if (document.activeElement !== document.body) {
    lastfocus = document.activeElement
    lastfocus.blur()
  }

  const nextclass = document.getElementById(id).className

  if (nextclass.includes('item')) {
    nextfocus = document.getElementById(id)
  } else {
    nextfocus = fnFindMark(id)
    nextfocus.classList.remove('mark')
  }
  nextfocus.focus()

  if (lastfocus && lastfocus.parentNode !== nextfocus.parentNode) {
    lastfocus.classList.add('mark')

    if (nextfocus.parentNode.getElementsByClassName('mark')[0]) {
      // 鼠标或手指交互时要去掉焦点兄弟元素的mark，以免多个mark出现
      nextfocus.parentNode.getElementsByClassName('mark')[0].classList.remove('mark')
    }
  }
}

function fnFindMark(boxID) {
  let mark
  const box = document.getElementById(boxID)

  if (box.getElementsByClassName('mark')[0]) {
    mark = box.getElementsByClassName('mark')[0]
  } else {
    mark = box.getElementsByClassName('item')[0]
  }

  return mark
}

// 内容填充
function fnCloneItem(id, n) {
  const parent = document.getElementById(id)
  const itemOrigin = parent.getElementsByClassName('item')[0]
  const box = itemOrigin.parentNode

  for (let i = 0; i < n - 1; i++) {
    let item = itemOrigin.cloneNode(true)
    box.appendChild(item)
  }
}

function fnRandomArray(n, max = 11, min = 0) {
  // 不含最大值，含最小值
  if (n > max - min) {
    console.log('随机数组范围过小')
    return false
  }

  min = Math.ceil(min)
  max = Math.floor(max)
  let arr = []

  for (let i = 0; i < n; i++) {
    let random = Math.floor(Math.random() * (max - min)) + min
    let same = false

    for (let num of arr.values()) {
      if (num === random) {
        same = true
        break
      }
    }
    same ? i-- : arr.push(random)
  }

  return arr
}

// 内容切换
function fnFindIndex(node, nodetree) {
  const array = Array.from(nodetree)
  const index = array.indexOf(node)
  if (index >= 0) {
    return index
  } else {
    console.log('节点不存在')
    return false
  }
}

function fnChangeBg(bgID) {
  const focus = document.activeElement
  const dataID = parseInt(focus.getAttribute('data-id'))

  const bg = document.getElementById(bgID)
  const image = bg.getElementsByTagName('img')[0]
  const video = bg.getElementsByTagName('video')[0]

  if (dataID < 200) {
    image.src = dSource.get(dataID).assets.poster
    video.src = dSource.get(dataID).assets.trailer
  } else if (dataID < 300) {
    image.src = dArtist.get(dataID).assets.poster
  }
}

function fnBoxScroll(selector, isY = true, align = 'center', offset = 0) {
  const focus = document.activeElement
  const focusbox = focus.closest(selector)

  const boxes = focusbox.parentNode.querySelectorAll(selector)
  const index = fnFindIndex(focusbox, boxes)

  let d, D, scroll, visual

  if (isY) {
    const scrollY = focusbox.closest('.scroll-y')
    const h = focusbox.offsetHeight
    const mt = parseInt(window.getComputedStyle(focusbox).marginTop)
    const mb = parseInt(window.getComputedStyle(focusbox).marginBottom)
    const H = h + mt + mb

    const scrollH = scrollY.offsetHeight
    const visualH = scrollY.parentNode.offsetHeight
    let y

    if (H * (index + 1 / 2) < visualH / 2) {
      y = 0
    } else if (scrollH - H * (index + 1 / 2) < visualH / 2) {
      y = scrollH - visualH
    } else {
      y = H * (index + 1 / 2) - visualH / 2
    }

    scrollY.style.transform = `translateY(${ -y }px)`
  }else {
    const scrollX = focusbox.closest('.scroll-x')
    const w = focusbox.offsetWidth
    const ml = parseInt(window.getComputedStyle(focusbox).marginLeft)
    const mr = parseInt(window.getComputedStyle(focusbox).marginRight)
    const W = w + ml + mr

    const scrollW = scrollX.offsetWidth
    const visualW = scrollX.parentNode.offsetWidth
    let x

    if (W * (index + 1 / 2) < visualW / 2) {
      x = 0
    } else if (scrollW - W * (index + 1 / 2) < visualW / 2) {
      x = scrollW - visualW
    } else {
      x = W * (index + 1 / 2) - visualW / 2
    }

    scrollX.style.transform = `translateX(${ -x }px)`
  }


}

// 片花
function fnVideoPlay(boxID, isPlay = true, timer) {
  const box = document.getElementById(boxID)

  switch (isPlay) {
    case true:
      box.getElementsByTagName('video')[0].play()
      box.classList.add('playing')
      break
    case false:
      box.getElementsByTagName('video')[0].pause()
      box.classList.remove('playing')
      clearTimeout(timer)
      break
    default:
      return false
  }
}

function fnVideoPlayEnd(fnAfter) {
  const aVideos = document.getElementsByTagName('video')

  for (let video of aVideos) {
    video.addEventListener('ended', function () {
      this.closest('.playing').classList.remove('playing')

      if (fnAfter) {
        fnAfter()
      }
    })
  }
}