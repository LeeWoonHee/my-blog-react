import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ChevronLeft from "components/ChevronLeft"
import ChevronRight from "components/ChevronRight"
import lgcnsImg from 'assets/images/LGCNS.png';
import hansolImg from 'assets/images/hansol.png';
import elseRedImg from 'assets/images/elsered.png';
import releaseElseImg from 'assets/images/releaseElse.png';
import hyuntechImg from 'assets/images/hyuntech.png';
import quantumImg from 'assets/images/quantum.png';
import visualTrackImg from 'assets/images/visualtrack.png';


const postData = [
  {
    image: lgcnsImg,
    title: 'LG CNS',
    skill: 'REACT, Material UI'
  },
  {
    image: hansolImg,
    title: '한솔 V Frontiers',
    skill: 'VUE'
  },
  {
    image: elseRedImg,
    title: 'ELSE RED',
    skill: 'VUE, GSAP, Three.js'
  },
  {
    image: releaseElseImg,
    title: 'ELSE RELEASE',
    skill: 'VUE, GSAP, Three.js'
  },
  {
    image: hyuntechImg,
    title: '현테크',
    skill: 'VUE, Smooth Scroll'
  },
  {
    image: quantumImg,
    title: '퀀텀벤처스 코리아',
    skill: 'VUE'
  },
  {
    image: visualTrackImg,
    title: '비주얼트랙',
    skill: 'VUE, GSAP, Three.js'
  }
]


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
    openAnimation.to('.carousel-slide-active', {
      visibility: 'hidden',
    }, 'start')
      .fromTo('.background-image-active', {
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
      .fromTo('.background-image-active .backgroundImgBox', {
        borderRadius: '25px',
      }, {
        borderRadius: 0,
        ease: 'Power1.easeOut',
        duration: 1
      }, '-=0.5')
      .fromTo('.background-image-active  .swiper-text', {
        y: 0,
        opacity: 1,
      }, {
        y: 20,
        opacity: 0,
        duration: 1
      }, '-=1.2')
      .fromTo('.title-wrapper', {
        y: 200,
        opacity: 0,
        ease: 'Power3.easeOut',
      }, {
        opacity: 1,
        y: 0,
        ease: 'Power3.easeOut',
        duration: 0.5,
      }, '+=0.1')
      .to('.carousel-slide', {
        translateX: `-${currentIndex + 1}00%  `,
        duration: 1
      }, '-=1')
      .to('.carousel-slide .swiper-text', {
        opacity: 1,
      }, '-=0.1')
  }, [])

  useEffect(() => {
    if (next && timeline.isActive() === false) {
      timeline
        .to('.carousel-slide-active', {
          visibility: 'hidden',
          duration: 1
        }, 'start')
        .to('.carousel-bg-active', {
          visibility: 'hidden',
          duration: 1
        }, 'start')
        .to('.background-image-active', {
          visibility: 'visible',
          duration: 1
        }, 'start')
        .fromTo('.background-image-active', {
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
        .fromTo('.background-image-active .backgroundImgBox', {
          borderRadius: '25px',
        }, {
          borderRadius: 0,
          duration: 1
        }, '-=1')
        .fromTo('.background-image-active  .swiper-text', {
          y: 0,
          opacity: 1,
        }, {
          y: 20,
          opacity: 0,
          duration: 0.5
        }, '-=1.2')
        .fromTo('.title-wrapper', {
          opacity: 0,
          y: 200,
          ease: 'Power3.easeOut',
        }, {
          opacity: 1,
          y: 0,
          ease: 'Power3.easeOut',
          duration: 0.5,
        }, '+=0.1')
        .to('.carousel-slide', {
          translateX: `-${currentIndex + 1}00%  `,
          duration: 1
        }, '-=1')
        .to('.carousel-slide .swiper-text', {
          opacity: 1,
        }, '-=0.1')

      if (currentIndex < postData.length * 3) {
        infinityLoop()
      }

      setPrevIndex(false)

    } else if (prev && timeline.isActive() === false) {
      timeline
        .to('.carousel-slide', {
          translateX: `-${currentIndex + 1}00%  `,
          duration: 1
        }, 'start')
        .to(`.background-image-active + .background-image`,
          {
            width: '20vw',
            height: '50vh',
            padding: '10px',
            top: '25%',
            left: '40%',
            duration: 1
          }, '-=1')
        .to('.background-image-active+.background-image .bkacgroundImgBox', {
          borderRadius: 0,
        }, {
          borderRadius: '25px',
          duration: 1
        }, '-=1')
        .to('.carousel-slide-active+.carousel-slide ', {
          visibility: 'visible',
        }, '-=0.1')
        .to(`.background-image-active + .background-image`, {
          visibility: 'hidden',
        }, '-=0.1')
        .fromTo('.background-image-active+.background-image  .swiper-text', {
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
    <div className="carousel-container">

      <div
        className='title-wrapper'
        id="title-wrapper"
      >
        <div style={{ fontSize: '5.5vw', margin: '10px 0', lineHeight: '1', letterSpacing: '-0.05em' }}>
          {postData[currentIndex].title}
        </div>
        <div style={{ fontSize: '2vw' }}>{postData[currentIndex].skill}</div>
        <button className='more-button'>SEE MORE POST</button>
      </div>
      <div className="carousel">
        {postData.map((banner, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'carousel-slide-active' : ''
              }`}
          >

            <div className="imgBox">
              <img src={banner.image} alt={banner.title} />
              <div className={`carousel-bg ${index === currentIndex ? 'carousel-bg-active' : ''
                }`}></div>
            </div>

            <div className="absolute bottom-10 left-10 z-10 text-white swiper-text">
              <div style={{ fontSize: '1.6vw' }}>{banner.title}</div>
              <div style={{ fontSize: '1vw' }}>{banner.skill}</div>
            </div>

          </div>
        ))}
      </div>
      {postData.map((banner, index) => (
        <div
          key={index}
          className={`background-image ${index === currentIndex ? 'background-image-active' : ''
            }`}
        >

          <div className="backgroundImgBox">
            <img src={banner.image} alt={`Banner ${index + 1}`} />
            <div className={`virtual-bg ${index === currentIndex ? 'virtual-bg-active' : ''
              }`}></div>
          </div>
          <div className="absolute bottom-10 left-10 z-1 text-white swiper-text">
            <div style={{ fontSize: '1.6vw' }}>{banner.title}</div>
            <div style={{ fontSize: '1vw' }}>{banner.skill}</div>
          </div>
        </div>
      ))}
      <div className="carousel-bottom-wrapper">
        <div className="carousel-button-wrapper">
          <button className="carousel-button" onClick={prevSlide}>
            <ChevronLeft />
          </button>
          <button className="carousel-button" onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-inner" style={{ width: `${(currentIndex + 1 > progressbar ? (currentIndex % progressbar) + 1 : currentIndex + 1) / progressbar * 100}%` }}></div>
        </div>
        <div className='page-index'>0{currentIndex + 1 > progressbar ? (currentIndex % progressbar) + 1 : currentIndex + 1}</div>
      </div>
    </div>
  )
}

export default Carousel
