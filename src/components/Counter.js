import React, { useState } from "react";

export default function Counter(props) {
  const btnStyle = {
    width: "75px",
    height: "75px",
    fontSize: "30px",
  };

  let [initialVal, setValue] = useState(props.val);

  const incrFnc = () => {
    let newVal = initialVal + props.byWhat;
    setValue(newVal);
    console.log(newVal);
  };

  const decrFnc = () => {
    let newVal = initialVal - props.byWhat;
    setValue(newVal);
    console.log(newVal);
  };

  return (
    <div>
      <div className="container text-center my-5">
        <h1 className="text-light my-3">Counter App</h1>
        <div className="container d-flex justify-content-evenly text-light my-5">
          <button
            type="button"
            className="btn btn-danger"
            style={btnStyle}
            onClick={decrFnc}
          >
            -{props.byWhat}
          </button>
          <span style={{ fontSize: "50px" }}>{initialVal}</span>
          <button
            type="button"
            className="btn btn-primary"
            style={btnStyle}
            onClick={incrFnc}
          >
            +{props.byWhat}
          </button>
        </div>
      </div>
    </div>
  );
}
