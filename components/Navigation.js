import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Image, StyleSheet } from 'react-native'

import treeViewerImage from '../assets/images/TreeViewer.png'
import forestImage from '../assets/images/Forest.png'
import cameraImage from '../assets/images/ImageCapture.png'

import Forest from './Forest'
import TreeViewer from './TreeViewer'
import ImageCapture from './ImageCapture'
import Auth from './Auth'
import AuthLoading from './AuthLoading'

const App = createBottomTabNavigator({
  // RouteConfigs
  ImageCapture: {
    screen: ImageCapture,
    navigationOptions: () => ({
      tabBarIcon: (<Image source={cameraImage} style={styles.navbar_item}/>)
    })
  },
  TreeViewer: {
    screen: TreeViewer,
    navigationOptions: () => ({
      tabBarIcon: (<Image source={treeViewerImage} style={styles.navbar_item}/>)
    })
  },
  Forest: {
    screen: Forest,
    navigationOptions: () => ({
      tabBarIcon: (<Image source={forestImage} style={styles.navbar_item}/>)
    })
  }
},
// BottomTabNavigatorConfig
{
  initialRouteName: 'TreeViewer',
  backBehaviour: true,
  defaultNavigationOptions: () => ({
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    }
  })
})


const AppNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: Auth,
        App: App,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export const AppContainer = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  navbar_item: {
    resizeMode: 'contain',
    height: 25,
    width: 25
  }
});
