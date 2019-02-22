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

  render() {
    return (
      <React.Fragment key='Forest'>
        <Navbar navigation={this.props.navigation}/>
          <FlatList
            data={this.state.trees}
            renderItem={({ item }) =>
              <Tree name={item.name} imageURL={item.imageURL} description={item.description} styling={styles.treeContainer}/>
            }
            scrollable={true}
            style={styles.list}
          />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    zIndex: 1,
    alignContent: 'center',
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
