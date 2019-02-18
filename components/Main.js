import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import SwipeableViews from 'react-swipeable-views-native'

import Tree from './Tree'
import Forest from './Forest'
import TreeViewer from './TreeViewer'
import Axe from './Axe'
import Navbar from './Navbar'

const ALL_TREES_URL = 'http://treeandb.herokuapp.com/api/v1/trees'
const NAV_BAR_HEIGHT = Dimensions.get('window').height / 8

class Main extends Component {

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

  getAllTrees() {
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

  componentDidMount = () => {
    // getAllTrees()
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TreeViewer trees={this.state.testForest} />
      </React.Fragment>
    );
  }

}

export default Main;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navbar: {
    height: NAV_BAR_HEIGHT
  }
});
