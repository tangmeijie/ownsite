const config = {
  index: {
    html: './src/html/index.html',
    js: [
      './src/js/global.js'
    ]
  },
  me: {
    html: './src/html/me.html',
    js: [
      './src/js/global.js'
    ]
  },
  fengos: {
    html: './src/html/fengos/index.html',
    children: {
      demo: {
        html: './src/html/fengos/demo.html',
        js: [
          './src/js/fos-base.js'
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