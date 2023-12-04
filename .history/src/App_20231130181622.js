import './App.scss';
import Loading from 'components/Loading';
import Carousel from 'components/Carousel';
import Router from 'components/Router';

function App() {
  return (
    <div className="App w-full h-full">
      <Loading/>
      <Router/>
    </div>
  );
}

export default App;
