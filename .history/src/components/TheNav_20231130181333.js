import { Link, NavLink } from "react-router-dom"


const TheNav = () => {

return(
    <div className='nav w-full blex fixed top-0 text-white z-20'>
      <div className='flex justify-between w-9/10'
          style={{height: '65px'}}>
      <div className='else-logo'>
        {/* <NavLink to='/'>Woon's Blog</NavLink> */}
      </div>
      <div className='flex w-1/5 justify-between text-xl font-semibold'>
        {/* <div className='blex p-2 '><NavLink to='/about-me'>About Me</NavLink></div> */}
        {/* <div className='blex p-2'><NavLink to='/portfolios'>Portfolios</NavLink></div> */}
      </div>
      </div>
    </div>
  )
}
export default TheNav;