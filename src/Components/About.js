import React from "react";
import { Outlet } from "react-router-dom";

import ProfileFunctionalcomponent from "./Profile";
// import Profile from "./Profileclass";
import { Component } from "react";
// import Profile from "./Profileclass";
import Profileclass from "./Profileclass";
import Profile from "./Profile";
// const About2 = () => {
//   return (
//     <div>
//       <h1>about the page</h1>
//       {/* <Profileclass/>//example of class-component */}
//       <ProfileFunctionalcomponent name={"arshad"} />
//       {/* <Outlet />    */}
//       <Profile name={"RAJU"} />
//     </div>
//   );
// };
// export default About;
{
  /* /-> means from root */
}

class About extends Component {
  constructor(props) {
    super(props);
    
    console.log("parent constructor called");
  }
  componentDidMount() {
    console.log("parent mounted");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>about the page </h1>
        <Profile/>
        <Outlet/>
      </div>
    );
  }
}
export default About;
