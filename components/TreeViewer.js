import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Tree from './Tree.js'
import Axe from './Axe.js'
import Water from './Water.js'

export default class TreeViewer extends Component {

  render() {
    return (
      <View style={styles.treeviewer}>
        <View>
          <Tree name={this.props.name} imageURL={this.props.imageURL} description={this.props.description} />
        </View>
        <View stlye={styles.axe_water_container}>
          <Axe />
          <Water />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  axe_water_container: {
    flex: 2,
    flexDirection: 'column',
    alignContent: 'center',
  },
  treeviewer: {
    flexDirection: 'row',
    alignContent: 'center',
  }
});
