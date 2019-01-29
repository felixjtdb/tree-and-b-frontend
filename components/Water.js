import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Image, TouchableHighlight, Text, View } from 'react-native'
import water_image from './images/Water_image.png'
export default class Axe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increaseCount = () => {
    this.setState({count : this.state.count+1})
  }

  render() {
    return (
      <View>
        <View style={styles.water_container}>
          <TouchableHighlight onPress={this.increaseCount}>
            <Image
              style={styles.water}
              resizeMode={"stretch"}
              source={water_image}
            />
          </TouchableHighlight>
        </View>
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
    borderRadius: 60
  },
  water_container: {
      flex: 1,
      justifyContent: 'flex-end'
  }

});
