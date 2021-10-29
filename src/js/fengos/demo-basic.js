export {
  fnGetTime,
  fnNodeIndex,
  fnActions
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

function fnActions() {
  document.addEventListener("keydown", function (event) {
    
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