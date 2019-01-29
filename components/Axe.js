import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Image, TouchableHighlight, Text, View } from 'react-native'
import axe_image from './images/Axe_image.png'

export default class Axe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    this.setState(
      { count: this.state.count + 1 }
    )
  }

  render() {
    return (
        <View>
          <TouchableHighlight onPress={this.increaseCount} style={styles.axe_container}>
            <Image
              style={styles.axe}
              resizeMode={"stretch"}
              source={axe_image}
            />
          </TouchableHighlight>
          <Text> {this.state.count} </Text>
        </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App)

const styles = StyleSheet.create({
  axe: {
    height: 80,
    width: 80,
    borderRadius: 60,
    justifyContent: 'flex-start'
  },
  axe_container: {
    flex: 1,
    justifyContent: 'flex-end'
  }

});
