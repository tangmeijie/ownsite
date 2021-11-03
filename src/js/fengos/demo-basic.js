import scssVars from '../../styles/fengos/demo-kit.scss'

export {
  fnGetTime,
  fnAddActions,
  fnGetFocus
}

fnFitScreen()
window.onresize = fnFitScreen

// 阻止鼠标点击失焦
window.onmousedown = function(e) {
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

function fnGetFocus(id) {
  const focus = document.getElementById(id)
  focus.focus()
}

function fnAddActions() {
  // fnGetFocus(id)

  document.addEventListener('keydown', function (e) {
    const focus = document.activeElement

    const idr = focus.getAttribute('idr')
    const idl = focus.getAttribute('idl')

    console.log(idr)

    switch (e.code) {

      // →
      case 'ArrowRight':
        // focus.blur()
        // fnGetFocus(idr)
        break

        // ←
      case 'ArrowLeft':
        break

        // ↓
      case 'ArrowDown':
        break

        // ↑
      case 'ArrowUp':
        break

        // OK
      case 'Enter':
        break

        // Back
      case 'Space':
        break
    }
  })
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