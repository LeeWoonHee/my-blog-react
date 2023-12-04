import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'App.js';
import TheNav from './TheNav';

const Router = () => {
  return (
    <BrowserRouter>
      <TheNav/>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;