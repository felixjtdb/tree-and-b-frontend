import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, Dimensions  } from 'react-native';

export default class Tree extends Component {
  render() {
    return (
      <View styles={this.props.styling}>
        <Image
          style={styles.image}
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

  image: {
    margin: 'auto',
    height:  Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width / 2,
    borderRadius: Dimensions.get('window').height / 2,
    resizeMode: 'stretch'
  },
  name: {
    color: 'red'
  },
  description: {

  },
  location: {

  }
});
