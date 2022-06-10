import { Route, Routes, Redirect } from "react-router";

import "./App.css";

import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-left">Tacono Gate</div>
        <div className="App-header-right">
          <span className="App-header-right-unit">Dates</span>
          <span className="App-header-right-unit">Merch</span>
        </div>
      </header>
      <div className="App-content">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
