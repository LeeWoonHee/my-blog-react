import woonEmoji from './images/emoji.png';

const AboutMe = () => {
  const woonData = {
    Name: '이운희',
    Email: 'zero1158@naver.com',
    Phone: '010-7157-6399',
    GitHub: 'https://github.com/LeeWoonHee'
  };

  const skills = [
    {
      skill : 'HTML',
      desc : '웹표준 적합성, 기본 마크업 기술, 태그의 형식 및 문서의 구조 파악'
    },
    {
      skill : 'CSS',
      desc : '선택자 및 속성의 이해, 애니메이션 기술 적용'
    },
    {
      skill : 'SASS',
      desc : '반복문 및 변수의 활용',
    },
    {
      skill : 'JavaScript',
      desc : '선택자,속성,문법 등 이해 및 개발',
    },
    {
      skill : 'React',
      desc : 'JSX, Styled Component, React 라이브러리를 활용한 웹사이트 제작',
    },
    {
      skill : 'Vue',
      desc : 'vue를 이용한 개발, 현재 6개의 실사용 페이지 개발 경험',
    },
    {
      skill : 'Three.js',
      desc : '3D 웹사이트 제작 가능, Awwwards 홈페이지 수상',
    },
    {
      skill : '피그마',
      desc : '피그마 툴을 이용하여 소통 및 개발 가능',
    }
  ]

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
            </div>
          </div>
          <div className='mt-20 w-full text-base'>
            <div className='flex'>
              <div className='font-bold'>방송정보국제 교육원<span className='text-xs text-dark-gray'>(국비지원)</span></div>
              <div>&nbsp;- 2022년 03월 24일 ~ 2022년 9월 05일</div>
            </div>
            <div className='mt-10'>
              &nbsp;처음 HTML과 CSS를 배울 때는 처음 접하는 분야이기도 하며, 무엇이든 ‘왜 그렇게 되는 거지?’ 라는 의문을 갖고 원리를 이해해야만 넘어가는 저의 성향 때문에 수업 내용을 이해하기가 쉽지 않았습니다. 
              하지만 모르는 것에 대해 선생님들에게 적극적으로 질문하고 배운 내용을 복습하며 그 내용을 토대로 각 기능을 프로젝트 작업에 추가하다 보니 작성하는 대로 화면에 반영이 되는 결과물을 볼 수 있었습니다.
              시간이 지날수록 예전에 수업하던 내용이 차츰 이해가 되며, 처음 시작보다 점차 발전 하는 스스로의 모습을 보니 뿌듯함을 느끼고, 개발자라는 직업에 대해 더욱 큰 매력을 느꼈습니다. <br/>
              &nbsp;첫 포트폴리오 작업에는 2~3개월 시간이 소요되었지만, 2차 프로젝트 작업은 2주, 3차 프로젝트 작업은 5일이라는 시간 내로 프로젝트를 완성할 수 있었습니다. 마지막까지 개인 포트폴리오 작업을 최선을 다해 임해 방송정보국제교육원을 수료하면서 작품상도 같이 받게 되었습니다. 더욱 더 열심히 할 수 있게 만드는 동기부여가 되는 상이였습니다.
            </div>
          </div>
        </div>
        {/* 스킬 */}
        <div className='flex flex-wrap w-full'>
          <div className='mt-50 pb-10 w-full border-b-1 border-gray font-bold text-lg'>보유 기술</div>
          <div className='mt-20 w-full text-base pl-20'>
              {skills.map((item,index) => (
                <ul key={index}>
                  <li className='list-disc p-5 border-b-1 border-gray'>{item.skill}&nbsp;-&nbsp;{item.desc}</li>
                </ul>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;