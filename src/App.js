import React from "react";
import "./App.css";
import QuoteInfo from "./components/QuoteInfo";

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <h1>Anime & Quotes</h1>
        <h1>
          <a
            href="https://animechan.vercel.app/"
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            Api.
          </a>
        </h1>
      </div>
      <QuoteInfo />
    </div>
  );
}

export default App;
