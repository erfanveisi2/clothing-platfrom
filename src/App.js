import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";




function App() {
  return (
    <div >
        <Route exact path='/'  component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
