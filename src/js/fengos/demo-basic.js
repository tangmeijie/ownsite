import scssVars from '../../styles/fengos/demo-kit.scss'

export {
  fnGetTime,
  fnAddKeyActions,
  fnGetFocus,
  fnHighlightBox
}

fnFitScreen()
window.onresize = fnFitScreen

// 阻止鼠标点击失焦
window.onmousedown = function (e) {
  e.preventDefault()
  return false
}

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

function fnAddKeyActions(fnBefore, fnAfter) {

  document.addEventListener('keydown', function (e) {
    const focus = document.activeElement
    const box = focus.closest('.box')

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
          focus.blur()
          fnGetFocus(idr, fnAfter)
        }
        break

        // ←
      case 'ArrowLeft':
        if (idl) {
          focus.blur()
          fnGetFocus(idl, fnAfter)
        }
        break

        // ↓
      case 'ArrowDown':
        if (idd) {
          focus.blur()
          fnGetFocus(idd, fnAfter)
        }
        break

        // ↑
      case 'ArrowUp':
        if (idu) {
          focus.blur()
          fnGetFocus(idu, fnAfter)
        }
        break

        // OK
      case 'Enter':
        break

        // Back
      case 'Space':
        break
    }
    
    // 切换焦点所在区域
    if (document.activeElement.closest('.box') !== box) {
      box.classList.remove('highlight')
      fnHighlightBox()
    }
  })
}

function fnGetFocus(id, fn) {
  const focus = document.getElementById(id)
  focus.focus()

  if (fn) {
    fn()
  }
}

function fnHighlightBox() {
  const focus = document.activeElement
  const box = focus.closest('.box')
  box.classList.add('highlight')
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

function fnMarkFocus(oBox, sSelector) {
  let oFocus
  if (oBox.querySelector('.mark')) {
    oFocus = oBox.querySelector('.mark')
  } else {
    oFocus = oBox.querySelector(sSelector)
    oFocus.classList.add('mark')
  }
  oFocus.id = 'focus'
}

function fnToggleFocus(oFocusNew) {
  let oFocus = document.getElementById('focus')
  oFocus.id = ''
  oFocus.classList.remove('mark')

  oFocusNew.id = 'focus'
  oFocus.classList.add('mark')
}