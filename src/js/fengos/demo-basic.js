import '../../styles/fengos/demo-kit.scss'
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
const iPageWidth = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--page-width'))
const iPageHeight = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--page-height'))

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
  let isBro = false

  // 键盘事件
  document.addEventListener('keydown', function (e) {
    const focus = document.activeElement
    const dataKey = focus.dataset

    switch (e.code) {
      // →
      case 'ArrowRight':
        isBro = fnGetFocus(dataKey.right)
        break

        // ←
      case 'ArrowLeft':
        isBro = fnGetFocus(dataKey.left)
        break

        // ↓
      case 'ArrowDown':
        isBro = fnGetFocus(dataKey.down)
        break

        // ↑
      case 'ArrowUp':
        isBro = fnGetFocus(dataKey.up)
        break

        // OK
      case 'Enter':
        console.log(dataKey.enter)
        break

        // Back
      case 'Space':
        isBro = fnGetFocus(dataKey.back)
        break

      default:
        return
    }

    if (document.activeElement === focus) {
      if (fnNoChange) {
        fnNoChange(e.code)
      }
    } else {
      if (fnAfter) {
        fnAfter(isBro, e.code)
      }
    }

  })

  // 鼠标事件
  const aItems = document.getElementsByClassName('item')
  for (let item of aItems) {
    item.addEventListener('click', function () {
      isBro = fnGetFocus(this.id)

      if (document.activeElement === focus) {
        if (fnNoChange) {
          fnNoChange()
        }
      } else {
        if (fnAfter) {
          fnAfter(isBro)
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
      // 点击交互时要去掉焦点兄弟元素的mark，以免多个mark出现
      nextfocus.parentNode.getElementsByClassName('mark')[0].classList.remove('mark')
    }
  } else {
    return true
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

function fnBoxScroll(selector, type = 'y-center', sizedef, sizefocus, offset = 0) {
  const axis = type.split('-')[0]
  const align = type.split('-')[1]

  if (align === 'reset') {
    // 重置滚动
    const box = document.getElementById(selector)
    const scrollboxes = box.getElementsByClassName('scroll-' + axis)

    for (let scrollbox of scrollboxes) {
      scrollbox.style.transform = `translate${ axis.toUpperCase() }(0)`
    }
    return false
  }

  const focuscell = document.activeElement.closest(selector)
  const cells = focuscell.parentNode.querySelectorAll(selector)
  const i = fnFindIndex(focuscell, cells)

  const scrollbox = focuscell.closest(`.scroll-${ axis }`)
  let d

  switch (align) {
    case 'center':
      const size = sizefocus || sizedef
      const offsetSize = sizedef * i + size / 2 + offset
      let scrollSize, visualSize

      switch (axis) {
        case 'y':
          scrollSize = scrollbox.offsetHeight
          visualSize = scrollbox.parentNode.offsetHeight
          break
        case 'x':
          scrollSize = scrollbox.offsetWidth
          visualSize = scrollbox.parentNode.offsetWidth
          break
        default:
          return
      }

      if (offsetSize < visualSize / 2) {
        d = 0
      } else if (scrollSize - offsetSize < visualSize / 2) {
        d = scrollSize - visualSize
      } else {
        d = offsetSize - visualSize / 2
      }
      break

    case 'start':
      d = sizedef * i
      break

    default:
      return
  }

  scrollbox.style.transform = `translate${ axis.toUpperCase() }(${ -d }px)`
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
      return
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