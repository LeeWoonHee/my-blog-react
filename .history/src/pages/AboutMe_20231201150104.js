import woonEmoji from './images/emoji.png';

const AboutMe = () => {
  const woonData = {
    Name: '이운희',
    Email: 'zero1158@naver.com',
    Phone: '010-7157-6399',
    GitHub: 'https://github.com/LeeWoonHee'
  };

  const elseDecription = '회사 취업 후 3일 뒤 프로젝트에 바로 투입이 되었습니다. LG cns 회사의 관리자 페이지 수정 및 유지보수 업무를 맡았고, React로 만들어져 있는 페이지를 한 주 마다 수정 사항을 LG cns 측에서 보내주면 수정하는 업무였고, 첫 프로젝트이고, 혼자 하다 보니 시간이 오래 걸려 처음에는 새벽 2시까지 회사에 있기도 했습니다. 점차 야근하는 시간이 줄어들었습니다. 

  LG cns 수정 업무를 맡으면서 크게 느꼈던 점은 코드를 다른 사람들도 볼 수 있게 작성을 해야된다는 점이었습니다. LG cns의 경우 여기 저기 다른 회사들에게 돌아가면서 수정을 맡겼기 때문에 코드가 약속되어 있지 않기 때문에 코드를 읽는데 시간이 오래 걸렸습니다. 
  
  그 후 Vue로 프로젝트를 진행을 했고, 첫 프로젝트의 경우 Vue가 처음이다 보니 두려움도 많았지만, 프로젝트를 진행하면서 점차 두려움은 사라졌고, 혼나더라도 당당하게 잘못한 점은 인정하고, 이해하려고 노력하면서 한솔 V Frontiers 프로젝트에서는 프로젝트 상에서 폴더 구조에 대해 정리하는 법을 배웠습니다. 
  
  Else 와 Else Release 홈페이지를 만들면서 Three.js라는 언어와 Gsap을 배우게 되었고, 프로젝트를 진행하면서 부딪혀보면서 구글링을 통해 모르는 것들을 알아가면서 프로젝트를 진행했습니다. 이 때 당시에 언어를 새로 배우는 것에 대한 두려움을 완전히 떨쳐 버렸던 계기가 된 프로젝트였습니다.
  
  현테크 프로젝트의 경우 단독 프로젝트였고, 이 프로젝트는 간단한 홈페이지였지만, 스무스 스크롤을 사용하면서 많은 에러와의 싸움을 경험했습니다. Locomotive scroll 라이브러리를 사용을 했었고, 
  
  이 때 당시에 마감 시간이 가까워 지는데 스무스 스크롤에서 에러가 발생을 하면서 약간 지연이 되었던 적이 있었습니다. 사수님께 솔직하게 말씀을 드리고 시간을 정해 그 시간 안에 해내겠다 라고 말씀을 드렸었고, Locomotive scroll의 사용법이 미숙해서 발생했던 에러들을 해결한 뒤 마감을 했던 기억이 있습니다.
  
  퀀텀벤쳐스 코리아의 경우 굉장히 큰 프로젝트였다고 생각을 했었는데, 데이터가 워낙에 많다 보니, 백엔드에서 데이터를 다 보내주어야 하는 상황이었고, 이 때 백엔드와의 협업의 중요성을 많이 배웠습니다. 데이터를 언제 받아와야 하는 지에 대한 고민을 많이 했었고, 이 때 당시 Vue 라이프 사이클을 통해 데이터가 늦게 들어오는 상황을 해결했었습니다.
  
  마지막으로 Visual Track 프로젝트의 경우 visual track이라는 회사가 뮤직비디오를 제작, 촬영하는 회사이다 보니, 화려하고, 이목을 집중 시키는 것이 목적이였기 때문에 Three.js를 사용하기로 했습니다.  단독 프로젝트였고, 3D 부분에서 수정을 거듭하면서 프로젝트 제작 기간이 오래 걸리기도 하였지만, 3D 사용 시 저사양 컴퓨터의 경우 홈페이지가 끊기는 현상을 해결하기 위해 많은 노력을 했었고, 코드를 줄이는 것에 대해 고민을 많이 했고, three.js에 대해 많은 공부를 해서 해결을 했습니다. 
  
  이 프로젝트의 경우 awwwards 라는 홈페이지에서 이달의 어워즈를 받아서 기분 좋은 경험이 있습니다.
  
  엘스라는 회사가 경영 악화로 인해 퇴사하게 되었지만, 새로운 언어에 대해 배우는 것에 대한 두려움을 떨쳐버리고 팀원들과의 의사소통의 중요성을 알게 되었고,  개발자란 항상 공부를 하며 노력을 해야 한다는 것을 크게 느끼게 해주는 회사였습니다.
'
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
              <div><span className='text-xs'>(주)</span>디엘스 -</div>
              <div> 2022년 12월 05일 ~ 2023년 11월 01일<span className='text-xs ml-5'>(경영상 악화로 인한 퇴직)</span></div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;