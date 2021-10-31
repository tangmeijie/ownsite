export {
  fnGetTime,
  fnNodeIndex,
  fnMarkFocus,
  fnToggleFocus
}

fnFitScreen()
window.onresize = fnFitScreen

function fnFitScreen() {
  const iScreenWidth = document.body.clientWidth
  const iScreenHeight = document.body.clientHeight

  const iPageWidth = 1920
  const iPageHeight = 1080

  const iWidth = iScreenWidth / iPageWidth
  const iHeight = iScreenHeight / iPageHeight

  let iScale
  if (iWidth < iHeight) {
    iScale = iWidth
  } else {
    iScale = iHeight
  }

  const oPage = document.getElementById('desktop')
  oPage.style.transform = 'scale(' + iScale + ')'
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

function fnAddAction(event) {

  console.log(event.code)

  switch (event.code) {

    case 'ArrowRight':
      break

    case 'ArrowLeft':
      break

    case 'ArrowDown':
      break

    case 'ArrowUp':
      break

    case 'Enter':
      break

    case 'Space':
      break

  }
}