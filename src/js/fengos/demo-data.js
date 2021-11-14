export {
  aMovies,
  aArtists
}

// id 规则：艺人 1，电影 2，电视剧 3，综艺 4，纪录片 5，动漫 6

const aMovies = [{
  id: 201,
  name: '盗梦空间',
  nameEn: 'Inception',
  date: '2010',
  duration: '148分钟',
  country: ['美国', '英国'],
  type: ['剧情', '科幻', '悬疑', '冒险'],
  recommend: '诺兰烧脑神作梦境堆叠，幻境与现实来回穿插，看似谜团层层拨开，没有答案的真相突破想象。',
  intro: '柯布与同事阿瑟和纳什在一次针对日本能源大亨齐藤的盗梦行动中失败，反被齐藤利用。齐藤威逼利诱因遭通缉而流亡海外的柯布帮他拆分他竞争对手的公司，采取极端措施在其唯一继承人罗伯特·费希尔的深层潜意识中种下放弃家族公司、自立门户的想法，为了重返美国，柯布偷偷求助于岳父迈尔斯，吸收了年轻的梦境设计师艾里阿德妮、梦境演员艾姆斯和药剂师约瑟夫加入行动，在一层层递进的梦境中，柯布不仅要对付费希尔潜意识的本能反抗，还必须直面已逝妻子梅尔的处处破坏，实际情况远比预想危险得多……',
  director: '克里斯托弗·诺兰',
  cast: [{
    name: '莱昂纳多·迪卡普里奥',
    role: '柯布'
  }, {
    name: '约瑟夫·高登-莱维特',
    role: ''
  }, {
    name: '艾伦·佩吉',
    role: ''
  }, {
    name: '汤姆·哈迪',
    role: ''
  }, {
    name: '渡边谦',
    role: ''
  }],
  assets: {
    poster: '/fengos/demo/assets/movie/inception/poster.webp',
    title: '/fengos/demo/assets/movie/inception/title.webp',
    cover: '/fengos/demo/assets/movie/inception/cover.webp',
    coverTitle: '/fengos/demo/assets/movie/inception/cover-title.webp',
    trailer: '/fengos/demo/assets/movie/inception/trailer.mp4'
  },
  awards: []
}]

const aArtists = [{
  id: 101,
  name: '',
  nameEn: ''
}]