import '../styles/works.scss'
import {
  fnLoadComponent,
  fnScrollHeader
} from './global.js'

document.addEventListener('DOMContentLoaded', () => {
  fnLoadComponent('/kits.html', 'temp-nav', 'header', 'works')
  fnLoadComponent('/kits.html', 'temp-foot', 'footer')
  fnLoadProjects()
})

fnScrollHeader()

// 载入项目模板
function fnLoadProjects() {

  // 获取嵌入在HTML中的项目数据
  const oProjectsDataElem = document.getElementById('data-project')
  const projects = JSON.parse(oProjectsDataElem.textContent)

  // 获取模板和目标容器
  const template = document.getElementById('temp-project').content
  const oContainer = document.getElementById('projects')

  // 清空容器
  oContainer.innerHTML = ""

  // 渲染项目组件
  projects.forEach(project => {
    // 克隆模板内容
    const clone = document.importNode(template, true)

    // 填充数据
    clone.querySelector('img').src = project.cover
    clone.querySelector('h1').textContent = project.name
    clone.querySelector('p').textContent = project.desc
    clone.querySelector('a').href = project.link

    // 添加到容器中
    oContainer.appendChild(clone)
  })
}