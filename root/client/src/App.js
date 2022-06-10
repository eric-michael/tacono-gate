import './App.css';
import image from './images/image0.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-left">
          Tacono Gate
        </div>
        <div className="App-header-right">
          <span className="App-header-right-unit">Dates</span>
          <span className="App-header-right-unit">Merch</span>
        </div>
      </header>
      <div className="App-content">
        <img src={image} alt="Tacono Gate" className="main-image"/>
      </div>
    </div>
  );
}

export default App;
