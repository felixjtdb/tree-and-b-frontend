import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem } from "react-native-elements";
import Tree from './Tree.js'

export default class Forest extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <List>
        <FlatList
          data={this.props.trees}
          renderItem={({ item }) => (<Tree name={item.name} imageURL={item.imageURL} description={item.description}> </Tree>)}
          scrollable={true}
        />
    </List>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})
