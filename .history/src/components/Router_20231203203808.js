import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import App from 'App.js';
import TheNav from './TheNav';
import AboutMe from 'pages/AboutMe';
import Loading from './Loading';
import Portfolios from 'pages/Portfolios';

const Routing = () => {
  return (
    <Router>
    <Loading/>
    <TheNav/>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/about-me" element={<AboutMe/>}/>
        <Route path="/portfolios"element={<Portfolios/>}/>
      </Routes>
    </Router>
  )
}

export default Routing;