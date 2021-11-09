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
          fnToggleFocus(focus, idR)
        } else {
          return
        }
        break

        // ←
      case 'ArrowLeft':
        if (idL) {
          fnToggleFocus(focus, idL)
        } else {
          return
        }
        break

        // ↓
      case 'ArrowDown':
        if (idD) {
          fnToggleFocus(focus, idD)
        } else {
          return
        }
        break

        // ↑
      case 'ArrowUp':
        if (idU) {
          fnToggleFocus(focus, idU)
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
  autoFocus.focus()

  if (fn) {
    fn()
  }
}

function fnToggleFocus(oldfocus, newid) {
  const oldbox = focus.closest(':focus-within')
  oldfocus.blur()

  const newfocus = document.getElementById(newid)
  // const newbox = newfocus.closest(':focus-within')

  if (oldbox === newbox) {
    newfocus.focus()
  } else {
    const mark = fnFindMark(id)
    mark.focus()
    mark.classList.add('mark')
  }
}

function fnFindMark(id) {
  const box = document.getElementById(id).closest('.box')
  let mark

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