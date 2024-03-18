import React, { useEffect } from "react";
import image1 from "./images/bnwUs.jpg";


const Home = () =>{

useEffect(() => {
// console.log(image1)
}, [])



return(
    <>
  <div className="">
    
  </div>
    
    <div className=" homeClass">
        <h5>THE  WORLD</h5>
        <img className="bnwUs pl-5 ml-5" src={image1} alt="bnwUs"/>
    </div>    


    </>
 )


}
export default Home;


