import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
    </React.Fragment>
  );
}

export default App;



// export NODE_OPTIONS=--openssl-legacy-provider
