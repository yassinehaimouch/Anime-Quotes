import React from "react";
import useAsync from "../Hooks/useAsync";

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
      return <span>Submit a data</span>;
    case "pending":
      return <h1>loading...</h1>;
    case "rejected":
      throw error;
    case "resolved":
      return <div>{`${data.anime}, ${data.character}, ${data.quote}`}</div>;
    default:
      throw new Error("This should be impossible");
  }
}

export default QuoteInfo;
