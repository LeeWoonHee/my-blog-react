import woonEmoji from './images/emoji.png';

const AboutMe = () => {
  const woonData = [
    {Name : '이운희'},
    {Email : 'zero1158@naver.com'}
  ]
  return (
    <div className="aboutSection w-full h-full blex">
      <div className="w-3/5 pt-50">
        <div className="flex">
          <div className="w-3/10">
            <img src={woonEmoji} alt="emoji"/>
          </div>
          <div className="w-7/10">
            {woonData.keys}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;