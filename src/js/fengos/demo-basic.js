import scssVars from '../../styles/fengos/demo-kit.scss'

export {
  fnItemFocusable,
  fnSiblingsFocusable,
  fnAddActions,
  fnInitFocus,
  fnCloneItem,
  fnFillData
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

function fnSiblingsFocusable(parent, prefix, isX = true, isLoop = false) {
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
  obj.setAttribute('tabindex', '-1')
  obj.classList.add('item')

  for (let key of Object.keys(attrs)) {
    obj.setAttribute(key, attrs[key])
  }
}

function fnAddActions(fnBefore, fnAfter, fnNoChange) {
  // 键盘事件
  document.addEventListener('keydown', function (e) {
    const focus = document.activeElement

    const idR = focus.getAttribute('data-right')
    const idL = focus.getAttribute('data-left')
    const idD = focus.getAttribute('data-down')
    const idU = focus.getAttribute('data-up')

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
  // 鼠标事件
  const aItems = document.getElementsByClassName('item')
  for (let item of aItems) {
    item.addEventListener('click', function () {
      if (fnBefore) {
        fnBefore()
      }

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

function fnInitFocus(fn) {
  const autoFocus = document.querySelector('[autofocus]')
  fnGetFocus(autoFocus.id)

  if (fn) {
    fn()
  }
}

function fnGetFocus(id) {
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
    if (nextfocus.parentNode.querySelector('.mark')) {
      nextfocus.parentNode.querySelector('.mark').classList.remove('mark')
    }
  }
}

function fnFindMark(idbox) {
  let mark
  const box = document.getElementById(idbox)

  if (box.querySelector('.mark')) {
    mark = box.querySelector('.mark')
  } else {
    mark = box.querySelector('.item')
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

// 内容填充
function fnCloneItem(parentid, n) {
  const parent = document.getElementById(parentid)
  const itemOrigin = parent.getElementsByClassName('item')[0]
  const box = itemOrigin.parentNode

  for (let i = 0; i < n - 1; i++) {
    let item = itemOrigin.cloneNode(true)
    box.appendChild(item)
  }
}

function fnFillData(elems, data, type, start = 0) {
  for (let i = 0; i < elems.length; i++) {
    let j = (i + start) % data.length

    switch (type) {
      case 'txt':
        elems[i].innerHTML = data[j]
        break
      case 'img':
        elems[i].src = data[j]
        break
      default:
        return
    }
  }
}