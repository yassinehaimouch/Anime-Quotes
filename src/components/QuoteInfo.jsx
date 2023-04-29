import React from "react";
import useAsync from "../Hooks/useAsync";
import "./quoteinfo.css";

function QuoteInfo() {
  const [count, setCount] = React.useState(0);

  const state = useAsync(
    () => {
      return fetch("https://animechan.vercel.app/api/random");
    },
    { status: "idle", data: null, error: null },
    [count]
  );

  const { data, status, error } = state;
  switch (status) {
    case "idle":
      return <span className="quote-container">Searching</span>;
    case "pending":
      return <h1 className="quote-container">loading...</h1>;
    case "rejected":
      throw error;
    case "resolved":
      return (
        <div className="quote-container">
          <h1>{data.quote}</h1>
          <div className="anime-character">
            <h3 className="italic-style">{`— ${data.character}`}</h3>
            <div className="anime">
              <h6 className="anime-title">Anime :</h6>
              <h3 className="italic-style">{data.anime}</h3>
            </div>
          </div>
          <button
            className="btn"
            onClick={() => setCount((count) => count + 1)}
          >
            New Quote
          </button>
        </div>
      );
    default:
      throw new Error("This should be impossible");
  }
}

export default QuoteInfo;
