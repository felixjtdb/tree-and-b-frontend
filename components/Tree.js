import React, { Component } from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { Constants } from 'expo'

export default class Tree extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={"cover"}
          source={{ uri: this.props.imageURL }}
        />
        <Text style={styles.name}> {this.props.name} </Text>
        <Text style={styles.description}> {this.props.description} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 60,
  },
  name: {
    color: 'red'
  },
  description: {

  },
  location: {

  }
});
