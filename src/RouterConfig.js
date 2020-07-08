import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

import Home from './pages/Home'
import Prevention from './pages/Prevention'
import Symptoms from './pages/Symptoms'
import Navbar from './components/Navbar'

//import './App.css'



function RouterConfiq() {
  return (
    <div className="container">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route path="/Symptoms" component={Symptoms} ></Route>
          <Route exact path="/Prevention" component={Prevention} ></Route>
          
          <Route path="*" component={()=><h1> 404 Page Not Found</h1>} ></Route>

        </Switch>
      </Router>


    </div>
  )
}

export default RouterConfiq