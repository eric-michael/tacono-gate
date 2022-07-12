import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import "./App.css";

import background from "./images/Website_background2.jpg";

import Main from "./pages/Main";
import Contact from "./pages/Contact";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// library creation for fontawesome
library.add(fas, far, fab);

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="App">
      <header className="App-header">
        <Link to="/" className="App-header-left">
          Tacono Gate
        </Link>
        <div className="App-header-right">
          <Link to="/contact" className="App-header-right-unit">
            Contact
          </Link>
          <a
            href="https://taconogate.myshopify.com/"
            className="App-header-right-unit"
          >
            Merch
          </a>
        </div>
      </header>
      <div className="App-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
