import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, Dimensions  } from 'react-native';

export default class Tree extends Component {
  render() {
    return (
      <React.Fragment>
        <Image
          style={styles.image}
          source={{ uri: this.props.imageURL }}
        />
        <Text style={styles.name}> {this.props.name} </Text>
        <Text style={styles.description}> {this.props.description} </Text>
        <Text style={styles.location}> {this.props.location} </Text>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    margin: 'auto',
    height:  Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 3,
    borderRadius: Dimensions.get('window').height / 3,
    resizeMode: 'contain'
  },
  name: {
    color: 'red'
  },
  description: {

  },
  location: {

  }
});
