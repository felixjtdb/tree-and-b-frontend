import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { getUserToken } from '../actions';;

class AuthLoading extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.getUserToken().then(() => {
      this.props.navigation.navigate(this.props.token.token !== null ? 'App' : 'Auth');
    })
    .catch(error => {
      this.setState({ error })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  token: state.token,
});


const mapDispatchToProps = dispatch => ({
  getUserToken: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
