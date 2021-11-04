import '../../styles/fengos/demo-desktop.scss'

import anime from 'animejs/lib/anime.es.js'
import {
  fnGetTime,
  fnAddKeyActions,
  fnGetFocus
} from '../../js/fengos/demo-basic.js'

// 状态栏时间
const oTime = document.getElementById('time')
oTime.innerHTML = fnGetTime()
setInterval(function () {
  oTime.innerHTML = fnGetTime()
}, 1000 * 30)

// 频道栏切换
const oChannel = document.getElementById('channel')
fnChannalFocusable()

function fnChannalFocusable() {
  const aItems = oChannel.getElementsByClassName('item')
  for (let i = 0; i < aItems.length; i++) {
    aItems[i].id = 'chan' + i
    aItems[i].tabIndex = '-1'

    switch (i) {
      case 0:
        aItems[i].setAttribute('idr', 'chan' + (i + 1))
        break
      case aItems.length - 1:
        aItems[i].setAttribute('idl', 'chan' + (i - 1))
        break
      default:
        aItems[i].setAttribute('idr', 'chan' + (i + 1))
        aItems[i].setAttribute('idl', 'chan' + (i - 1))
    }
  }
}

// fnChannelFocus()

// function fnChannelFocus() {
//   fnMarkFocus(oChannel, '.cell')
//   oChannel.classList.add('highlight')

//   let oFocus = document.getElementById('focus')
//   fnChannelSilder(oFocus)

//   fnToggleChannel(oChannel)
// }

// function fnChannelBlur() {
//   let oFocus = document.getElementById('focus')
//   oFocus.id = ''

//   oChannel.classList.remove('highlight')
// }

// function fnToggleChannel(oBox) {
//   const aCells = oBox.getElementsByClassName('cell')

//   document.addEventListener('keydown', function (event) {
//     let oFocusOld = document.getElementById('focus')
//     let index = fnNodeIndex(aCells, oFocusOld)

//     switch (event.code) {

//       case 'ArrowRight':
//         if (index < aCells.length - 1) {
//           fnToggleFocus(aCells[index + 1])
//           fnChannelSilder(aCells[index + 1])
//         }
//         break

//       case 'ArrowLeft':
//         if (index > 0) {
//           fnToggleFocus(aCells[index - 1])
//           fnChannelSilder(aCells[index - 1])
//         }
//         break

//       case 'ArrowDown':
//         // fnChannelBlur()
//         break
//     }
//   })
// }

function fnChannelSilder(oFocus) {
  const oSilder = document.getElementById('channel-slider')
  const oBar = oSilder.parentNode

  const iLeft = oFocus.offsetLeft
  const iRight = oBar.offsetWidth - iLeft - oFocus.offsetWidth

  const sliderAnime = anime({
    targets: oSilder,
    left: iLeft,
    right: iRight,
    easing: 'spring(0.5, 100, 36, 24)',
    autoplay: false
  })
  sliderAnime.play()
}

fnGetFocus('chan1')
fnAddKeyActions()

let a = document.getElementById('chan0')
a.onclick = function() {
  console.log(this)
}