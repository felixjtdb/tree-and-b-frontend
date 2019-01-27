import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tree from './components/Tree';
import Forest from './components/Forest';

export default class App extends Component {
  render() {
    return (
      <View>
        <Forest />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  defaultSpacing: {
    flex: 1,
    flexDirection: 'row',
    top: 50
  }
});
