import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ChevronLeft from "components/ChevronLeft"
import ChevronRight from "components/ChevronRight"
import Loading from './Loading';
import { NavLink } from 'react-router-dom';
import lgcnsImg from 'assets/images/LGCNS.png';
import hansolImg from 'assets/images/hansol.png';
import elseRedImg from 'assets/images/elsered.png';
import releaseElseImg from 'assets/images/releaseElse.png';
import hyuntechImg from 'assets/images/hyuntech.png';
import quantumImg from 'assets/images/quantum.png';
import visualTrackImg from 'assets/images/visualtrack.png';

const postData = [
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
    link: 'https://github.com/LeeWoonHee/quantum-ventures-korea',
    desc:(
      <>
        투자사의 데이터관리를 위한 홈페이지 제작 프로젝트였습니다. <br/>
        데이터가 워낙 많다보니 프론트와 백엔드 서로가 주고받는 기능들을 많이 구현하면서 백엔드와의 협업에서 많은 배움을 얻었던 프로젝트였습니다.<br/>
      </>
    )
  },
  {
    id: 7,
    image: visualTrackImg,
    title: '비주얼트랙',
    skill: 'VUE, GSAP, Three.js',
    link: 'https://github.com/LeeWoonHee/visual-track',
    desc:(
      <>
        혼자 작업을 한 프로젝트였고, three.js를 많이 사용하고, 디자인을 가장 중요시 작업을 진행했습니다. awwwards를 수상했던 가장 기분 좋았던 프로젝트입니다.<br/>
        타홈페이지의 경우 3d가 들어간 홈페이지라면 사용하는데 속도가 늦어지는데 사양이 낮은 컴퓨터에서도 끊기지 않게 하기 위해 노력을 많이 기울였던 프로젝트입니다.
      </>
    )
  }
];

const Carousel = () => {
  
  
  let [currentIndex, setCurrentIndex] = useState(0)
  let [prev, setPrev] = useState(false)
  let [next, setNext] = useState(false)
  let [prevIndex, setPrevIndex] = useState(false)
  let [slideData, setSlideData] = useState(postData)
  let [progressbar] = useState(postData.length)
  let timeline = gsap.timeline()

  const prevSlide = (e) => {
    if (timeline.isActive() === false) {
      setCurrentIndex(() =>
        currentIndex === 0 ? currentIndex = 0 : currentIndex - 1
      )
      setPrevIndex((prev) =>
        true
      )
      setPrev(true)
      setNext(false)

    }
  }
  const nextSlide = (e) => {
    if (timeline.isActive() === false) {
      setCurrentIndex((prevIndex) =>
        currentIndex = prevIndex + 1
      )
      setPrev(false)
      setNext(true)
    }
  }
  const infinityLoop = () => {
    if (next === true
      && prevIndex === false
      && timeline.isActive() === false) {
      let temp = postData
      temp.push(temp[currentIndex - 1])
      setSlideData(temp)
    }
  }
  
  //mount 시 한번만 함수 실행
  useEffect(() => {
    const openAnimation = gsap.timeline()
    openAnimation.to('.carouselSlideActive', {
      visibility: 'hidden',
    }, 'start')
      .fromTo('.backgroundImageActive', {
        width: '20vw',
        height: '50%',
        padding: '10px',
        zIndex: 1,
        top: '25%',
        left: '40%'
      }, {
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        padding: 0,
        duration: 1
      }, 'start')
      .fromTo('.backgroundImageActive .backgroundImgBox', {
        borderRadius: '25px',
      }, {
        borderRadius: 0,
        ease: 'Power1.easeOut',
        duration: 1
      }, '-=0.5')
      .fromTo('.backgroundImageActive  .swiperText', {
        y: 0,
        opacity: 1,
      }, {
        y: 20,
        opacity: 0,
        duration: 1
      }, '-=1.2')
      .fromTo('.titleWrapper', {
        y: 200,
        opacity: 0,
        ease: 'Power3.easeOut',
      }, {
        opacity: 1,
        y: 0,
        ease: 'Power3.easeOut',
        duration: 0.5,
      }, '+=0.1')
      .to('.carouselSlide', {
        translateX: `-${currentIndex + 1}00%  `,
        duration: 1
      }, '-=1')
      .to('.carouselSlide .swiperText', {
        opacity: 1,
      }, '-=0.1')
  }, [])

  useEffect(() => {
    if (next && timeline.isActive() === false) {
      timeline
        .to('.carouselSlideActive', {
          visibility: 'hidden',
          duration: 1
        }, 'start')
        .to('.backgroundImageActive', {
          visibility: 'visible',
          duration: 1
        }, 'start')
        .fromTo('.backgroundImageActive', {
          width: '20vw',
          height: '50%',
          padding: '10px',
          zIndex: 1,
          top: '25%',
          left: '40%'
        }, {
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          padding: 0,
          duration: 1
        }, 'start+=0.5')
        .to('.backgroundImageActive .backgroundImgBox', {
          borderRadius: 0,
          duration: 1
        }, '-=1')
        .to('.backgroundImageActive .virtualBg', {
          borderRadius: 0,
          duration: 1
        }, '-=1')
        .fromTo('.backgroundImageActive  .swiperText', {
          y: 0,
          opacity: 1,
        }, {
          y: 20,
          opacity: 0,
          duration: 0.5
        }, '-=1.2')
        .fromTo('.titleWrapper', {
          opacity: 0,
          y: 200,
          ease: 'Power3.easeOut',
        }, {
          opacity: 1,
          y: 0,
          ease: 'Power3.easeOut',
          duration: 0.5,
        }, '+=0.1')
        .to('.carouselSlide', {
          translateX: `-${currentIndex + 1}00%  `,
          duration: 1
        }, '-=1')
        .to('.carouselSlide .swiperText', {
          opacity: 1,
        }, '-=0.1')

      if (currentIndex < postData.length * 3) {
        infinityLoop()
      }

      setPrevIndex(false)

    } else if (prev && timeline.isActive() === false) {
      timeline
        .to('.carouselSlide', {
          translateX: `-${currentIndex + 1}00%  `,
          duration: 1
        }, 'start')
        .to(`.backgroundImageActive + .backgroundImage`,
          {
            width: '20vw',
            height: '50vh',
            padding: '10px',
            top: '25%',
            left: '40%',
            duration: 1
          }, '-=1')
        .to('.backgroundImageActive+.backgroundImage .virtualBg', {
          borderRadius: '25px',
          duration: 1
        }, '-=1')
        .to('.backgroundImageActive+.backgroundImage .backgroundImgBox', {
          borderRadius: '25px',
          duration: 1
        }, '-=1')
        .to('.carouselSlideActive+.carouselSlide ', {
          visibility: 'visible',
        }, '-=0.1')
        .to(`.backgroundImageActive + .backgroundImage`, {
          visibility: 'hidden',
        }, '-=0.45')
        .fromTo('.backgroundImageActive + .backgroundImage  .swiperText', {
          y: 20,
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: 0.5
        }, '-=1')
    }

    return () => {
      timeline.kill()
    }
  }, [currentIndex])


  return (
    <>
    <Loading/>
    <div className="carouselContainer">
      <div
        className='titleWrapper'
        id="titleWrapper"
      >
        <div style={{ fontSize: '5.5vw', margin: '10px 0', lineHeight: '1', letterSpacing: '-0.05em' }}>
          {postData[currentIndex].title}
        </div>
        <div style={{ fontSize: '2vw' }}>{postData[currentIndex].skill}</div>
        <NavLink to={`/portfolios/${postData[currentIndex].id}`} className='moreButton blex'>SEE MORE POST</NavLink>
      </div>
      <div className="carousel">
        {postData.map((banner, index) => (
          <div
            key={index}
            className={`carouselSlide ${index === currentIndex ? 'carouselSlideActive' : ''
              }`}
          >

            <div className="imgBox">
            <div className={`carouselBg ${index === currentIndex ? 'carouselBgActive' : ''
                }`}></div>
              <img src={banner.image} alt={banner.title} />
             
            </div>

            <div className="absolute bottom-10 left-10 z-10 text-white swiperText">
              <div style={{ fontSize: '1.6vw' }}>{banner.title}</div>
              <div style={{ fontSize: '1vw' }}>{banner.skill}</div>
            </div>

          </div>
        ))}
      </div>
      {postData.map((banner, index) => (
        <div
          key={index}
          className={`backgroundImage ${index === currentIndex ? 'backgroundImageActive' : ''
            }`}
        >

          <div className="backgroundImgBox">
            <img src={banner.image} alt={`Banner ${index + 1}`} />
            <div className={`virtualBg ${index === currentIndex ? 'virtualBgActive' : ''
              }`}></div>
          </div>
          <div className="absolute bottom-10 left-10 z-1 text-white swiperText">
            <div style={{ fontSize: '1.6vw' }}>{banner.title}</div>
            <div style={{ fontSize: '1vw' }}>{banner.skill}</div>
          </div>
        </div>
      ))}
      <div className="carouselBottomWrapper">
        <div className="carouselButtonWrapper">
          <button className="carouselButton" onClick={prevSlide}>
            <ChevronLeft />
          </button>
          <button className="carouselButton" onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>
        <div className="progressBar">
          <div className="progressBarInner" style={{ width: `${(currentIndex + 1 > progressbar ? (currentIndex % progressbar) + 1 : currentIndex + 1) / progressbar * 100}%` }}></div>
        </div>
        <div className='pageIndex'>0{currentIndex + 1 > progressbar ? (currentIndex % progressbar) + 1 : currentIndex + 1}</div>
      </div>
    </div>
    </>
  )
}

export default Carousel
