import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tree from './components/Tree';
import Forest from './components/Forest';
import Auth from './components/Auth';


export default class App extends Component {
 state = {
   user_id: undefined,
 };

_setUserId = (newUserId) => {
  this.setState({user_id: newUserId})
}

  render() {
    return (
      <View>
      { this.state.user_id !== undefined ?
        <Forest /> : <Auth setUserId={this._setUserId}/>
      }
      </View>

    );
  }


}
