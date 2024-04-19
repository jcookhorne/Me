import React, { useEffect } from "react"

//@ts-ignore
import navExpand from "../images/hamburger_1.png"

const Navbar = () => {

    useEffect(()=>{
        console.log("This is a common navbar that will be on every page")
    },[])

    const buttonClicked = () =>{
        console.log("I was Clicked")
      }

    return (
    <>
    <div className="nav-bar-outer">
    <ul className="nav-bar">
      <li className="nav-expand"> <img src={navExpand}/></li>
      <li className="nav-items"><button>Home</button></li>
      <li className="nav-items"><button className="nav-buttons" onClick={buttonClicked}>My Resume</button></li>
   </ul>
  </div>
    
    </>
    )


}
export default Navbar