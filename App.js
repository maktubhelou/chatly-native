import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainPage from './components/MainPage';
import mapDispatchToProps from './redux/actions.js';
import { connect } from 'react-redux';

import { store } from './redux/store.js';


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