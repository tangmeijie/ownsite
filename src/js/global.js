import '../styles/clear.scss'

export {
  fnLoadComponent
}
// console.log(moment().format('YYYY-MM-DD'))

// anime({
//   targets: 'h1',
//   translateX: 250,
//   duration: 800,
//   loop: true
// });

// function isMobile() { 
//   return ('ontouchstart' in document.documentElement); 
// }

// 载入组件
function fnLoadComponent(sKitURL, sImportId, sContainerId, sActiveId) {
  fetch(sKitURL)
    .then(response => response.text())
    .then(html => {
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = html
      const template = tempDiv.querySelector('#' + sImportId)
      const clone = document.importNode(template.content, true)

      // 设置选中项
      if (sActiveId) {
        const activeLink = clone.getElementById(sActiveId)
        if (activeLink) {
          activeLink.classList.add('active')
        }
      }

      // 将组件插入到页面中的指定位置
      document.getElementById(sContainerId).appendChild(clone)
    })
    .catch(error => {
      console.error('Error loading component:', error)
    })
}