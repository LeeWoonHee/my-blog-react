import './App.scss';
import Router from 'components/Router';
import Loading from 'components/Loading';
function App() {
  return (
    <div className="App w-full h-full">
          <Loading/>
      <Router/>
    </div>
  );
}

export default App;
