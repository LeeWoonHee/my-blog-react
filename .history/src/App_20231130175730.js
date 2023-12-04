import './App.scss';
import Loading from 'components/Loading';
import Carousel from 'components/Carousel';

function App() {
  return (
    <div className="App w-full h-full">
      <Loading/>
      <Carousel/>
    </div>
  );
}

export default App;
