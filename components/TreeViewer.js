import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Tree from './Tree.js'
import Axe from './Axe.js'
import Water from './Water.js'

import SwipeCards from 'react-native-swipe-cards';

export default class TreeViewer extends Component {
  constructor(props) {
    super(props);
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
    flex: 1,
    borderColor: '#01ad01'
  }
});


// <View style={styles.treeviewer >
//   <View>
//     <Tree name={this.props.name} imageURL={this.props.imageURL} description={this.props.description} />
//   </View>
//   <View stlye= {styles.axe_water_container}>
//     <Axe />
//     <Water />
//   </View>
// </View>
