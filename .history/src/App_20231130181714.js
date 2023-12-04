import './App.scss';
import Loading from 'components/Loading';
import Carousel from 'components/Carousel';
import Router from 'components/Router';

function App() {
  return (
    <BrowserRouter>
    <TheNav/>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
