import React, { useEffect } from "react";
//@ts-ignore
import image1 from '../images/bnwUs.jpg';
import Navbar from "./Navbar";




const Home = () =>{

  const call =() =>{
    return (
      // <Navbar/>
      <>
      <Navbar/>
      </>
    )
  }

useEffect(() => {
console.log("I am on home")
call()
}, [])




return(
    <>

    <div className=" homeClass">
        <h5>THE  WORLD</h5>
        <img className="bnwUs pl-5 ml-5" src={image1} alt="bnwUs"/>
    </div>    


    </>
 )


}
export default Home;


