import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hats.component';
import { Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
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
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
