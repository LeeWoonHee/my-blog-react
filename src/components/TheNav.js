import { Link, NavLink, useLocation } from "react-router-dom"
import React from "react";


const TheNav = () => {
  const currentPath = useLocation()
  console.log(currentPath.pathname)
return(
    <div className={`nav w-full blex fixed top-0 z-20 ${currentPath.pathname === '/about-me' || currentPath.pathname === '/portfolios' ? 'text-black' : 'text-white'} `}>
      <div className='flex justify-between w-9/10'
          style={{height: '65px'}}>
      <div className='logo'>
        <a href="/">Woon's Blog</a>
      </div>
      <div className='flex w-1/5 justify-between font-semibold' style={{ fontSize : '1.5vw'}}>
        <div className='blex p-2'><NavLink to='/about-me'>About Me</NavLink></div>
        <div className='blex p-2'><NavLink to='/portfolios'>Portfolios</NavLink></div>
      </div>
      </div>
    </div>
  )
}
export default TheNav;