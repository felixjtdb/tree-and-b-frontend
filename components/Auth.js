import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthSession } from 'expo';
import jwtDecoder from 'jwt-decode';

// Need to be extracted into environment variables
const auth0ClientId = 'aZubr17XYtkDNEpHo6aT8yUkhCHJaBbp'
const auth0Domain = 'https://tree-and-b.eu.auth0.com'

// Creates a query string
function toQueryString(params) {
  return '?' + Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

export default class Auth extends Component {

  _loginWithAuth0 = async () => {
   const redirectUrl = AuthSession.getRedirectUrl();
   console.log(`Redirect URL (add this to Auth0): ${redirectUrl}`);
   const result = await AuthSession.startAsync({
     authUrl: `${auth0Domain}/authorize` + toQueryString({
       client_id: auth0ClientId,
       response_type: 'token',
       scope: 'openid profile name',
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
   const user_id = decodedToken.name;
   this.props.setUserId(user_id);
  }

  render() {
    return (
    <View>
    <Text>Auth0 login</Text>
    <Button title="Login with Auth0" onPress={this._loginWithAuth0} />
    </View>
  )}

}
