import React from 'react';
import { Switch, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/signin/signin-signup.component'
import Header from './components/header/header.component'
import {setCurrentUser} from './redux/user/user.actions'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});

        userRef.onSnapshot(snapShot => {
          this.props.setUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } 
      this.props.setUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignInSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
