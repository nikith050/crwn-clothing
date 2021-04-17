import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.component'

const ShopPage = () => (
  <div>Hats Page</div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop/:categoryId' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
