import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem } from "react-native-elements";
import Tree from './Tree.js'

const testForest =
  [ { id : 1,
      name: 'Oak',
      imageURL: 'https://www.fast-growing-trees.com/images/P/Live-Oak-Tree-450w.jpg',
      description: "I'm a big ol tree",
      location: 123
    },
    { id : 2,
      name: 'BrOak',
      imageURL: "http://www.irishtreesociety.com/wp-content/uploads/irish-tree-society-feature.jpg",
      description: "me too!",
      location: 456
    }
  ]

export default class Forest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trees : testForest
    }
  };

  render() {
    return (
      <List>
        <FlatList
          data={this.state.trees}
          renderItem={({ item }) => (<Tree name={item.name} imageURL={item.imageURL} description={item.description}> </Tree>)}
        />
    </List>
    );
  }
}
