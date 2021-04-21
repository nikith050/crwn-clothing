import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/signin/signin-signup.component'
import Header from './components/header/header.component'

import {auth} from './firebase/firebase.utils'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user);
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {

    const {currentUser} = this.state;

    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignInSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
