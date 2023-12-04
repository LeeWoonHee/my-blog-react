import woonEmoji from './images/emoji.png';

const AboutMe = () => {
  const woonData = {
    Name: '이운희',
    Email: 'zero1158@naver.com',
    Phone: '010-7157-6399',
    GitHub: 'https://github.com/LeeWoonHee'
  };


  const woonDataKeys = Object.keys(woonData)
  return (
    <div className="aboutSection w-full h-full blex">
      <div className="w-3/5 pt-50">
        {/* 이모지 및 기본 정보 */}
        <div className="flex flex-wrap w-full">
          <div className="w-3/10">
            <img src={woonEmoji} alt="emoji" />
          </div>
          <div className="w-7/10 pl-50 pt-50 align-bottom">
            {woonDataKeys.map((key, index) => (

              <div key={index} className='mt-10 font-semibold '>

                {key} : {key === 'GitHub' ? <a target="_blank" className='text-dark-gray' href={woonData[key]}>{woonData[key]}</a> : woonData[key]}
              </div>
            ))}
          </div>
        </div>
        {/* 회사 및 학원 이력  */}
        <div className='flex flex-wrap w-full'>
          <div className='mt-50 pb-10 w-full border-b-1 border-gray font-bold text-lg'>회사 및 학원 이력 <span className='font-normal text-xs text-dark-gray'>(개발에 관련된 이력만 작성하였습니다.)</span></div>
          <div className='mt-20 w-full text-base'>
            <div className='flex'>
              <div className='font-bold'><span className='text-xs'>(주)</span>디엘스</div>
              <div>&nbsp;- 2022년 12월 05일 ~ 2023년 11월 01일<span className='text-xs ml-5 text-dark-gray'>(경영상 악화로 인한 퇴직)</span></div>
            </div>
            <div className='mt-10'>
              첫 직장으로 취업 후 모든 프로젝트를 책임감 있게 작업을 하면서 프론트엔드엔드 전반적인 업무를 충실히 이행했습니다.<br/>
              국비지원 프로그램에서 배우지 못했던, 협업과 실제 업무에서의 개발자로서 일하는 방법을 배웠습니다.<br/>
              또한 국비지원에서 간략하게 배웠던 React를 활용하고, Vue를 배우면서 새로운 것에 대한 거부감이 사라지는 계기가 되었습니다.<br/>
              Vue를 배우고 Three.js,Gsap 등을 배우면서 사람들의 이목을 끌 수 있는 개발을 하는 방법을 배웠습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;