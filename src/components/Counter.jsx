import React from 'react';
import "../index.css"

const Counter = ({color="red",percent=10,skill}) => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="percent" style={{ "--clr": color, "--num": percent }}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2 className="text-4xl font-bold">
                {percent}<span>%</span>
              </h2>
              <p className="text-lg font-medium">{skill}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter;
