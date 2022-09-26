import React from "react";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";

function App() {
  return (
    <>
      <Particle params={particlesConfig} className="App-particles__container" />
      <div className="App">
        <div className="App-text">
          <h1 className="App-text__title">Post Sharing Platform</h1>
          <h2 className="App-text__body">
            This is the screen reserved for sharing and engaging with other posts based on Crypto-Exchanges
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
