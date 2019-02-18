import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, Dimensions  } from 'react-native';
import { Constants } from 'expo'


export default class Tree extends Component {
  render() {
    return (
      <View style={ [styles.container, {height: this.props.height, width: this.props.width}] }>
        <Image
          style={styles.image}
          resizeMode={"cover"}
          source={{ uri: this.props.imageURL }}
        />
        <Text style={styles.name}> {this.props.name} </Text>
        <Text style={styles.description}> {this.props.description} </Text>
        <Text style={styles.location}> {this.props.location} </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    height:  Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width / 2,
  },
  image: {
    margin: 'auto',
    height:  Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width / 2,
    borderRadius: Dimensions.get('window').height / 2,
    resizeMode: 'cover'
  },
  name: {
    color: 'red'
  },
  description: {

  },
  location: {

  }
});
