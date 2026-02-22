import { Routes, Route } from "react-router-dom";

import "./display/style/style.scss";

// components
// layout
import Header from "./components/layout/Header";
// routes
import Game from "./components/routes/Game";
import Home from "./components/routes/Home";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;
