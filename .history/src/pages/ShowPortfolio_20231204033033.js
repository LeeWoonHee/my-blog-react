import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { postDataState } from "Recoil/recoilState";
import backArrow from 'pages/images/back-to-list-arrow.png'
import { Portfolios } from 'pages/Portfolios';

const ShowPortfolio = () => {
  const [postData, setPostData] = useRecoilState(postDataState);
  const id = useParams().id;

  const portfolioData = postData[id - 1];

  return (
    <div className="portfolioPage">

      <div className="portfolioContainer">

        <div className="titleSection">
          <img
            className="thumbnailImage"
            src={portfolioData.image}
            alt="thumbnail-image"
          />
          <div className="titleSectionContainer">

            {/* 이전으로 */}
            <div className="backToList blex-left w-full ">
              <NavLink to='/portfolios'>
                <img
                  src={backArrow}
                  alt="arrow"
                />
                <p>이전으로</p>
              </NavLink>
            </div>


            <div
              className="textBox"
            >
              <div className="title">{portfolioData.title}</div>

              <div className="linkBox">
                <div className="clientLink">소스코드</div>
                <div className="link">
                  <a href={portfolioData.link} target="_blank" >
                    {portfolioData.link || '-'}
                  </a>
                </div>
              </div>

              <div className="overviewBox ">
                <div className="overviewTitle">
                  사용 기술
                </div>
                <div className="description">
                  {portfolioData.skill}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolioImage">
          <div className="w-full blex">
            <img src={portfolioData.fullImg} alt=''/>
          </div>
        </div>
      </div >

    </div >
  );
};

export default ShowPortfolio;