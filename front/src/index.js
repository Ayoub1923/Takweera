import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import allreducers from './redux/reducers/all.js'
import App from './App';
const store = createStore(allreducers, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}>
  <App /></Provider>,
  document.getElementById('root')
);