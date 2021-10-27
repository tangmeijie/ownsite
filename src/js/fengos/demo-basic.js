export {
  fnGetTime,
  fnNodeIndex
}

function fnGetTime() {
  let d = new Date()
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

function fnKeytoStr(keycode) {
  switch (keycode) {
    case 37:
      return 'left'
    case 38:
      return 'up'
    case 39:
      return 'right'
    case 40:
      return 'down'
    case 13:
      return 'ok' // 回车
    case 32:
      return 'back' // 空格
    default:
      return false
  }
}

function fnNodeIndex(nodelist, node) {
  let array = Array.from(nodelist)
  let index = array.indexOf(node)
  if (index >= 0) {
    return index
  } else {
    return false
  }
}

function fnToggleFocus(oNew, fn) {
  let oOld = document.getElementById('focus')
  oOld.id = ''
  oOld.classList.remove('mark')
  oNew.id = 'focus'
  oNew.classList.add('mark')
  if (fn) {
    fn(oOld, oNew)
  }
}