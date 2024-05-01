import React, { useEffect } from "react";
import { useState } from "react";
const Profile = (props) => {
  // nveer say  compuntdidmount==useeffect
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);
  useEffect(() => {
    // after every render useeeffet called
    // it will called just onces intial render
    console.log("useeefct");
    return () => {
      console.log("unmounted done");
    };
  });
  return (
    console.log("ggof"),
    <div>
      <h1>i called from functional compoenent</h1>
      <h2>name:{props.name}</h2>
      {/* <h3>{count}</h3> */}
      <button
        onClick={() => {
          setcount(1);
          setcount2(1);
        }}
      >
        click me
      </button>

      <h4>{count}</h4>
      <h4>{count2}</h4>
    </div>
  );
};
export default Profile;
// first time it render with intial state then it makes api call then fetch data then rerender again with new data
