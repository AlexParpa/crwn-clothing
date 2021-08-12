import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import Header from './components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {                    
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({currentUser: userAuth})
      }
    })
  }
    

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>

        {/*PLACE OUTSIDE SWITCH BEAUSE WE ALWAYS WANT THIS TO BE RENDERED .... on all pages*/}
        <Header currentUser={this.state.currentUser}/>

        {/*Switch doesn't render anything else after the first match
            - ex: if exact is false and we access /hats only homepage will render
          */}
        <Switch>

          {/* Route is a component that takes the following arguments: 
            - exact: 
                - true-> this path must be exactly what was specified
                - false -> if it contains (word wrap) whats written in the path arg it will still render
                    /hats/ = /hats = /hats/something != /hat 
            - path: the URL path from the current place we are at
            - component: the component we want to render

            => it renders components as if we would access a new pages
          */}
          <Route exact path='/' component={HomePage}/>        
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>

        </Switch>
      </div>
    );
  }
}

export default App;
