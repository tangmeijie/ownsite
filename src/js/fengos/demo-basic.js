import scssVars from '../../styles/fengos/demo-kit.scss'

export {
  fnGetTime,
  fnAddActions,
  fnInitFocus
}

fnFitScreen()
window.onresize = fnFitScreen

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

// 阻止鼠标点击失焦
window.onmousedown = function (e) {
  e.preventDefault()
  return false
}

function fnAddActions(fnBefore, fnAfter, fnNoChange) {

  document.addEventListener('keydown', function (e) {
    const focus = document.activeElement

    const idR = focus.getAttribute('id-r')
    const idL = focus.getAttribute('id-l')
    const idD = focus.getAttribute('id-d')
    const idU = focus.getAttribute('id-u')

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
  let prefocus, prebox

  if (document.activeElement !== document.body) {
    prefocus = document.activeElement
    prebox = prefocus.parentNode
    prefocus.blur()
  }

  const newfocus = document.getElementById(id)
  const newbox = newfocus.parentNode

  if (prefocus && prebox !== newbox) {
    const mark = fnFindMark(id)
    mark.focus()

    mark.classList.remove('mark')
    prefocus.classList.add('mark')
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