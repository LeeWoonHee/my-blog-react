import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ChevronLeft from "components/ChevronLeft"
import ChevronRight from "components/ChevronRight"
import { useRecoilState } from 'recoil';
import { postDataState } from "Recoil/recoilState";
import Loading from './Loading';
import { NavLink } from 'react-router-dom';

const Carousel = () => {

  const [postData, setPostData] = useRecoilState(postDataState);
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
        <div className='moreButton blex'><NavLink>SEE MORE POST</NavLink></div>
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
