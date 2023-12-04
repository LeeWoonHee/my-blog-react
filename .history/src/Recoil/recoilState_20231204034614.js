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
      id: 1,
      image: lgcnsImg,
      title: 'LG CNS',
      skill: 'REACT, MUI',
      desc: (
        <>
          일주일 단위로 정해진 수정리스트를 받아 진행을 했고,<br />
          슬라이드 메뉴의 UI 제작 및 대시보드 디자인 수정작업을 진행했습니다.
        </>
      )
    },
    {
      id: 2,
      image: hansolImg,
      title: '한솔 V Frontiers',
      skill: 'VUE',
      link: 'https://github.com/LeeWoonHee/hansol-v-frontiers',
      desc: (
        <>
          첫 vue 프로젝트를 시작으로 로그인과 회원가입 , fetch를 이용한 백엔드와 서버통신 기술을 실제 프로젝트에서 사용하면서 약간의 이해가 되기 시작했던 순간이였습니다.
        </>
      )
    },
    {
      id: 3,
      image: elseRedImg,
      title: 'ELSE RED',
      skill: 'VUE, GSAP, Three.js',
      link: 'https://github.com/LeeWoonHee/else-red'
    },
    {
      id: 4,
      image: releaseElseImg,
      title: 'ELSE RELEASE',
      skill: 'VUE, GSAP, Three.js',
      link: 'https://github.com/LeeWoonHee/release-else'
    },
    {
      id: 5,
      image: hyuntechImg,
      title: '현테크',
      skill: 'VUE, Smooth Scroll',
      link: 'https://github.com/LeeWoonHee/hyun-tech'
    },
    {
      id: 6,
      image: quantumImg,
      title: '퀀텀벤처스 코리아',
      skill: 'VUE',
      link: 'https://github.com/LeeWoonHee/quantum-ventures-korea'
    },
    {
      id: 7,
      image: visualTrackImg,
      title: '비주얼트랙',
      skill: 'VUE, GSAP, Three.js',
      link: 'https://github.com/LeeWoonHee/visual-track'
    }
  ],
});