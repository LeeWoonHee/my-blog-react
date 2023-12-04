import React from 'react';
import { useParams } from 'react-router-dom';


const ShowPortfolio = () => {
  const id = useParams();

  console.log(id.id)
  return (
    <div className="portfolioPage" >

  <div className="portfolioContainer">

    <div class="titleSection">
      {/* <img
          class="thumbnailImage"
          :src="localPortfolios.thumbnail_image"
          alt="thumbnail-image"
      /> */}
      <div class="titleSectionContainer">

        {/* 이전으로 */}
        <div class="backToList blex-left w-full ">
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
            class="textBox"
        >
          {/* <div class="title">{{ localPortfolios.title }}</div> */}
          {/* <div class="category">{{ localPortfolios.category }}</div> */}

          <div class="linkBox">
            <div class="clientTitle">Client</div>
            {/* <div class="clientName"> {{ localPortfolios.client_name }}</div> */}
            <div class="clientLink">Link</div>
            <div class="link">
              <a href={"localPortfolios.link"} target="_blank" >
                {/* {{ portfolios.link }} */}
              </a>
            </div>
          </div>

          <div class="overviewBox ">
            <div class="overviewTitle">
              OVERVIEW
            </div>
            <div class="description">
              {/* {{ localPortfolios.description || '-' }} */}
            </div>
          </div>

        </div>


      </div>
    </div>

    <div class="portfolioImage">
      <div
          class="w-full blex "
          // v-html="localPortfolios.content"
      >
        
      </div>
    </div>
  </div >

</div >
  );
};

export default ShowPortfolio;