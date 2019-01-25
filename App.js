import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tree from './components/Tree';

export default class App extends Component {
  render() {
    return (
      <View style={styles.defaultSpacing}>
        <Text style={styles.titleText}>App Running</Text>
        <Tree description={"I am a big ol tree"}/>
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
