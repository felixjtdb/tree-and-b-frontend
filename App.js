import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tree from './components/Tree';
import Forest from './components/Forest';
import TreeViewer from './components/TreeViewer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.defaultSpacing}>
        <TreeViewer imageURL={'http://www.irishtreesociety.com/wp-content/uploads/irish-tree-society-feature.jpg'}/>
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
    top: 50
  }
});
