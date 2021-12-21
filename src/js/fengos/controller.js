import '../../styles/fengos/controller.scss'

;
(function fnControllDemo() {
  const oBack = document.getElementById('back')

  oBack.onclick = function () {
    parent.window.document.getElementById('channel-slider').style.background = 'red'
  }
})()