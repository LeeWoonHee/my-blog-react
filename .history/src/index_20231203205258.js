import React from 'react';
import lgcnsImg from 'assets/images/LGCNS.png';
import hansolImg from 'assets/images/hansol.png';
import elseRedImg from 'assets/images/elsered.png';
import releaseElseImg from 'assets/images/releaseElse.png';
import hyuntechImg from 'assets/images/hyuntech.png';
import quantumImg from 'assets/images/quantum.png';
import visualTrackImg from 'assets/images/visualtrack.png';
import ReactDOM from 'react-dom/client';
import './style.scss';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import { createStoreHook } from 'react-redux';

const postData = [
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
    skill: 'VUE'
  },
  {
    id:3,
    image: elseRedImg,
    title: 'ELSE RED',
    skill: 'VUE, GSAP, Three.js'
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
]

function reducer(state , action) {
  return state = postData
};
let store = createStoreHook(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
