import './App.scss';
import Carousel from 'components/Carousel';
import TheNav from 'components/TheNav';
import Router from 'components/Router';

function App() {
  return (
    <div className="App w-full h-full">
      {/* <TheNav/>
      <Carousel/> */}
      <Router/>
    </div>
  );
}

export default App;
