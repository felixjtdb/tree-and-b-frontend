import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthSession } from 'expo';
import jwtDecoder from 'jwt-decode';
import Tree from './components/Tree';
import Forest from './components/Forest';

// Need to be extracted into environment variables
const auth0ClientId = 'aZubr17XYtkDNEpHo6aT8yUkhCHJaBbp'
const auth0Domain = 'https://tree-and-b.eu.auth0.com'

// Creates a query string
function toQueryString(params) {
  return '?' + Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}


export default class App extends Component {
 state = {
   user_id: undefined,
 };

 _loginWithAuth0 = async () => {
  const redirectUrl = AuthSession.getRedirectUrl();
  console.log(`Redirect URL (add this to Auth0): ${redirectUrl}`);
  const result = await AuthSession.startAsync({
    authUrl: `${auth0Domain}/authorize` + toQueryString({
      client_id: auth0ClientId,
      response_type: 'token',
      scope: 'openid name',
      redirect_uri: redirectUrl,
    }),
  });

  console.log(result);
  if (result.type === 'success') {
    this.handleParams(result.params);
  }
  }

handleParams = (responseObj) => {
  if (responseObj.error) {
    Alert.alert('Error', responseObj.error_description
      || 'something went wrong while logging in');
    return;
  }
  const encodedToken = responseObj.id_token;
  const decodedToken = jwtDecoder(encodedToken);
  const username = decodedToken.name;
  this.setState({ username });
  }


  render() {
    return (
      <View>
      {this.state.username !== undefined ?
        <Forest /> :
        <Text>Auth0 login</Text>
        <Button
          title="Login with Auth0"
          onPress={this._loginWithAuth0}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  defaultSpacing: {
    flex: 1,
    flexDirection: 'row',
    top: 50
  }
});
