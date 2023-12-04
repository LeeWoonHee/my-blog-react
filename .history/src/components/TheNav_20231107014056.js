'use client'
import Link from "next/link"


export default function TheNav() {

return(
    <div className='nav w-full blex fixed top-0 text-white z-20 mix-blend-difference'>
      <div className='flex justify-between w-9/10'
          style={{height: '65px'}}>
      <div className={'else-logo'}>
        <Link href='/'>Woon's Blog</Link>
      </div>
      <div className='flex w-1/5 justify-between text-xl font-semibold'>
        <div className='blex p-2 '><Link href='/about-me'>About Me</Link></div>
        <div className='blex p-2'><Link href='/portfolios'>Portfolios</Link></div>
      </div>
      </div>
    </div>
  )
}