import React, { Component } from 'react';
import { StyleSheet, Button, View, Dimensions } from 'react-native'
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';

var navbarWidth = Dimensions.get('window').width
var navbarHeight = Dimensions.get('window').height / 10

class Navbar extends Component {
  render() {
    return (
      <View style={styles.navbar_container}>
        <Button style={styles.navbar_item} title={'Camera!'} onPress={() => {
          this.props.navigation.navigate('ImageCapture', {
            navigation: this.props.navigation
          })
        }}/>
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
    borderColor: '#6d2edc',
    borderRadius: 40
  }
});
