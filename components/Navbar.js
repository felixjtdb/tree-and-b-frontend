import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, View, Dimensions, Image } from 'react-native'
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';

import treeViewerImage from '../assets/images/TreeViewer.png'
import forestImage from '../assets/images/Forest.png'

var navbarWidth = Dimensions.get('window').width
var navbarHeight = Dimensions.get('window').height / 10

class Navbar extends Component {
  render() {
    return (
      <View style={styles.navbar_container}>
        <TouchableHighlight style={styles.navbar_item}
          onPress={() => {
            this.props.navigation.navigate('TreeViewer', {
              navigation: this.props.navigation
            })
          }}
        >
          <Image
            style={[styles.navbar_item, styles.navbar_item_image]}
            source={treeViewerImage}
          />
        </TouchableHighlight>

       <TouchableHighlight style={styles.navbar_item}
        onPress={() => {
           this.props.navigation.navigate('Forest', {
             navigation: this.props.navigation
           })
         }}
        >
          <Image
            style={[styles.navbar_item, styles.navbar_item_image]}
            source={forestImage}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default Navbar;

const styles = StyleSheet.create({
  navbar_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: navbarWidth,
    height: navbarHeight,
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#b0b0b0'

  },
  navbar_item: {
    height: navbarHeight,
    width: navbarHeight,
    borderRadius: navbarHeight
  },
  navbar_item_image: {
    resizeMode: 'contain'
  }
});
