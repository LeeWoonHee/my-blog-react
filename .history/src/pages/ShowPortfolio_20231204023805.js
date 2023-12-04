import React from 'react';
import { useParams } from 'react-router-dom';


const ShowPortfolio = () => {
  const pageid = useParams();

  console.log(pageid)
  return (
    <div className='showPortfolioSection w-full h-full blex'>
      <div className='w-3/5 p-50'>
        여기는 상세 포트폴리오 페이지
      </div>
    </div>
  );
};

export default ShowPortfolio;