import React from "react";

const Shimmer2 = () => {
  return (
    <div className="restaurant-list">
      {Array(1)
        .fill("")
        .map((e, index) => {
          return <div key={index} className="shimmer-card"></div>;
        })}
    </div>
  );
};

export default Shimmer2;
