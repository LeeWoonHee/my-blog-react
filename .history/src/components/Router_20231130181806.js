import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'App.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;