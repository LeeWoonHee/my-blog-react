import React from 'react';
import { useParams } from 'react-router-dom';


const ShowPortfolio = () => {
  const id = useParams();

console.log(id)
  return (
    <div>
      여기는 상세 포트폴리오 페이지
    </div>
  );
};

export default ShowPortfolio;