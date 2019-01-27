import React, { Component } from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';

export default class Tree extends Component {
  render() {
    return (
      <View>
        <Image
          style={{ width: 75, height: 75 }}
          source={{ uri: this.props.imageURL }}
        />
        <Text style={styles.bigblue}> {this.props.name} </Text>
        <Text> {this.props.description} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
