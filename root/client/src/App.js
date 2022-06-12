import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import "./App.css";

import Main from "./pages/Main";
import Dates from "./pages/Dates";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className="App-header-left">Tacono Gate</Link>
        <div className="App-header-right">
          <Link to="/dates" className="App-header-right-unit">Dates</Link>
          <span className="App-header-right-unit">Merch</span>
        </div>
      </header>
      <div className="App-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dates" element={<Dates />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
