const config = {
  index: {
    html: './src/html/index.html',
    js: [
      './src/js/global.js',
      './src/js/home.js'
    ]
  },

  // 项目
  works: {
    html: './src/html/works.html',
    js: [
      './src/js/global.js',
      './src/js/works.js'
    ]
  },

  // 关于我
  about: {
    html: './src/html/about.html',
    js: [
      './src/js/global.js'
    ]
  },

  // 组件
  kits: {
    html: './src/html/kits/index.html',
    js: './src/js/global.js',
    children: {
      nav: {
        html: './src/html/kits/nav.html',
        js: [ './src/js/home.js' ]
      }
    }
  },

  // 峰米FengOS
  fengos: {
    html: './src/html/fengos/index.html',
    js: './src/js/global.js',
    children: {
      demo: {
        html: './src/html/fengos/demo.html',
        js: [
          './src/js/fengos/demo-data.js',
          './src/js/fengos/demo-basic.js',
          './src/js/fengos/demo-desktop.js'
        ]
      },
      controller: {
        html: './src/html/fengos/controller.html',
        js: [
          './src/js/fengos/demo-basic.js',
          './src/js/fengos/controller.js'
        ]
      }
    }
  }
}

function peek(obj, prefix = '') {
  const keys = Object.keys(obj)
  keys.forEach(key => {
    let prefixKey = prefix + key
    if (!config[prefixKey]) {
      config[prefixKey] = obj[key]
    }
    if (config[prefixKey].children) {
      peek(config[prefixKey].children, prefixKey + '/')
      delete config[prefixKey].children
    }
  })
}
peek(config)
module.exports = config