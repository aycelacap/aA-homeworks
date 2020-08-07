import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  store.dispatch = addLoggingToDispatch(store);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// PHASE 1 
// Although the functionality works, avoid overwriting store.dispatch 

// const addLoggingToDispatch = (store) => {
//   let OGDispatch = store.dispatch;

//   return (action) => {
//     console.log(store.getState());
//     console.log(action);
//     OGDispatch(action);
//     console.log(store.getState());
//   }
// };



// Phase 2: Refactoring (without Using Redux applyMiddleware)
const addLoggingToDispatch = store => next => action => {
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState());
};

const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
};
