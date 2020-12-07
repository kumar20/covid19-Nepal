import React from 'react'
import {BrowserRouter as Router,Route,Link } from 'react-router-dom'
import IntroPage from './components/introPage'
import Municipality from './components/landingPage/municipality'
import Summary from './components/landingPage/summary'
import WorldPage from './components/landingPage/world'
import whatisCorona from './components/whatisCorona/whatisCorona'
import myths from './myths'

// const Navigate =()=>{
//     return(
//         <div>
//             <Link to='/WhatIsCorona'>whatisCorona</Link>
//             <Link to='/myths'>myths</Link>
//             <Link to='intropage'>IntroPage</Link>
//         </div>
//     )
// }

const Routing =()=>{
    return(
        <Router>
            {/* <Navigate></Navigate> */}
            <Route exact path='/' component={IntroPage}></Route>
            <Route path='/world' component={WorldPage}></Route>
            <Route path='/municipility' component={Municipality}></Route>
            <Route path='/summary' component={Summary}></Route>
            <Route path='/WhatIsCorona' component={whatisCorona}></Route>
            <Route path='/myths' component={myths}></Route>
        </Router>
    )
}
export default Routing