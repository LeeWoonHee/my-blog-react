import { atom } from 'recoil';
import lgcnsImg from 'assets/images/LGCNS.png';
import hansolImg from 'assets/images/hansol.png';
import elseRedImg from 'assets/images/elsered.png';
import releaseElseImg from 'assets/images/releaseElse.png';
import hyuntechImg from 'assets/images/hyuntech.png';
import quantumImg from 'assets/images/quantum.png';
import visualTrackImg from 'assets/images/visualtrack.png';

export const postDataState = atom({
  key: 'postDataState',
  default: [
    {
      id:1,
      image: lgcnsImg,
      title: 'LG CNS',
      skill: 'REACT, MUI'
    },
    {
      id:2,
      image: hansolImg,
      title: '한솔 V Frontiers',
      skill: 'VUE',
      link:'https://github.com/LeeWoonHee/hansol-v-frontiers'
    },
    {
      id:3,
      image: elseRedImg,
      title: 'ELSE RED',
      skill: 'VUE, GSAP, Three.js',
      link:'https://github.com/LeeWoonHee/else-red'
    },
    {
      id:4,
      image: releaseElseImg,
      title: 'ELSE RELEASE',
      skill: 'VUE, GSAP, Three.js'
    },
    {
      id:5,
      image: hyuntechImg,
      title: '현테크',
      skill: 'VUE, Smooth Scroll'
    },
    {
      id:6,
      image: quantumImg,
      title: '퀀텀벤처스 코리아',
      skill: 'VUE'
    },
    {
      id:7,
      image: visualTrackImg,
      title: '비주얼트랙',
      skill: 'VUE, GSAP, Three.js'
    }
  ],
});