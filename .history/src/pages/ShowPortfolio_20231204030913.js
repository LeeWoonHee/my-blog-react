import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { postDataState } from "Recoil/recoilState";

const ShowPortfolio = () => {
  const [postData, setPostData] = useRecoilState(postDataState);
  const id = useParams().id;
  
  portfolioData = postData[id-1];
  
  return (
    <div className="portfolioPage" >

  <div className="portfolioContainer">

    <div className="titleSection">
      {/* <img
          className="thumbnailImage"
          :src="localPortfolios.thumbnail_image"
          alt="thumbnail-image"
      /> */}
      <div className="titleSectionContainer">

        {/* 이전으로 */}
        <div className="backToList blex-left w-full ">
          {/* <router-link
              to="/portfolios"
              @click.native="$router.push('/portfolios').then(()=>{$router.go()}).catch(()=>{$window.location.reload()})"
          > */}
            <img
                src="pages/images/back-to-list-arrow.png"
                alt="arrow"
            />
            <p>이전으로</p>
          {/* </router-link> */}
        </div>


        <div
            className="textBox"
        >
          {/* <div className="title">{{ localPortfolios.title }}</div> */}
          {/* <div className="category">{{ localPortfolios.category }}</div> */}

          <div className="linkBox">
            <div className="clientTitle">Client</div>
            {/* <div className="clientName"> {{ localPortfolios.client_name }}</div> */}
            <div className="clientLink">Link</div>
            <div className="link">
              <a href={"localPortfolios.link"} target="_blank" >
                {/* {{ portfolios.link }} */}
              </a>
            </div>
          </div>

          <div className="overviewBox ">
            <div className="overviewTitle">
              OVERVIEW
            </div>
            <div className="description">
              {/* {{ localPortfolios.description || '-' }} */}
            </div>
          </div>

        </div>


      </div>
    </div>

    <div className="portfolioImage">
      <div
          className="w-full blex "
          // v-html="localPortfolios.content"
      >

      </div>
    </div>
  </div >

</div >
  );
};

export default ShowPortfolio;