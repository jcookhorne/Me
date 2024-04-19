    import {BrowserRouter, Route, Routes} from 'react-router-dom'
    import Profile from './Pages/Profile.tsx'
    import React from 'react'
    import Home from './Pages/Home.tsx'
import Navbar from './Pages/Navbar.tsx'


    const Routing = () =>{
        return(
            <BrowserRouter>
             <Routes>
                 <Route path='/' Component={Home}/>
                 <Route path='/Profile' Component={Profile}/>
            </Routes>
            </BrowserRouter>
        )
    }

    export default Routing;



