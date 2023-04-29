import React from "react";

function asyncReducer(state, action) {
  switch (action.type) {
    case "pending": {
      return { status: "pending", data: null, error: null };
    }
    case "resolved": {
      return { status: "resolved", data: action.data, error: null };
    }
    case "rejected": {
      return { status: "rejected", data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function useAsync(asyncCallBack, initialState, dependencies = []) {
  const [state, dispatch] = React.useReducer(asyncReducer, {
    status: "idle",
    data: null,
    error: null,
    ...initialState,
  });

  React.useEffect(() => {
    const promise = asyncCallBack();
    if (!promise) {
      return;
    }
    dispatch({ type: "pending" });
    promise
      .then((res) => res.json())
      .then(
        (data) => {
          dispatch({ type: "resolved", data });
        },
        (error) => {
          dispatch({ type: "rejected", error });
        }
      );
    /* eslint-disable react-hooks/exhaustive-deps */
  }, dependencies);

  return state;
}

export default useAsync;
