'use client'
import { useEffect } from "react"

export default function Loading() {
  useEffect( () => {
    setTimeout(() => {
      const preloader = document.querySelector('.js-preloader')
      preloader.classList.add('-is-hidden')
    }, 1000)
  }, [] )

  return(
    <div className="preloader js-preloader">
      <div className="preloader__wrap">
        <div className="preloader__icon">
          w
        </div>
      </div>
      <div className="preloader__title">Loading...</div>
    </div>
  )
}