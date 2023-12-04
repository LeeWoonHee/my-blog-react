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
      link: 'https://github.com/LeeWoonHee/else-red',
      desc: (
        <>
          Three.js를 이용한 자사의 홈페이지 리뉴얼 프로젝트였습니다. <br />
          첫 Three.js를 사용했었고, 처음 사용하는 언어이다 보니 작업시간이 한달 이상 소요되었습니다.<br />
          처음으로 사용한 기술을 공부하고 활용을 하면서 새로운 기술에 대한 거부감이 많이 사라지는 계기가 되는 프로젝트였습니다.
        </>
      )
    },
    {
      id: 4,
      image: releaseElseImg,
      title: 'ELSE RELEASE',
      skill: 'VUE, GSAP, Three.js',
      link: 'https://github.com/LeeWoonHee/release-else',
      desc: (
        <>
          자사 리뉴얼 후 파티 초대 홈페이지를 three.js 를 사용해 직접 구현 했고 three.js 를 다시 한번 사용하면서 복습하는 시간이 되었습니다.<br/>
          혼자서 작업을 하면서 props전달을 하면서 프로젝트에 활용하는 방식을 깨달았던 프로젝트였습니다.
        </>
      )
    },
    {
      id: 5,
      image: hyuntechImg,
      title: '현테크',
      skill: 'VUE, Smooth Scroll',
      link: 'https://github.com/LeeWoonHee/hyun-tech',
      desc:(
        <>
          현테크 홈페이지 제작을 혼자 맡아서 진행 했던 프로젝트였고, vue를 사용해 개인이 진행했던 프로젝트, smooth scroll , g-sap 에 신경을 많이 썼던 프로젝트였습니다.<br/>
          smooth scroll과 gsap을 같이 사용하면서 부딪히는 에러가 많이 발생을 했었고, 해결하면서 라이브러리의 충돌을 많이 신경쓰는 계기가 되었습니다.
        </>
      )
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