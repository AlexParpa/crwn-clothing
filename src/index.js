import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, {persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


import './index.css';
import App from './App';
// BrowserRouter gives our app all the functionality of routing that react-router-dom provides 
ReactDOM.render( 
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

