import React from 'react';
import { useParams } from 'react-router-dom';

const id = useParams();

console.log(id)
const ShowPortfolio = () => {
  return (
    <div>
      여기는 상세 포트폴리오 페이지
    </div>
  );
};

export default ShowPortfolio;