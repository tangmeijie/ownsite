export {
  dSource,
  dArtist
}

// id 规则：1 片源，2 艺人，3 奖项

const dSource = new Map([
  [101, {
    name: '盗梦空间',
    nameEn: 'Inception',
    type: 'movie',
    date: '2010-09-01',
    duration: '148分钟',
    country: ['美国', '英国'],
    tag: ['剧情', '科幻', '悬疑', '冒险'],
    recommend: '诺兰烧脑神作梦境堆叠，幻境与现实来回穿插，看似谜团层层拨开，没有答案的真相突破想象。',
    intro: '柯布与同事阿瑟和纳什在一次针对日本能源大亨齐藤的盗梦行动中失败，反被齐藤利用。齐藤威逼利诱因遭通缉而流亡海外的柯布帮他拆分他竞争对手的公司，采取极端措施在其唯一继承人罗伯特·费希尔的深层潜意识中种下放弃家族公司、自立门户的想法，为了重返美国，柯布偷偷求助于岳父迈尔斯，吸收了年轻的梦境设计师艾里阿德妮、梦境演员艾姆斯和药剂师约瑟夫加入行动，在一层层递进的梦境中，柯布不仅要对付费希尔潜意识的本能反抗，还必须直面已逝妻子梅尔的处处破坏，实际情况远比预想危险得多……',
    director: '克里斯托弗·诺兰',
    cast: [{
      name: '莱昂纳多·迪卡普里奥',
      role: 'Cobb'
    }, {
      name: '约瑟夫·高登-莱维特',
      role: 'Arthur'
    }, {
      name: '艾利奥特·佩吉',
      role: 'Ariadne'
    }, {
      name: '汤姆·哈迪',
      role: 'Eames'
    }, {
      name: '渡边谦',
      role: 'Saito'
    }, {
      name: '迪利普·劳',
      role: 'Yusuf'
    }, {
      name: '基里安·墨菲',
      role: 'Robert Fischer'
    }, {
      name: '汤姆·贝伦杰',
      role: 'Browning'
    }, {
      name: '玛丽昂·歌迪亚',
      role: 'Mal'
    }, {
      name: '皮特·波斯尔思韦特',
      role: 'Maurice Fischer'
    }],
    assets: {
      poster: '/fengos/demo/assets/movie/inception/poster.webp',
      title: '/fengos/demo/assets/movie/inception/title.webp',
      cover: '/fengos/demo/assets/movie/inception/cover.webp',
      coverTitle: '/fengos/demo/assets/movie/inception/cover-title.webp',
      trailer: '/fengos/demo/assets/movie/inception/trailer.mp4'
    },
    awards: []
  }],
  [102, {
    name: '雄狮',
    nameEn: 'Lion',
    type: 'movie',
    date: '2017-06-22',
    duration: '119分钟',
    country: ['英国', '澳大利亚', '美国', '印度'],
    tag: ['剧情'],
    recommend: '',
    intro: '萨罗和妹妹、哥哥以及母亲过着相依为命的生活，虽然贫穷艰辛，但一家人在一起相互扶持，一次偶然中，萨罗同哥哥在火车站走散了，误打误撞登上了一列开往加尔各答的火车，并最终被送进了收容所。幸运的萨罗被来自澳大利亚的约翰和苏夫妇两收养了，在两人爱的教养下，萨罗成长为了前途无量的有为青年。某次派对中，来自家乡的食物勾起了萨罗对过去的回忆，他萌生出了回到家乡寻找家人的念头……',
    director: '加斯·戴维斯',
    cast: [{
      name: '戴夫·帕特尔',
      role: 'Saroo Brierley'
    }, {
      name: '鲁妮·玛拉',
      role: 'Lucy'
    }, {
      name: '大卫·文翰',
      role: 'John Brierley'
    }, {
      name: '妮可·基德曼',
      role: 'Sue Brierley'
    }, {
      name: '桑尼·帕沃',
      role: 'Young Saroo'
    }, {
      name: '纳瓦祖丁·席迪圭',
      role: 'Rawa'
    }, {
      name: '塔妮莎·查特吉',
      role: 'Noor'
    }, {
      name: '迪普提·纳瓦尔',
      role: 'Mrs. Sood'
    }, {
      name: '马尼克·古纳拉塔尼',
      role: 'Swarmina'
    }, {
      name: '本杰明·里格比',
      role: 'Waiter'
    }],
    assets: {
      poster: '/fengos/demo/assets/movie/lion/poster.webp',
      title: '/fengos/demo/assets/movie/lion/title.webp',
      cover: '/fengos/demo/assets/movie/lion/cover.webp',
      coverTitle: '/fengos/demo/assets/movie/lion/cover-title.webp',
      trailer: '/fengos/demo/assets/movie/lion/trailer.mp4'
    },
    awards: []
  }]
])

const dArtist = new Map([
  [201, {
    name: '',
    nameEn: '',
    vocation: '',
    intro: '',
    assets: {
      portrait: '',
      poster: ''
    },
    works: [],
    awards: []
  }],
  [202, {
    name: '',
    nameEn: '',
    vocation: '',
    intro: '',
    assets: {
      portrait: '',
      poster: ''
    },
    works: [],
    awards: []
  }]
])