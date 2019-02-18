import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Tree from './Tree.js'
import Axe from './Axe.js'
import Water from './Water.js'

import SwipeCards from 'react-native-swipe-cards';

export default class TreeViewer extends Component {
  constructor(props) {
    super(props);
    let { width, height } = Dimensions.get('window')
  }

  render() {
    return (
      <SwipeCards style={styles.swipe_cards}
        cards={this.props.trees}
        renderCard={(treeData) => <Tree {...treeData}/> }

        handleYup={this.saveToForest}
        handleNope={this.burnTree}
      />
    );
  }

  saveToForest() {
    console.log('YEP')
  }

  burnTree() {
    console.log('NOPE')
  }
}

const styles = StyleSheet.create({
  swipe_cards: {
    borderColor: '#01ad01',
    padding: 15
  }
});
