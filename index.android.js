import React, {Component} from 'react';

import {AppRegistry, StyleSheet, ListView, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Meteor, { createContainer } from 'react-native-meteor';

import HomeScreen from './app/HomeScreen.js';
import ScreenTwo from './app/ScreenTwo.js';
import ScreenThree from './app/ScreenThree.js';


const AwesomeProject = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Two: {
    screen: ScreenTwo
  },
  Three: {
    screen: ScreenThree
  }
});




// App registration and rendering
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
