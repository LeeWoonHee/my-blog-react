import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TheNav from './TheNav';
import AboutMe from 'pages/AboutMe';
import Loading from './Loading';
import Portfolios from 'pages/Portfolios';
import Carousel from './Carousel';

const Router = () => {
  return (
    <BrowserRouter>

    <TheNav/>
      <Routes>
        <Route path="/" element={<Carousel/>,<Loading/>}  />
        <Route path="/about-me" element={<AboutMe/>}/>
        <Route path='/portfolios'element={<Portfolios/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;