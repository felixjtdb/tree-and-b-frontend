import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native'

var navbarHeight = Dimensions.get('window').height / 8
var navbarItemWidth = Dimensions.get('window').width / 3

class Navbar extends Component {
  render() {
    return (
      <View style={styles.navbar_container}>
        <Text style={styles.navbar_item}> Upload Tree! </Text>
        <Text style={styles.navbar_item}> TreeViewer! </Text>
        <Text style={styles.navbar_item}> Forest! </Text>
      </View>
    );
  }
}

export default Navbar;

const styles = StyleSheet.create({
  navbar_container: {
    backgroundColor: '#f782b9',
    flexDirection: 'row',
    height: navbarHeight,
    alignItems: 'center',
    alignContent: 'center'
  },
  navbar_item: {
    flex: 1,
    justifyContent: 'center',
    width: navbarItemWidth,
    height: navbarHeight,
  }
});
