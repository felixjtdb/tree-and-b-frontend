import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tree from './components/Tree'
import Forest from './components/Forest'
import TreeViewer from './components/TreeViewer'
import Axe from './components/Axe'

const ALL_TREES_URL = 'localhost:3000/trees'

export default class App extends Component {
  state = {
    data: ''
  }

  componentDidMount = () => {
    fetch(ALL_TREES_URL, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      this.setState({
        data: responseJSON.body
      })
    })
    .catch(error => {
      this.setState({
        data: 'ERROR WHEN FETCHING TREES... THE FOREST IS ON FIRE!!'
      })
    })
  }

  render() {
    return (
      <View style={styles.defaultSpacing}>
        <Text> {this.state.data} </Text>
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

// <TreeViewer imageURL={'http://www.irishtreesociety.com/wp-content/uploads/irish-tree-society-feature.jpg'}/>
