// import React, { Component } from "react"; //
import React from "react";
import { Component } from "react";
//????????}}}}} here all thing about class component

class Profileclass extends Component {

    constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        avatar_url:"",
        location:"",
        id:""
        
      },
    };
  }

   componentDidMount() {
    // mount will calll after first render
    // const response = await fetch(
    //   "https://api.github.com/users/arshadiqbal0612"
    // );
    // const json = await response.json();

    // this.setState({
    //   userInfo: json,
    // });
    this.timer=setInterval(()=>{
       console.log("render");
    },1000);
    // this is disadvantage of single pagg application while naviagting other page still this cunt will not unmount and increase by twice time and not remove from dom
  }
// after first render componenntdidmount callled
// then after every sequential render updatemount called

// async componentDidUpdate(){
//   // called when after every next render
//   // i told you similar thing in functioncompoennt with useeefct with depeedency array
  
// }
 componentWillUnmount(){
  // when i go to some other page then compoent removed from dom
  // i will use clearunmount for removing count twoce problem story

  clearInterval(this.timer);
  console.log(("unmount"));

}
  render() {
    console.log("child  render");
    return (
      <div>
        <h4>fbkfa</h4>
        <h3>Profile from class component</h3>
        <h3>Name: {this.state.userInfo.name}</h3>
        <h3>Location: {this.state.userInfo.location}</h3>
        <img src={this.state.userInfo.avatar_url} alt="Avatar" />     
           <h3>id: {this.state.userInfo.id}</h3>

      </div>
    );
  }
}

export default Profileclass;

 // why
  // cstr is placed for intailazation
  // when you load class constr callled hnce we can use state for create state
  // first of all constructr called then render
  // whenver class is intaialization for firsst time your cstr called first

  
  // we will see how lifecycle of component will work
  // constr called->compoennet render->componentDidMount callled*
  // the most importaant question where we will callled fetch method i hope after learning prev today topics you should tell first render then as like useeefect as i already mentioned in profile.js at the end of code

  /**
   * parent cnstr
   * parent render
   * 
   * first child cstr
   * first child render
   * 
   * parent compoennt mound 
   * child component mound
   * 
   * 
   * 
   * 
   * 
   * 
   */
  /**
   * let handle order of this page
   * child cstr called
   * child render
   * child compoennt
   * 
   * api called
   * set state
   * 
   * update cycle
   * render
   * compoennetdidupdate
   * 
   */


  // mount will called when after first render 
  // update will called wheen after every next render

  // ohhhhhso see why this is to much copmplex i need to handle update and mount function for every render while change in state
  // now how functional component make things easy 
  // what happpen when you update compoennt->it will update dom and trigger another method which is componentdidupdate


  // let end with conclusion story
  // when component load then constructor callled then render called and dom display after component mount and it call api data 
  // after getting data from compoentdidmount function it will update state so whenever state chnage then compoentdidupdate callled 
  // after naviagting other page when compoent remove from dom it will called componentdidunmount