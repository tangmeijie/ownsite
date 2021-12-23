import '../../styles/fengos/controller.scss'

// 避免遥控器获得焦点
window.onmousedown = function (e) {
  e.preventDefault()
  return false
}

;
(function fnControllAction() {
  const aBtns = document.getElementsByTagName('button')

  for (let btn of aBtns) {
    btn.addEventListener('click', function () {
      // console.log(this.id)
      parent.window.fnControllerActions(this.id)
    })
  }
})()