import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Image, TouchableOpacity, Text, View, Dimensions } from 'react-native'
import water_image from './images/Water_image.png'

export default class Axe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increaseCount = () => {
    this.setState(
      { count : this.state.count+1 }
    )
  }

  render() {
    return (
        <View>
          <TouchableOpacity onPress={this.increaseCount}>
            <Image
            source={water_image}
              style={styles.water}
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
  water: {
    height: 80,
    width: 80,
    borderRadius: 80,
  }
});
