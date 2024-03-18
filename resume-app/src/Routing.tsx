    import {BrowserRouter, Route, Routes} from 'react-router-dom'
    import Profile from './My_Resume/Profile.tsx'
    import React from 'react'
    import Home from './Home.tsx'


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



