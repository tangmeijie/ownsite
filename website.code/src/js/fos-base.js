function fnKeytoStr(keycode) {
  switch (keycode) {
    case 37:
      return "left"
      break
    case 38:
      return "up"
      break
    case 39:
      return "right"
      break
    case 40:
      return "down"
      break
    case 13: // 回车
      return "enter"
      break
    case 32: // 空格
      return "back"
      break
    default:
      return false
  }
}