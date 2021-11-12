import scssVars from '../../styles/fengos/demo-kit.scss'

export {
  fnSiblingsFocusable,
  fnSetAttr,
  fnAddActions,
  fnInitFocus
}

// 对所有页面执行：
fnFitScreen()
window.onresize = fnFitScreen
fnShowTime(30)

// 自适应屏幕大小
function fnFitScreen() {
  const iScreenWidth = document.body.clientWidth
  const iScreenHeight = document.body.clientHeight

  const iPageWidth = Number.parseInt(scssVars.pageWidth)
  const iPageHeight = Number.parseInt(scssVars.pageHeight)

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
  if (m < 10) {
    m = '0' + m
  }
  if (s < 10) {
    s = '0' + s
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

function fnSiblingsFocusable(parent, prefix, isX = true, isLoop = false) {
  const siblings = parent.getElementsByClassName('item')
  let lastid, nextid

  if (isX) {
    lastid = 'idleft'
    nextid = 'idright'
  } else {
    lastid = 'idup'
    nextid = 'iddown'
  }

  for (let i = 0; i < siblings.length; i++) {
    siblings[i].id = prefix + i
    siblings[i].tabIndex = -1

    switch (i) {
      case 0:
        siblings[i].setAttribute(nextid, prefix + (i + 1))
        break
      case siblings.length - 1:
        siblings[i].setAttribute(lastid, prefix + (i - 1))
        break
      default:
        siblings[i].setAttribute(nextid, prefix + (i + 1))
        siblings[i].setAttribute(lastid, prefix + (i - 1))
    }
  }

  if (isLoop) {
    siblings[0].setAttribute(lastid, prefix + (siblings.length - 1))
    siblings[siblings.length - 1].setAttribute(nextid, prefix + 0)
  }
}

function fnSetAttr(obj, attrs) {
  for (let key of Object.keys(attrs)) {
    obj.setAttribute(key, attrs[key])
  }
}

function fnAddActions(fnBefore, fnAfter, fnNoChange) {

  document.addEventListener('keydown', function (e) {
    const focus = document.activeElement

    const idR = focus.getAttribute('idright')
    const idL = focus.getAttribute('idleft')
    const idD = focus.getAttribute('iddown')
    const idU = focus.getAttribute('idup')

    if (fnBefore) {
      fnBefore()
    }

    switch (e.code) {
      // →
      case 'ArrowRight':
        if (idR) {
          fnGetFocus(idR)
        } else {
          return
        }
        break

        // ←
      case 'ArrowLeft':
        if (idL) {
          fnGetFocus(idL)
        } else {
          return
        }
        break

        // ↓
      case 'ArrowDown':
        if (idD) {
          fnGetFocus(idD)
        } else {
          return
        }
        break

        // ↑
      case 'ArrowUp':
        if (idU) {
          fnGetFocus(idU)
        } else {
          return
        }
        break

        // OK
      case 'Enter':
        break

        // Back
      case 'Space':
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
}

function fnInitFocus(fn) {
  const autoFocus = document.querySelector('[autofocus]')
  fnGetFocus(autoFocus.id)

  if (fn) {
    fn()
  }
}

function fnGetFocus(id) {
  let lastfocus, lastbox

  if (document.activeElement !== document.body) {
    lastfocus = document.activeElement
    lastbox = lastfocus.parentNode
    lastfocus.blur()
  }

  const newfocus = document.getElementById(id)
  const newbox = newfocus.parentNode

  if (lastfocus && lastbox !== newbox) {
    const mark = fnFindMark(id)
    mark.focus()

    mark.classList.remove('mark')
    lastfocus.classList.add('mark')
  } else {
    newfocus.focus()
  }
}

function fnFindMark(id) {
  let mark
  const box = document.getElementById(id).parentNode

  if (box.getElementsByClassName('mark')[0]) {
    mark = box.getElementsByClassName('mark')[0]
  } else {
    mark = box.getElementsByClassName('item')[0]
  }

  return mark
}

function fnNodeIndex(nodelist, node) {
  const array = Array.from(nodelist)
  const index = array.indexOf(node)
  if (index >= 0) {
    return index
  } else {
    return false
  }
}
// let a = document.getElementById('chan0')
// a.ontouchstart = function() {
//   console.log(this)
// }