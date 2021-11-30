export {
  dSource,
  dArtist
}

// id 规则：1 片源，2 艺人，3 奖项，4 专题

const dSource = new Map([
  [100, {
    title: '盗梦空间',
    titleEn: 'Inception',
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
  [101, {
    title: '雄狮',
    titleEn: 'Lion',
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
  }],
  [102, {
    title: '盗梦空间',
    titleEn: 'Inception',
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
  [103, {
    title: '雄狮',
    titleEn: 'Lion',
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
  }],
  [104, {
    title: '盗梦空间',
    titleEn: 'Inception',
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
  [105, {
    title: '雄狮',
    titleEn: 'Lion',
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
  }],
  [106, {
    title: '盗梦空间',
    titleEn: 'Inception',
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
  [107, {
    title: '雄狮',
    titleEn: 'Lion',
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
  }],
  [108, {
    title: '盗梦空间',
    titleEn: 'Inception',
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
  [109, {
    title: '雄狮',
    titleEn: 'Lion',
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
  }],
  [110, {
    title: '盗梦空间',
    titleEn: 'Inception',
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
  [111, {
    title: '雄狮',
    titleEn: 'Lion',
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
  }],
])

const dArtist = new Map([
  [200, {
    name: '莱昂纳多·迪卡普里奥',
    nameEn: 'Leonardo DiCaprio',
    gender: 'male',
    vocation: ['演员', '制片人', '配音', '编剧'],
    intro: '1974年11月11日出生于美国加利福尼亚州洛杉矶。19岁那年他出演了《不一样的天空》中的弱智儿亚尼，纯朴自然的表演为初涉影坛的他赢得了第66届奥斯卡金像奖提名和第51届美国电影金球奖电影剧情类最佳男配角提名。1995年在巴兹·鲁赫曼指导的现代激情版《罗密欧与朱丽叶》中，他塑造了一个崭新的罗密欧形象，融狂躁不安、反叛精神和多愁伤感于一体，后因此片荣膺第47届柏林国际电影节最佳男主角奖。1996年主演詹姆斯·卡梅隆执导的史诗巨作《泰坦尼克号》，该片获11项奥斯卡大奖，全球狂揽18亿美元票房，打破了美国和世界各地的票房记录。莱昂纳多因在影片中的完美表演而成了“世纪末的票房炸弹”，年轻英俊、充满朝气，像旋风般席卷了全球。他也凭此片获得第55届美国电影金球奖电影剧情类最佳男主角提名。2003年与马丁·西科塞斯合作的电影《飞行家》，为莱昂迎来第一个金球影帝（第62届金球奖电影剧情类最佳男主角）和第77届奥斯卡金像奖最佳男主角提名。2005年拍摄了电影《无间行者》和《血钻》，莱昂纳多凭借这两部影片获得第64届金球奖电影剧情类最佳男主角双提名，同时是金球历史上首个获得最佳男主角双提名的演员，并以《血钻》获得第79届奥斯卡金像奖最佳男主角提名。2011年福布斯发布好莱坞最具票房号召力明星排名，莱昂纳多凭借7000万美元的收入荣登榜首。2015年莱昂纳多以他在《荒野猎人》中的演出拿下了奥斯卡金像奖的最佳男主角奖。',
    assets: {
      avatar: '/fengos/demo/assets/artist/Leonardo/portrait.webp',
      poster: '/fengos/demo/assets/artist/Leonardo/poster.webp'
    },
    works: [],
    awards: []
  }],
  [201, {
    name: '布拉德·皮特',
    nameEn: 'Brad Pitt',
    gender: 'male',
    vocation: ['演员', '制片人', '配音', '编剧'],
    intro: '1963年12月18日出生于美国俄克拉荷马州，在密苏里州长大。1991年《塞尔玛与路易丝》成为皮特从影的成名作。1995年，皮特凭科幻片《十二只猴子》首次夺得金球奖最佳电影男配角及奥斯卡最佳男配角提名。而后又因剧情片《燃情岁月》（1994年）、《通天塔》（2006年）等获金球奖最佳电影男主角和男配角提名。2007年，皮特凭《神枪手之死》一片获得威尼斯电影节影帝、并以《返老还童》（2008年）和《点球成金》（2011年）中出色的演技两度获奥斯卡最佳男主角提名。皮特最终于《好莱坞往事》（2019年）获得第一个奥斯卡最佳男配角奖。',
    assets: {
      avatar: '/fengos/demo/assets/artist/Brad/portrait.webp',
      poster: '/fengos/demo/assets/artist/Brad/poster.webp'
    },
    works: [],
    awards: []
  }],
  [202, {
    name: '莱昂纳多·迪卡普里奥',
    nameEn: 'Leonardo DiCaprio',
    gender: 'male',
    vocation: ['演员', '制片人', '配音', '编剧'],
    intro: '1974年11月11日出生于美国加利福尼亚州洛杉矶。19岁那年他出演了《不一样的天空》中的弱智儿亚尼，纯朴自然的表演为初涉影坛的他赢得了第66届奥斯卡金像奖提名和第51届美国电影金球奖电影剧情类最佳男配角提名。1995年在巴兹·鲁赫曼指导的现代激情版《罗密欧与朱丽叶》中，他塑造了一个崭新的罗密欧形象，融狂躁不安、反叛精神和多愁伤感于一体，后因此片荣膺第47届柏林国际电影节最佳男主角奖。1996年主演詹姆斯·卡梅隆执导的史诗巨作《泰坦尼克号》，该片获11项奥斯卡大奖，全球狂揽18亿美元票房，打破了美国和世界各地的票房记录。莱昂纳多因在影片中的完美表演而成了“世纪末的票房炸弹”，年轻英俊、充满朝气，像旋风般席卷了全球。他也凭此片获得第55届美国电影金球奖电影剧情类最佳男主角提名。2003年与马丁·西科塞斯合作的电影《飞行家》，为莱昂迎来第一个金球影帝（第62届金球奖电影剧情类最佳男主角）和第77届奥斯卡金像奖最佳男主角提名。2005年拍摄了电影《无间行者》和《血钻》，莱昂纳多凭借这两部影片获得第64届金球奖电影剧情类最佳男主角双提名，同时是金球历史上首个获得最佳男主角双提名的演员，并以《血钻》获得第79届奥斯卡金像奖最佳男主角提名。2011年福布斯发布好莱坞最具票房号召力明星排名，莱昂纳多凭借7000万美元的收入荣登榜首。2015年莱昂纳多以他在《荒野猎人》中的演出拿下了奥斯卡金像奖的最佳男主角奖。',
    assets: {
      avatar: '/fengos/demo/assets/artist/Leonardo/portrait.webp',
      poster: '/fengos/demo/assets/artist/Leonardo/poster.webp'
    },
    works: [],
    awards: []
  }],
  [203, {
    name: '布拉德·皮特',
    nameEn: 'Brad Pitt',
    gender: 'male',
    vocation: ['演员', '制片人', '配音', '编剧'],
    intro: '1963年12月18日出生于美国俄克拉荷马州，在密苏里州长大。1991年《塞尔玛与路易丝》成为皮特从影的成名作。1995年，皮特凭科幻片《十二只猴子》首次夺得金球奖最佳电影男配角及奥斯卡最佳男配角提名。而后又因剧情片《燃情岁月》（1994年）、《通天塔》（2006年）等获金球奖最佳电影男主角和男配角提名。2007年，皮特凭《神枪手之死》一片获得威尼斯电影节影帝、并以《返老还童》（2008年）和《点球成金》（2011年）中出色的演技两度获奥斯卡最佳男主角提名。皮特最终于《好莱坞往事》（2019年）获得第一个奥斯卡最佳男配角奖。',
    assets: {
      avatar: '/fengos/demo/assets/artist/Brad/portrait.webp',
      poster: '/fengos/demo/assets/artist/Brad/poster.webp'
    },
    works: [],
    awards: []
  }],
  [204, {
    name: '莱昂纳多·迪卡普里奥',
    nameEn: 'Leonardo DiCaprio',
    gender: 'male',
    vocation: ['演员', '制片人', '配音', '编剧'],
    intro: '1974年11月11日出生于美国加利福尼亚州洛杉矶。19岁那年他出演了《不一样的天空》中的弱智儿亚尼，纯朴自然的表演为初涉影坛的他赢得了第66届奥斯卡金像奖提名和第51届美国电影金球奖电影剧情类最佳男配角提名。1995年在巴兹·鲁赫曼指导的现代激情版《罗密欧与朱丽叶》中，他塑造了一个崭新的罗密欧形象，融狂躁不安、反叛精神和多愁伤感于一体，后因此片荣膺第47届柏林国际电影节最佳男主角奖。1996年主演詹姆斯·卡梅隆执导的史诗巨作《泰坦尼克号》，该片获11项奥斯卡大奖，全球狂揽18亿美元票房，打破了美国和世界各地的票房记录。莱昂纳多因在影片中的完美表演而成了“世纪末的票房炸弹”，年轻英俊、充满朝气，像旋风般席卷了全球。他也凭此片获得第55届美国电影金球奖电影剧情类最佳男主角提名。2003年与马丁·西科塞斯合作的电影《飞行家》，为莱昂迎来第一个金球影帝（第62届金球奖电影剧情类最佳男主角）和第77届奥斯卡金像奖最佳男主角提名。2005年拍摄了电影《无间行者》和《血钻》，莱昂纳多凭借这两部影片获得第64届金球奖电影剧情类最佳男主角双提名，同时是金球历史上首个获得最佳男主角双提名的演员，并以《血钻》获得第79届奥斯卡金像奖最佳男主角提名。2011年福布斯发布好莱坞最具票房号召力明星排名，莱昂纳多凭借7000万美元的收入荣登榜首。2015年莱昂纳多以他在《荒野猎人》中的演出拿下了奥斯卡金像奖的最佳男主角奖。',
    assets: {
      avatar: '/fengos/demo/assets/artist/Leonardo/portrait.webp',
      poster: '/fengos/demo/assets/artist/Leonardo/poster.webp'
    },
    works: [],
    awards: []
  }],
  [205, {
    name: '布拉德·皮特',
    nameEn: 'Brad Pitt',
    gender: 'male',
    vocation: ['演员', '制片人', '配音', '编剧'],
    intro: '1963年12月18日出生于美国俄克拉荷马州，在密苏里州长大。1991年《塞尔玛与路易丝》成为皮特从影的成名作。1995年，皮特凭科幻片《十二只猴子》首次夺得金球奖最佳电影男配角及奥斯卡最佳男配角提名。而后又因剧情片《燃情岁月》（1994年）、《通天塔》（2006年）等获金球奖最佳电影男主角和男配角提名。2007年，皮特凭《神枪手之死》一片获得威尼斯电影节影帝、并以《返老还童》（2008年）和《点球成金》（2011年）中出色的演技两度获奥斯卡最佳男主角提名。皮特最终于《好莱坞往事》（2019年）获得第一个奥斯卡最佳男配角奖。',
    assets: {
      avatar: '/fengos/demo/assets/artist/Brad/portrait.webp',
      poster: '/fengos/demo/assets/artist/Brad/poster.webp'
    },
    works: [],
    awards: []
  }],
  [206, {
    name: '莱昂纳多·迪卡普里奥',
    nameEn: 'Leonardo DiCaprio',
    gender: 'male',
    vocation: ['演员', '制片人', '配音', '编剧'],
    intro: '1974年11月11日出生于美国加利福尼亚州洛杉矶。19岁那年他出演了《不一样的天空》中的弱智儿亚尼，纯朴自然的表演为初涉影坛的他赢得了第66届奥斯卡金像奖提名和第51届美国电影金球奖电影剧情类最佳男配角提名。1995年在巴兹·鲁赫曼指导的现代激情版《罗密欧与朱丽叶》中，他塑造了一个崭新的罗密欧形象，融狂躁不安、反叛精神和多愁伤感于一体，后因此片荣膺第47届柏林国际电影节最佳男主角奖。1996年主演詹姆斯·卡梅隆执导的史诗巨作《泰坦尼克号》，该片获11项奥斯卡大奖，全球狂揽18亿美元票房，打破了美国和世界各地的票房记录。莱昂纳多因在影片中的完美表演而成了“世纪末的票房炸弹”，年轻英俊、充满朝气，像旋风般席卷了全球。他也凭此片获得第55届美国电影金球奖电影剧情类最佳男主角提名。2003年与马丁·西科塞斯合作的电影《飞行家》，为莱昂迎来第一个金球影帝（第62届金球奖电影剧情类最佳男主角）和第77届奥斯卡金像奖最佳男主角提名。2005年拍摄了电影《无间行者》和《血钻》，莱昂纳多凭借这两部影片获得第64届金球奖电影剧情类最佳男主角双提名，同时是金球历史上首个获得最佳男主角双提名的演员，并以《血钻》获得第79届奥斯卡金像奖最佳男主角提名。2011年福布斯发布好莱坞最具票房号召力明星排名，莱昂纳多凭借7000万美元的收入荣登榜首。2015年莱昂纳多以他在《荒野猎人》中的演出拿下了奥斯卡金像奖的最佳男主角奖。',
    assets: {
      avatar: '/fengos/demo/assets/artist/Leonardo/portrait.webp',
      poster: '/fengos/demo/assets/artist/Leonardo/poster.webp'
    },
    works: [],
    awards: []
  }],
  [207, {
    name: '布拉德·皮特',
    nameEn: 'Brad Pitt',
    gender: 'male',
    vocation: ['演员', '制片人', '配音', '编剧'],
    intro: '1963年12月18日出生于美国俄克拉荷马州，在密苏里州长大。1991年《塞尔玛与路易丝》成为皮特从影的成名作。1995年，皮特凭科幻片《十二只猴子》首次夺得金球奖最佳电影男配角及奥斯卡最佳男配角提名。而后又因剧情片《燃情岁月》（1994年）、《通天塔》（2006年）等获金球奖最佳电影男主角和男配角提名。2007年，皮特凭《神枪手之死》一片获得威尼斯电影节影帝、并以《返老还童》（2008年）和《点球成金》（2011年）中出色的演技两度获奥斯卡最佳男主角提名。皮特最终于《好莱坞往事》（2019年）获得第一个奥斯卡最佳男配角奖。',
    assets: {
      avatar: '/fengos/demo/assets/artist/Brad/portrait.webp',
      poster: '/fengos/demo/assets/artist/Brad/poster.webp'
    },
    works: [],
    awards: []
  }],
  [208, {
    name: '莱昂纳多·迪卡普里奥',
    nameEn: 'Leonardo DiCaprio',
    gender: 'male',
    vocation: ['演员', '制片人', '配音', '编剧'],
    intro: '1974年11月11日出生于美国加利福尼亚州洛杉矶。19岁那年他出演了《不一样的天空》中的弱智儿亚尼，纯朴自然的表演为初涉影坛的他赢得了第66届奥斯卡金像奖提名和第51届美国电影金球奖电影剧情类最佳男配角提名。1995年在巴兹·鲁赫曼指导的现代激情版《罗密欧与朱丽叶》中，他塑造了一个崭新的罗密欧形象，融狂躁不安、反叛精神和多愁伤感于一体，后因此片荣膺第47届柏林国际电影节最佳男主角奖。1996年主演詹姆斯·卡梅隆执导的史诗巨作《泰坦尼克号》，该片获11项奥斯卡大奖，全球狂揽18亿美元票房，打破了美国和世界各地的票房记录。莱昂纳多因在影片中的完美表演而成了“世纪末的票房炸弹”，年轻英俊、充满朝气，像旋风般席卷了全球。他也凭此片获得第55届美国电影金球奖电影剧情类最佳男主角提名。2003年与马丁·西科塞斯合作的电影《飞行家》，为莱昂迎来第一个金球影帝（第62届金球奖电影剧情类最佳男主角）和第77届奥斯卡金像奖最佳男主角提名。2005年拍摄了电影《无间行者》和《血钻》，莱昂纳多凭借这两部影片获得第64届金球奖电影剧情类最佳男主角双提名，同时是金球历史上首个获得最佳男主角双提名的演员，并以《血钻》获得第79届奥斯卡金像奖最佳男主角提名。2011年福布斯发布好莱坞最具票房号召力明星排名，莱昂纳多凭借7000万美元的收入荣登榜首。2015年莱昂纳多以他在《荒野猎人》中的演出拿下了奥斯卡金像奖的最佳男主角奖。',
    assets: {
      avatar: '/fengos/demo/assets/artist/Leonardo/portrait.webp',
      poster: '/fengos/demo/assets/artist/Leonardo/poster.webp'
    },
    works: [],
    awards: []
  }],
  [209, {
    name: '布拉德·皮特',
    nameEn: 'Brad Pitt',
    gender: 'male',
    vocation: ['演员', '制片人', '配音', '编剧'],
    intro: '1963年12月18日出生于美国俄克拉荷马州，在密苏里州长大。1991年《塞尔玛与路易丝》成为皮特从影的成名作。1995年，皮特凭科幻片《十二只猴子》首次夺得金球奖最佳电影男配角及奥斯卡最佳男配角提名。而后又因剧情片《燃情岁月》（1994年）、《通天塔》（2006年）等获金球奖最佳电影男主角和男配角提名。2007年，皮特凭《神枪手之死》一片获得威尼斯电影节影帝、并以《返老还童》（2008年）和《点球成金》（2011年）中出色的演技两度获奥斯卡最佳男主角提名。皮特最终于《好莱坞往事》（2019年）获得第一个奥斯卡最佳男配角奖。',
    assets: {
      avatar: '/fengos/demo/assets/artist/Brad/portrait.webp',
      poster: '/fengos/demo/assets/artist/Brad/poster.webp'
    },
    works: [],
    awards: []
  }],
  [210, {
    name: '莱昂纳多·迪卡普里奥',
    nameEn: 'Leonardo DiCaprio',
    gender: 'male',
    vocation: ['演员', '制片人', '配音', '编剧'],
    intro: '1974年11月11日出生于美国加利福尼亚州洛杉矶。19岁那年他出演了《不一样的天空》中的弱智儿亚尼，纯朴自然的表演为初涉影坛的他赢得了第66届奥斯卡金像奖提名和第51届美国电影金球奖电影剧情类最佳男配角提名。1995年在巴兹·鲁赫曼指导的现代激情版《罗密欧与朱丽叶》中，他塑造了一个崭新的罗密欧形象，融狂躁不安、反叛精神和多愁伤感于一体，后因此片荣膺第47届柏林国际电影节最佳男主角奖。1996年主演詹姆斯·卡梅隆执导的史诗巨作《泰坦尼克号》，该片获11项奥斯卡大奖，全球狂揽18亿美元票房，打破了美国和世界各地的票房记录。莱昂纳多因在影片中的完美表演而成了“世纪末的票房炸弹”，年轻英俊、充满朝气，像旋风般席卷了全球。他也凭此片获得第55届美国电影金球奖电影剧情类最佳男主角提名。2003年与马丁·西科塞斯合作的电影《飞行家》，为莱昂迎来第一个金球影帝（第62届金球奖电影剧情类最佳男主角）和第77届奥斯卡金像奖最佳男主角提名。2005年拍摄了电影《无间行者》和《血钻》，莱昂纳多凭借这两部影片获得第64届金球奖电影剧情类最佳男主角双提名，同时是金球历史上首个获得最佳男主角双提名的演员，并以《血钻》获得第79届奥斯卡金像奖最佳男主角提名。2011年福布斯发布好莱坞最具票房号召力明星排名，莱昂纳多凭借7000万美元的收入荣登榜首。2015年莱昂纳多以他在《荒野猎人》中的演出拿下了奥斯卡金像奖的最佳男主角奖。',
    assets: {
      avatar: '/fengos/demo/assets/artist/Leonardo/portrait.webp',
      poster: '/fengos/demo/assets/artist/Leonardo/poster.webp'
    },
    works: [],
    awards: []
  }],
  [211, {
    name: '布拉德·皮特',
    nameEn: 'Brad Pitt',
    gender: 'male',
    vocation: ['演员', '制片人', '配音', '编剧'],
    intro: '1963年12月18日出生于美国俄克拉荷马州，在密苏里州长大。1991年《塞尔玛与路易丝》成为皮特从影的成名作。1995年，皮特凭科幻片《十二只猴子》首次夺得金球奖最佳电影男配角及奥斯卡最佳男配角提名。而后又因剧情片《燃情岁月》（1994年）、《通天塔》（2006年）等获金球奖最佳电影男主角和男配角提名。2007年，皮特凭《神枪手之死》一片获得威尼斯电影节影帝、并以《返老还童》（2008年）和《点球成金》（2011年）中出色的演技两度获奥斯卡最佳男主角提名。皮特最终于《好莱坞往事》（2019年）获得第一个奥斯卡最佳男配角奖。',
    assets: {
      avatar: '/fengos/demo/assets/artist/Brad/portrait.webp',
      poster: '/fengos/demo/assets/artist/Brad/poster.webp'
    },
    works: [],
    awards: []
  }],
])