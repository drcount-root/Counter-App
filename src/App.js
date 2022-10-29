import React from "react";

import Counter from "./components/Counter";

export default function App() {
  return (
    <div>
      <React.StrictMode>
        <Counter val={0} byWhat={1} />
        <Counter val={5} byWhat={10} />
      </React.StrictMode>
    </div>
  );
}
