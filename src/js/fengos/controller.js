import '../../styles/fengos/controller.scss'

// 避免遥控器获得焦点
window.onmousedown = function (e) {
  e.preventDefault()
  return false
}

;
(function fnControllDemo() {
  const oBack = document.getElementById('back')

  oBack.onclick = function () {
    parent.window.document.getElementById('channel-slider').style.background = 'red'
  }
})()

let webSocket
webSocket = new WebSocket('ws://localhost:8080')