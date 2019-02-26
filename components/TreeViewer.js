import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { testTrees } from '../assets/testTrees.js'

import Tree from './Tree.js'

import SwipeCards from 'react-native-swipe-cards';

export default class TreeViewer extends Component {
  state = {
    trees: testTrees,
    liked: [],
    disliked: []
  }

  render() {
    return (
      <SwipeCards style={styles.swipe_cards}
        cards={this.state.trees}
        renderCard={(treeData) => <Tree {...treeData}/> }

        handleYup={this.saveToForest.bind(this)}
        handleNope={this.burnTree.bind(this)}
      />
    );
  }

  saveToForest(index) {
    this.setState({
      liked: this.state.liked.concat(index["id"])
    })
  }

  burnTree(index) {
    this.setState({
      disliked: this.state.disliked.concat(index["id"])
    })
  }
}

const styles = StyleSheet.create({
  swipe_cards: {
    borderColor: '#01ad01',
    padding: 15,
    zIndex: 0
  }
});
