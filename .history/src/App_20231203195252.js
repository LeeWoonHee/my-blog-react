import './App.scss';
import Loading from 'components/Loading';
import Carousel from 'components/Carousel';
import TheNav from 'components/TheNav';

function App() {
  return (
    <div className="App w-full h-full">
      <TheNav/>
      <Carousel/>
    </div>
  );
}

export default App;
