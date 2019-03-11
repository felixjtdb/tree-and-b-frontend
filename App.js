import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { AppContainer } from './components/Navigation.js'
import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
