import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { testTrees } from '../assets/testTrees.js'

import Tree from './Tree.js'
import Navbar from './Navbar.js'

export default class Forest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trees: testTrees
    }
  };

  renderItem(item) {
    return (
      <Tree key={item.id} name={item.name} imageURL={item.imageURL} description={item.description} styling={styles.treeContainer}/>
    )
  }

  render() {
    return (
        <List style={styles.list}>
          <FlatList
            data={this.state.trees}
            renderItem={({ item }) => this.renderItem(item)}
            scrollable={true}
            style={styles.list}
            keyExtractor={(item) => item.id.toString()}
          />
        </List>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    zIndex: 1,
    alignContent: 'center',
    marginBottom: Dimensions.get('window').height / 10
  },
  treeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    height:  Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 3,
    zIndex: 1
  }
})
