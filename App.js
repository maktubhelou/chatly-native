import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainPage from './MainPage';
import mapDispatchToProps from './actions.js';
import { connect } from 'react-redux';

import { store } from './store.js';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
};

// const mapStateToProps = state => state;
// export default connect(
//   mapStateToProps, 
//   mapDispatchToProps,
// )(App);