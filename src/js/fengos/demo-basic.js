import scssVars from '../../styles/fengos/demo-kit.scss'

export {
  fnGetTime,
  fnAddActions,
  fnInitFocus
}

// 自适应屏幕大小并居中
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
  let iScale, iOffset

  if (iWidth < iHeight) {
    // 宽撑满
    iScale = iWidth
    iOffset = (iScreenHeight - iPageHeight * iScale) / (2 * iScale)
    oPage.style.transform = `scale(${ iScale }) translateY(${ iOffset }px)`
  } else {
    // 高撑满
    iScale = iHeight
    iOffset = (iScreenWidth - iPageWidth * iScale) / (2 * iScale)
    oPage.style.transform = `scale(${ iScale }) translateX(${ iOffset }px)`
  }
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

    const idr = focus.getAttribute('idr')
    const idl = focus.getAttribute('idl')
    const idd = focus.getAttribute('idd')
    const idu = focus.getAttribute('idu')

    if (fnBefore) {
      fnBefore()
    }

    switch (e.code) {
      // →
      case 'ArrowRight':
        if (idr) {
          fnToggleFocus(idr, focus)
        } else {
          return
        }
        break

        // ←
      case 'ArrowLeft':
        if (idl) {
          fnToggleFocus(idl, focus)
        } else {
          return
        }
        break

        // ↓
      case 'ArrowDown':
        if (idd) {
          fnToggleFocus(idd, focus)
        } else {
          return
        }
        break

        // ↑
      case 'ArrowUp':
        if (idu) {
          fnToggleFocus(idu, focus)
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

function fnToggleFocus(newid, oldfocus, fn) {
  if (oldfocus) {
    oldfocus.blur()
    oldfocus.classList.remove('mark')
  }

  const mark = fnFindMark(newid, '.item')
  // const focus = document.getElementById(newid)
  mark.focus()
  mark.classList.add('mark')

  if (fn) {
    fn()
  }
}

function fnInitFocus(fn) {
  const autoFocus = document.querySelector('[autofocus]')
  fnToggleFocus(autoFocus.id)

  if (fn) {
    fn()
  }
}

function fnFindMark(id, selector) {
  const box = document.getElementById(id).closest('.box')
  let mark

  if (box.querySelector('.mark')) {
    mark = box.querySelector('.mark')
  } else {
    mark = box.querySelector(selector)
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