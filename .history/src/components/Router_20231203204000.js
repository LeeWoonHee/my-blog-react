import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'App.js';
import TheNav from './TheNav';
import AboutMe from 'pages/AboutMe';
import Loading from './Loading';
import Portfolios from 'pages/Portfolios';

const Router = () => {
  return (
    <BrowserRouter>
    <Loading/>
    <TheNav/>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        {/* <Route path="/about-me" element={<AboutMe/>}/> */}
        {/* <Route path='/porfolios'element={<Portfolios/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router;