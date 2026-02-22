import { useState } from "react";

import "./display/style/style.scss";

// components
// layout
import Header from "./components/layout/Header";
// routes
import Game from "./components/routes/Game";
import Home from "./components/routes/Home";

const App = () => {
  const [gamePlaying, setGamePlaying] = useState(false);

  return (
    <div className="app">
      <Header />
      {gamePlaying ? (
        <Game onClick={() => setGamePlaying(false)} />
      ) : (
        <Home onClick={() => setGamePlaying(true)} />
      )}
    </div>
  );
};

export default App;
