import React from "react";
import "./App.css";
import QuoteInfo from "./components/QuoteInfo";


function App() {
  return (
    <div>
      <div className="header">
        <h2>Anime & Quotes</h2>
        <h2>Api.</h2>
      </div>
      <QuoteInfo />
    </div>
  );
}

export default App;
