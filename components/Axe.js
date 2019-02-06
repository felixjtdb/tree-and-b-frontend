import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Image, TouchableOpacity, Text, View, Dimensions } from 'react-native'
import axe_image from './images/Axe_image.png'

const { width, height } = Dimensions.get('window');

export default class Axe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    this.setState(
      { count: this.state.count+1 }
    )
  }

  render() {
    return (

        <View styles={styles.axe_container}>
          <TouchableOpacity onPress={this.increaseCount}>
            <Image
              source={axe_image}
              style={styles.axe}
              resizeMode={"stretch"}
            />
          </TouchableOpacity>
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
    borderRadius: 80
  },
  axe_container: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});
