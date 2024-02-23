


import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        
       <Navbar/>

       <Routes>
        <Route path='/'  element = {<News key="general"  country = "in" category = "general" pageSize={8}/>}></Route>
        <Route path='/business'  element =  { <News key="business" country = "in" category = "business" pageSize={8}/>}></Route>
        <Route path='/entertainment'  element =   {<News key="entertainment" country = "in" category = "entertainment" pageSize={8}/>}></Route>
        <Route path='/health' element = { <News key="health" country = "in" category = "health" pageSize={8}/>}></Route>
        <Route path='/science' element = { <News key="science" country = "in" category = "science" pageSize={8}/>}></Route>
        <Route path='/sports' element =  { <News key="sports" country = "in" category = "sports" pageSize={8}/>}></Route>
        <Route path='/technology' element =  {<News key="technology" country = "in" category = "technology" pageSize={8}/>}></Route>
       </Routes>
       
       
      </div>
      </Router>
    );
  }
}
