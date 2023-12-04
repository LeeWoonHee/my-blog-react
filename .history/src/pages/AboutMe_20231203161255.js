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
              &nbsp;첫 직장으로 취업 후 모든 프로젝트를 책임감 있게 야근도 하면서 부족한 부분을 채우고 프론트엔드엔드 업무를 충실히 이행했습니다.<br/>
              국비지원 프로그램에서 배우지 못했던, 협업과 실제 업무에서의 개발자로서 일하는 방법을 배웠습니다.<br/>
              프로젝트들을 거쳐가면서 혼자서 해결하는 방법들을 스스로 깨우치고, 회사마다 코드를 작성하는 방법과 폴더링하는 방법은 다르겠지만,
              타인이 봤을 때 눈에 쉽게 들어오는 코드를 작성하는 방법에 대해 더 생각하게 되었고, 폴더를 세분화해서 한눈에 쉽게 확인하는 방법에 대해 더 생각하게 되었습니다.<br/>
              또한 국비지원에서 간략하게 배웠던 React를 활용하고, Vue를 공부하면서 새로운 것에 대한 거부감이 사라지는 계기가 되었습니다.<br/>
              \m
              &nbsp;else.red 사이트를 제작을 하면서 vue라는 언어에 대해 더 깊게 알아가는 기회가 되었고, 지식을 쌓고 사용하는 것이 아닌 사용을 하면서 내 것으로 만든다는 것을 알게되었고,
              Gsap과 Three.js라는 새로운 기술들을 사용해보고 배우는 계기가 되었던 좋은 프로젝트였다고 생각을 합니다.<br/>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;