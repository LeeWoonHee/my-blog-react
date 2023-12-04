import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { postDataState } from "Recoil/recoilState";




const Portfolios = () => {
  const [postData, setPostData] = useRecoilState(postDataState);
  return (
    <div className="portfoliosSection w-full h-full blex">
      <div className="w-3/5 p-50">
        {/* 상단 타이틀 */}
        <div class="titleWrap">
          <h2 class="title w-full blex-left">PORFOLIO.</h2>
        </div>

        {/* 포트폴리오 리스트 */}
        <div className="portfolioWrapper">
          <div className="portfolioItems">
            {postData.map((item, index) => (
              <div className="portfolioContent" key={index}>
                <NavLink to={`/portfolios/${item.id}`} className='portfolioBox'>
                  <div className="portfolioItem">
                    <div className="imageBox">
                      <div className="image">
                        <img src={item.image}
                          alt="Portfolio Thumbnail"
                          class="w-full"
                        />
                      </div>
                    </div>

                    <div class="titleBox">
                      <div class="w-full title"> {item.title || '-'}</div>
                      <div class="w-full subTitle"> {item.skill || '-'}</div>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolios;