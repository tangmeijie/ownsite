// 全站通用函数

import '../styles/clear.scss'

export {
  fnDetectTheme,
  fnLoadComponent,
  fnScrollHeader
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





// 初始化时设置favicon
fnSetFavicon(fnDetectTheme())
// 监听系统主题变化并切换favicon
window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
  fnSetFavicon(e.matches ? 'dark' : 'light')
})

function fnSetFavicon(theme) {
  const favicon = document.getElementById('favicon')
  if (theme === 'dark') {
    favicon.href = 'favicon-dark.png'
  } else {
    favicon.href = 'favicon-light.png'
  }
}

function fnDetectTheme() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  return isDarkMode ? 'dark' : 'light'
}

// 载入组件
//  @param {string} sKitURL - 组件地址
//  @param {string} sImportId - 模板元素的ID
//  @param {string} sContainerId - 组件容器的ID
//  @param {string} sActiveId - 选中项ID（非必须）
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

// 导航栏随滚动隐藏或显示
function fnScrollHeader() {
  let lastScrollTop = 0
  let lastTimestamp = 0
  const headerbar = document.getElementById('header')

  window.addEventListener('scroll', function (event) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    let currentTimestamp = event.timeStamp
    let timeDifference = currentTimestamp - lastTimestamp

    // 计算滚动速度
    let scrollDistance = Math.abs(scrollTop - lastScrollTop)
    let scrollSpeed = scrollDistance / timeDifference

    if (scrollTop < 200) {
      // 滚动后距页面顶部的距离小于该值时，导航栏始终显示
      headerbar.classList.remove('hide')
    } else {
      if (scrollTop > lastScrollTop + 4) {
        // 向下滚动时隐藏导航栏，需产生一定幅度的距离
        headerbar.classList.add('hide')
      } else if (scrollTop < lastScrollTop && scrollSpeed > 0.8) {
        // 向上滚动且速度（速度单位：px/ms）较快时，显示导航栏
        headerbar.classList.remove('hide')
      }
    }

    lastScrollTop = scrollTop
    lastTimestamp = currentTimestamp
  })
}