import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SwipeableViews from 'react-swipeable-views-native'

import Tree from './components/Tree'
import Forest from './components/Forest'
import TreeViewer from './components/TreeViewer'
import Axe from './components/Axe'

const ALL_TREES_URL = 'localhost:3000/trees'

export default class App extends Component {
  state = {
    testForest :
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
      ],
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
      <TreeViewer trees={this.state.testForest} />
      // <SwipeableViews>
      //
      //     <Forest trees={this.state.testForest}/>
      // </SwipeableViews>

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
