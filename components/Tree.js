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
        <Text style={styles.location}> {this.props.location} </Text>
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
    height: 150,
    width: 150,
    borderRadius: 150,
  },
  name: {
    color: 'red'
  },
  description: {

  },
  location: {

  }
});
