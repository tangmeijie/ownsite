import "../styles/a.scss"
import anime from 'animejs/lib/anime.es.js';

// console.log(moment().format('YYYY-MM-DD'))
anime({
  targets: 'h1',
  translateX: 250,
  // rotate: '1turn',
  // backgroundColor: '#FFF',
  duration: 800,
  loop: true
});