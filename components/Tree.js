import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Tree extends Component {
  render() {
    return (
      <View>
        <Text style={styles.bigblue}> {this.props.description} </Text>
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
