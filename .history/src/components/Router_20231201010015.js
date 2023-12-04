import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'App.js';
import TheNav from './TheNav';
import AboutMe from 'pages/AboutMe';

const Router = () => {
  return (
    <BrowserRouter>
    <TheNav/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-me" element={<AboutMe/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;