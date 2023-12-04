import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TheNav from './TheNav';
import AboutMe from 'pages/AboutMe';
import Loading from './Loading';
import Portfolios from 'pages/Portfolios';
import Carousel from './Carousel';
import ShowPortfolio from 'pages/ShowPortfolio';

const Router = () => {
  return (
    <BrowserRouter>
    <TheNav/>
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/about-me" element={<AboutMe/>}/>
        <Route path='/portfolios'element={<Portfolios/>}/>
        <Route path='/portfolios/:id' element={<ShowPortfolio/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;