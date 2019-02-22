import React, { Component } from 'react';
import { StyleSheet, Button, View, Dimensions } from 'react-native'
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';

var navbarItemHeight = Dimensions.get('window').height / 10
var navbarWidth = Dimensions.get('window').width / 5
var navbarHeight = navbarItemHeight * 1.5

class Navbar extends Component {
  render() {
    return (
      <View style={styles.navbar_container}>
        <Button style={styles.navbar_item} title={'Trees!'} onPress={() => {
          this.props.navigation.navigate('TreeViewer', {
            navigation: this.props.navigation
          })
        }}/>
        <Button style={styles.navbar_item} title={'Forest!'} onPress={() => {
            this.props.navigation.navigate('Forest', {
              navigation: this.props.navigation
            })
          }}/>
      </View>
    );
  }
}

export default Navbar;

const styles = StyleSheet.create({
  navbar_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: navbarWidth,
    height: navbarHeight,
    zIndex: 1,
    position: 'absolute',
    top: 50,
    backgroundColor: '#b0b0b0'

  },
  navbar_item: {
    height: navbarItemHeight,
    borderColor: '#6d2edc',
    borderRadius: 40
  }
});
